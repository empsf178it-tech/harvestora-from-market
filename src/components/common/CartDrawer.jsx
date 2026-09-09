import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, X, Plus, Minus, Trash2, ShieldCheck, ArrowRight, Truck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart, showToast } = useApp();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '', slot: 'Morning 7:00 AM - 9:00 AM' });

  if (!isCartOpen) return null;

  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      showToast("Please fill in your delivery details.");
      return;
    }
    setOrderSuccess(true);
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      setOrderSuccess(false);
      setIsCartOpen(false);
      showToast("🎉 Order Placed! Fresh farm veggies will arrive at your doorstep!");
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2C2A29] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EFEBE4] bg-[#1C160F] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4E5D36] flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-display text-lg font-bold text-[#F4E8D1]">Your Farm Fresh Basket</h3>
                <p className="text-xs text-gray-300">Direct from local organic growers</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="px-5 py-3 bg-[#F4E8D1]/60 border-b border-[#D4A359]/30 text-xs text-[#1C160F]">
            {cartTotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-2 font-medium text-[#4E5D36]">
                <Truck className="w-4 h-4 text-[#4E5D36]" />
                🎉 You've unlocked FREE Cold-Chain Express Delivery!
              </div>
            ) : (
              <div>
                <div className="flex justify-between mb-1 font-medium">
                  <span>Add ₹{freeShippingThreshold - cartTotal} more for FREE Express Delivery</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#EFEBE4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4E5D36] transition-all duration-300" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <div className="w-20 h-20 rounded-full bg-[#EFEBE4] flex items-center justify-center mb-4 text-[#4E5D36]">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="font-serif-display text-xl text-[#1C160F] mb-1">Your basket is empty</h4>
                <p className="text-sm text-gray-600 mb-6">Explore our fresh morning harvest & organic pulses straight from local farms.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#4E5D36] text-white font-medium rounded-xl hover:bg-[#3B4729] transition shadow-md"
                >
                  Start Shopping Fresh
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-white rounded-xl border border-[#EFEBE4] shadow-xs hover:border-[#4E5D36]/30 transition">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-sm text-[#1C160F] line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 p-1 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">{item.unit || item.packSize}</p>
                      {item.farmerName && (
                        <p className="text-[11px] text-[#4E5D36] font-medium mt-0.5">🌾 {item.farmerName}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#EFEBE4] rounded-lg bg-[#FAF7F2] overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-200 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-[#1C160F]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-200 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm text-[#B85C38]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#EFEBE4] bg-white space-y-3">
              {/* Freshness Trust Badge */}
              <div className="flex items-center gap-2 p-2.5 bg-[#FAF7F2] rounded-lg text-xs text-[#4E5D36] font-medium border border-[#4E5D36]/20">
                <ShieldCheck className="w-4 h-4 text-[#4E5D36] flex-shrink-0" />
                <span>100% Freshness Guarantee • Harvested & Shipped in 24 Hrs</span>
              </div>

              {/* Subtotal */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Item Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Cold-Chain Express Delivery</span>
                  <span>{cartTotal >= freeShippingThreshold ? <span className="text-[#4E5D36] font-semibold">FREE</span> : '₹49'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1C160F] pt-2 border-t border-[#EFEBE4]">
                  <span>Total Amount</span>
                  <span className="text-[#B85C38] text-lg">
                    ₹{cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 49)}
                  </span>
                </div>
              </div>

              {/* Checkout Trigger / Form */}
              {!isCheckingOut ? (
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3.5 bg-[#4E5D36] text-white font-bold rounded-xl hover:bg-[#3B4729] transition shadow-lg flex items-center justify-center gap-2"
                >
                  Proceed to Direct Farm Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : orderSuccess ? (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="font-serif-display text-lg text-emerald-900 font-bold">Direct Order Placed!</h4>
                  <p className="text-xs text-emerald-700">Order ID: #BIO-ORDER-2026-9912. Your farmer team is now harvesting your basket!</p>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="space-y-3 pt-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#1C160F]">Delivery Address</h4>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#4E5D36]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (for SMS Tracking)"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#4E5D36]"
                  />
                  <textarea
                    placeholder="Complete Delivery Address & City"
                    required
                    rows="2"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#4E5D36]"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="w-1/3 py-2.5 bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg hover:bg-gray-300 transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-2.5 bg-[#B85C38] text-white text-xs font-bold rounded-lg hover:bg-[#a04e2e] transition shadow-md"
                    >
                      Confirm Cash/UPI on Delivery
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
