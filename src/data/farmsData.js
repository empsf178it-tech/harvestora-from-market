import { IMAGES } from './imagesData';

export const FARMS = [
  {
    id: "thanjavur-paddy",
    name: "Cauvery Delta Paddy Farms",
    region: "Thanjavur & Tiruvarur, Tamil Nadu",
    cropType: "Ponni & Heirloom Rice",
    landscape: "Alluvial River Delta & Canal Irrigation",
    image: IMAGES.farms.paddy,
    description: "Known as the Rice Bowl of South India, these deltaic fields rely on river channels and nutrient-rich silt accumulated over centuries. Farmers cultivate rice varieties adapted to seasonal water flows.",
    stats: {
      acreage: "1,200+ Acres",
      soilType: "Alluvial Clay Loam",
      waterSource: "Cauvery River System & Rainwater Harvesting",
      farmersCount: "340+ Farming Families"
    },
    practices: [
      "Traditional bund management for water retention",
      "Green manure crops between rice cycles",
      "System of Rice Intensification (SRI) techniques",
      "Community grain storage facilities"
    ]
  },
  {
    id: "deccan-millet",
    name: "Deccan Plateau Millet Drylands",
    region: "Ballari & Raichur, Karnataka",
    cropType: "Finger Millet, Pearl Millet, Sorghum",
    landscape: "Semi-Arid Red Clay & Granite Terrain",
    image: IMAGES.farms.millet,
    description: "Situated on the elevated drylands of Karnataka, these farms celebrate resilient grains. Rain-fed millets thrive with minimal water inputs, producing dense, mineral-rich yields.",
    stats: {
      acreage: "850+ Acres",
      soilType: "Red Sandy Loam",
      waterSource: "Seasonal Monsoon & Farm Ponds",
      farmersCount: "210+ Farming Families"
    },
    practices: [
      "Zero chemical fertilizer usage on dryland grains",
      "Intercropping millets with leguminous pulses",
      "Soil moisture conservation contour farming",
      "Heirloom seed saving networks"
    ]
  },
  {
    id: "nilgiris-vegetables",
    name: "Nilgiris High-Altitude Terraces",
    region: "Ooty & Kotagiri, Tamil Nadu",
    cropType: "Cool Climate Organic Vegetables",
    landscape: "Mist-Covered Mountain Terraces",
    image: IMAGES.farms.vegetable,
    description: "High in the Western Ghats, terraced vegetable beds benefit from cool temperatures, rich organic humus, and pristine mountain air. Produce grown here is exceptionally crisp and sweet.",
    stats: {
      acreage: "420+ Acres",
      soilType: "Volcanic Forest Humus",
      waterSource: "Natural Mountain Springs",
      farmersCount: "115+ Hill Farmers"
    },
    practices: [
      "Contour terracing to prevent slope erosion",
      "Natural compost and vermicompost fertilization",
      "Biological pest control using flower borders",
      "Hand-harvesting every sunrise"
    ]
  },
  {
    id: "cauvery-banana",
    name: "Cauvery River Banana Plantations",
    region: "Tiruchirappalli & Karur, Tamil Nadu",
    cropType: "Traditional Banana Varieties (Poovan, Nendran, Rasthali)",
    landscape: "Lush Riverine Green Groves",
    image: IMAGES.farms.banana,
    description: "Spanning the fertile banks of the Cauvery, these dense green groves produce aromatic banana varieties prized across South India for rich flavor and natural sweetness.",
    stats: {
      acreage: "600+ Acres",
      soilType: "Deep Alluvial Loam",
      waterSource: "Drip Irrigation from River Wells",
      farmersCount: "160+ Plantation Farmers"
    },
    practices: [
      "Mulching with fallen fronds for moisture retention",
      "Micro-drip irrigation efficiency",
      "Zero synthetic fruit coating or artificial sprays",
      "Traditional bunch propping with bamboo poles"
    ]
  },
  {
    id: "chittoor-orchards",
    name: "Chittoor Valley Mango Orchards",
    region: "Chittoor & Tirupati, Andhra Pradesh",
    cropType: "Alphonso, Totapuri, Banganapalli Mangoes",
    landscape: "Rolling Sunlit Hills & Granite Valleys",
    image: IMAGES.farms.orchard,
    description: "Famous for sun-drenched summers and well-drained soils, Chittoor orchards yield sweet, fragrant mangoes harvested at exact tree-maturity.",
    stats: {
      acreage: "950+ Acres",
      soilType: "Red Granitic Soil",
      waterSource: "Sub-surface Bore Wells & Drip Systems",
      farmersCount: "280+ Orchard Growers"
    },
    practices: [
      "Tree-borne natural ripening without chemical catalysts",
      "Organic neem oil pest management",
      "Pruning for maximum sun penetration",
      "Hand-netted harvest picking"
    ]
  }
];
