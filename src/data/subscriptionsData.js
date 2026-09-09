import { IMAGES } from './imagesData';

export const SUBSCRIPTION_PLANS = [
  {
    id: "veggie-essential",
    name: "Essential Farm Veggie Box",
    badge: "Most Popular",
    tagline: "7-8 Varieties of fresh daily hand-picked organic vegetables.",
    priceWeekly: 499,
    priceMonthly: 1899,
    savings: "Save 15% vs retail",
    weight: "5.5 kg / week",
    idealFor: "Families of 2-4 people",
    image: IMAGES.products.vegetables,
    features: [
      "Harvested within 12 hours of delivery",
      "100% Certified Organic & Pesticide-Free",
      "Free item swapping up to 2 items/week",
      "Delivered every Tuesday or Saturday morning",
      "Direct profit share to Farmer Velusamy & Farm Team"
    ],
    includedItems: ["Spinach/Greens", "Native Tomato", "Brinjal", "Ridge Gourd", "Carrot", "Potato", "Beans", "Curry Leaves/Coriander"]
  },
  {
    id: "fruit-exotic",
    name: "Orchard Fresh Fruit Basket",
    badge: "Tree-Ripened",
    tagline: "4-5 Varieties of naturally tree-ripened seasonal tropical & hill fruits.",
    priceWeekly: 699,
    priceMonthly: 2599,
    savings: "Save 18% vs store price",
    weight: "4.0 kg / week",
    idealFor: "Fruit lovers & healthy snacking",
    image: IMAGES.products.fruits,
    features: [
      "Zero carbide & zero synthetic wax ripening",
      "Hand-picked at peak natural brix sweetness",
      "Includes rare heirloom native fruit varieties",
      "Sustainable cushioned eco-box packaging",
      "Direct support to Salem & Chittoor Orchardists"
    ],
    includedItems: ["Alphonso/Malgova Mangoes", "Robusta/Red Banana", "Papaya", "Pomegranate", "Hill Passionfruit"]
  },
  {
    id: "artisan-pantry",
    name: "Heritage Pantry & Grains Box",
    badge: "Best Value",
    tagline: "Unpolished heritage rice, cold-pressed oils, native pulses & spices.",
    priceWeekly: 899,
    priceMonthly: 3299,
    savings: "Save 20% bundle price",
    weight: "7.0 kg / month",
    idealFor: "Health-conscious home cooks",
    image: IMAGES.products.traditionalRice,
    features: [
      "Naturally aged Cauvery Ponni & Heritage Rice",
      "Wood-pressed (Marachekku) sesame & groundnut oil",
      "Stone-ground unpolished native pulses",
      "Vacuum packed for zero-preservative shelf life",
      "Direct support to Cauvery Delta & Palakkad Farmers"
    ],
    includedItems: ["Heritage Mappillai Samba Rice (2kg)", "Wood-Pressed Sesame Oil (1L)", "Organic Green Gram (1kg)", "Native Jaggery (500g)", "Rock Salt (1kg)"]
  },
  {
    id: "superfood-microgreens",
    name: "Microgreens & Immunity Power Pack",
    badge: "Chef Choice",
    tagline: "Nutrient-dense live microgreens, wheatgrass, and fresh herbal immunity shots.",
    priceWeekly: 399,
    priceMonthly: 1499,
    savings: "Save 12%",
    weight: "1.2 kg / week",
    idealFor: "Fitness enthusiasts & wellness routines",
    image: IMAGES.products.greenGram,
    features: [
      "40x higher nutrient density than mature greens",
      "Harvested live on the morning of delivery",
      "Hydroponic & organic coconut coir grown",
      "Zero pesticides & zero soil contaminants",
      "Direct support to Nilgiris Urban AgTech Farmers"
    ],
    includedItems: ["Sunflower Microgreens", "Radish Rambo Sprouts", "Pea Shoots", "Fresh Wheatgrass Tray", "Organic Mint & Basil"]
  }
];
