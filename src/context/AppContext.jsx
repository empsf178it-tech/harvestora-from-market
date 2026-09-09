import React, { createContext, useContext, useState, useEffect } from 'react';
import { BATCH_DATA } from '../data/traceabilityData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // For Quick View Modal
  const [enquiryProduct, setEnquiryProduct] = useState(null); // For Product Enquiry Modal
  const [activeJournalArticle, setActiveJournalArticle] = useState(null); // For Article Reader Modal
  const [toastMessage, setToastMessage] = useState(null);

  // Cart State
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('harvestora_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Active Batch Traceability Lookup
  const [searchedBatch, setSearchedBatch] = useState("#BIO-HARVEST-8942");

  useEffect(() => {
    try {
      localStorage.setItem('harvestora_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    showToast(`Added ${product.name} (${quantity}) to your Farm Fresh Cart! 🌿`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast(`Item removed from cart.`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const openEnquiry = (product) => {
    setEnquiryProduct(product);
  };

  const closeEnquiry = () => {
    setEnquiryProduct(null);
  };

  const openJournalArticle = (article) => {
    setActiveJournalArticle(article);
  };

  const closeJournalArticle = () => {
    setActiveJournalArticle(null);
  };

  return (
    <AppContext.Provider
      value={{
        selectedProduct,
        openQuickView,
        closeQuickView,
        enquiryProduct,
        openEnquiry,
        closeEnquiry,
        activeJournalArticle,
        openJournalArticle,
        closeJournalArticle,
        showToast,
        toastMessage,
        // Cart
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        // Batch
        searchedBatch,
        setSearchedBatch,
        batchDetails: BATCH_DATA[searchedBatch] || BATCH_DATA["#BIO-HARVEST-8942"]
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
