export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  pitch?: string;
  material: string;
  specifications: {
    label: string;
    value: string;
  }[];
  description: string;
  image: string;
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "conveyor-chains",
    name: "Conveyor Chains",
    description: "High-performance conveyor chains for material handling and bulk transportation systems",
    image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXlvciUyMGNoYWluJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: "Package",
  },
  {
    id: "industrial-roller-chains",
    name: "Industrial & Roller Chains",
    description: "Heavy-duty roller chains designed for power transmission and industrial applications",
    image: "https://images.unsplash.com/photo-1585204630262-84278b4d8b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZXIlMjBjaGFpbiUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0OTM3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: "Cog",
  },
  {
    id: "sprockets-gears",
    name: "Sprockets & Gears",
    description: "Precision-engineered sprockets and gears with hardened teeth for maximum durability",
    image: "https://images.unsplash.com/photo-1767739791246-9f832345f8f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHNwcm9ja2V0cyUyMGdlYXJzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: "Settings",
  },
  {
    id: "elevator-custom-solutions",
    name: "Elevator & Custom Solutions",
    description: "Specialized elevator chains and custom fastening solutions for diverse industrial needs",
    image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMHByZWNpc2lvbiUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: "Wrench",
  },
];

export const products: Product[] = [
  // Conveyor Chains Category
  {
    id: "drag-conveyor-chain",
    name: "Drag Conveyor Chain",
    category: "Conveyor Chains",
    categoryId: "conveyor-chains",
    pitch: "100mm, 125mm, 142mm, 160mm",
    material: "Mild Steel / Alloy Steel",
    specifications: [
      { label: "Pitch Range", value: "100mm - 160mm" },
      { label: "Material", value: "MS / Alloy Steel" },
      { label: "Tensile Strength", value: "High Grade" },
      { label: "Heat Treatment", value: "Case Hardened" },
      { label: "Application", value: "Bulk Material Handling" },
    ],
    description: "Heavy-duty drag conveyor chains designed for continuous operation in bulk material handling systems.",
    image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXlvciUyMGNoYWluJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["High load capacity", "Wear resistant", "Long service life", "Low maintenance"],
  },
  {
    id: "redler-chain",
    name: "Redler Chain",
    category: "Conveyor Chains",
    categoryId: "conveyor-chains",
    pitch: "100mm, 125mm, 142mm",
    material: "Mild Steel",
    specifications: [
      { label: "Pitch Range", value: "100mm - 142mm" },
      { label: "Material", value: "Mild Steel" },
      { label: "Chain Type", value: "Closed Die Forged" },
      { label: "Surface Finish", value: "Shot Blasted" },
      { label: "Standard", value: "IS/DIN" },
    ],
    description: "Specialized Redler chains for enclosed conveyor systems with superior dust-proof operation.",
    image: "https://images.unsplash.com/photo-1750601455222-d2566db36f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBjaGFpbnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzc0OTM3NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Dust-proof operation", "Enclosed system", "Forged links", "High precision"],
  },
  {
    id: "magic-conveyor-chain",
    name: "Magic Conveyor Chain",
    category: "Conveyor Chains",
    categoryId: "conveyor-chains",
    pitch: "100mm, 125mm",
    material: "Mild Steel",
    specifications: [
      { label: "Pitch Range", value: "100mm - 125mm" },
      { label: "Material", value: "Mild Steel" },
      { label: "Design", value: "Special Link Design" },
      { label: "Attachment", value: "Flight Compatible" },
      { label: "Use", value: "Horizontal/Inclined" },
    ],
    description: "Innovative magic chains with special link design for flexible conveying applications.",
    image: "https://images.unsplash.com/photo-1585204630262-84278b4d8b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZXIlMjBjaGFpbiUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0OTM3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Flexible design", "Multi-directional", "Easy installation", "Versatile use"],
  },
  {
    id: "mild-steel-conveyor-chain",
    name: "Mild Steel Conveyor Chain",
    category: "Conveyor Chains",
    categoryId: "conveyor-chains",
    pitch: "63mm, 80mm, 100mm, 125mm",
    material: "Mild Steel",
    specifications: [
      { label: "Pitch Range", value: "63mm - 125mm" },
      { label: "Material", value: "Mild Steel" },
      { label: "Finish", value: "Self-Color / Black Oxide" },
      { label: "Breaking Load", value: "Up to 50kN" },
      { label: "Standard", value: "IS/ISO Compliant" },
    ],
    description: "Standard mild steel conveyor chains for general industrial material handling applications.",
    image: "https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHRleHR1cmUlMjBpbmR1c3RyaWFsJTIwc3RlZWx8ZW58MXx8fHwxNzc0OTM3NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Cost-effective", "Reliable performance", "Wide range", "Standard compliant"],
  },
  {
    id: "bulk-flow-chain",
    name: "Bulk Flow Chain",
    category: "Conveyor Chains",
    categoryId: "conveyor-chains",
    pitch: "125mm, 142mm, 160mm",
    material: "Mild Steel / Alloy Steel",
    specifications: [
      { label: "Pitch Range", value: "125mm - 160mm" },
      { label: "Material", value: "MS / Alloy Steel" },
      { label: "Design", value: "Bulk Material Optimized" },
      { label: "Capacity", value: "Heavy Duty" },
      { label: "Environment", value: "Harsh Conditions" },
    ],
    description: "Robust bulk flow chains engineered for high-volume material transportation in demanding environments.",
    image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXlvciUyMGNoYWluJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Heavy-duty construction", "Bulk material handling", "Abrasion resistant", "Long life"],
  },

  // Industrial & Roller Chains Category
  {
    id: "heavy-duty-roller-chains",
    name: "Heavy Duty Roller Chains",
    category: "Industrial & Roller Chains",
    categoryId: "industrial-roller-chains",
    pitch: "12.7mm to 63.5mm (1/2\" to 2.5\")",
    material: "Alloy Steel",
    specifications: [
      { label: "Pitch Range", value: "1/2\" to 2.5\" (ISO)" },
      { label: "Material", value: "Alloy Steel" },
      { label: "Hardness", value: "HRC 48-52" },
      { label: "Tensile Strength", value: "High Grade" },
      { label: "Standard", value: "ISO/ANSI/DIN" },
    ],
    description: "Premium heavy-duty roller chains for power transmission in industrial machinery.",
    image: "https://images.unsplash.com/photo-1585204630262-84278b4d8b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZXIlMjBjaGFpbiUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0OTM3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["High tensile strength", "Precision manufacturing", "Extended wear life", "Global standards"],
  },
  {
    id: "bushed-roller-chains",
    name: "Bushed Roller Chains",
    category: "Industrial & Roller Chains",
    categoryId: "industrial-roller-chains",
    pitch: "12.7mm to 50.8mm",
    material: "Carbon Steel",
    specifications: [
      { label: "Pitch Range", value: "12.7mm - 50.8mm" },
      { label: "Material", value: "Carbon Steel" },
      { label: "Bush Type", value: "Seamless" },
      { label: "Lubrication", value: "Pre-lubricated" },
      { label: "Finish", value: "Nickel Plated / Black" },
    ],
    description: "Standard bushed roller chains with seamless bushings for smooth operation.",
    image: "https://images.unsplash.com/photo-1750601455222-d2566db36f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBjaGFpbnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzc0OTM3NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Seamless bushings", "Low friction", "Pre-lubricated", "Smooth operation"],
  },
  {
    id: "drive-chains",
    name: "Drive Chains",
    category: "Industrial & Roller Chains",
    categoryId: "industrial-roller-chains",
    pitch: "9.525mm to 31.75mm",
    material: "Alloy Steel",
    specifications: [
      { label: "Pitch Range", value: "9.525mm - 31.75mm" },
      { label: "Material", value: "Alloy Steel" },
      { label: "Application", value: "Power Transmission" },
      { label: "Quality", value: "Premium Grade" },
      { label: "Testing", value: "100% Tested" },
    ],
    description: "Precision drive chains for reliable power transmission in automotive and industrial machinery.",
    image: "https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHRleHR1cmUlMjBpbmR1c3RyaWFsJTIwc3RlZWx8ZW58MXx8fHwxNzc0OTM3NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Precision engineered", "High efficiency", "Minimal noise", "100% tested"],
  },
  {
    id: "paver-chains",
    name: "Paver Chains",
    category: "Industrial & Roller Chains",
    categoryId: "industrial-roller-chains",
    pitch: "Custom / Special",
    material: "Heat Treated Alloy Steel",
    specifications: [
      { label: "Pitch", value: "Custom Design" },
      { label: "Material", value: "Heat Treated Alloy" },
      { label: "Application", value: "Paving Machinery" },
      { label: "Load Capacity", value: "Extra Heavy Duty" },
      { label: "Special Feature", value: "Shock Resistant" },
    ],
    description: "Specialized heavy-duty chains for road paving and construction equipment.",
    image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMHByZWNpc2lvbiUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Extra heavy-duty", "Shock resistant", "Construction grade", "Custom design"],
  },

  // Sprockets & Gears Category
  {
    id: "industrial-chain-sprockets-duplex",
    name: "Industrial Chain Sprockets (Duplex)",
    category: "Sprockets & Gears",
    categoryId: "sprockets-gears",
    material: "EN8 / EN19 / C45",
    specifications: [
      { label: "Material", value: "EN8 / EN19 / C45" },
      { label: "Teeth", value: "Hardened HRC 40-45" },
      { label: "Type", value: "Duplex" },
      { label: "Bore", value: "Custom / Standard" },
      { label: "Finishing", value: "CNC Machined" },
    ],
    description: "Precision duplex sprockets with hardened teeth for extended service life.",
    image: "https://images.unsplash.com/photo-1767739791246-9f832345f8f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHNwcm9ja2V0cyUyMGdlYXJzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Hardened teeth", "CNC precision", "Duplex design", "Long service life"],
  },
  {
    id: "industrial-chain-sprockets-simplex",
    name: "Industrial Chain Sprockets (Simplex)",
    category: "Sprockets & Gears",
    categoryId: "sprockets-gears",
    material: "EN8 / EN19 / C45",
    specifications: [
      { label: "Material", value: "EN8 / EN19 / C45" },
      { label: "Teeth", value: "Hardened HRC 40-45" },
      { label: "Type", value: "Simplex" },
      { label: "Pitch", value: "As per ISO/ANSI" },
      { label: "Teeth Range", value: "10 to 120 Teeth" },
    ],
    description: "Standard simplex sprockets manufactured to international standards with precision.",
    image: "https://images.unsplash.com/photo-1585204630262-84278b4d8b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZXIlMjBjaGFpbiUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0OTM3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["ISO/ANSI standard", "Wide teeth range", "Precision machined", "Quality assured"],
  },
  {
    id: "redler-sprockets",
    name: "Redler Sprockets",
    category: "Sprockets & Gears",
    categoryId: "sprockets-gears",
    material: "Cast Iron / Steel",
    specifications: [
      { label: "Material", value: "Cast Iron / Steel" },
      { label: "Type", value: "Redler Compatible" },
      { label: "Design", value: "Special Profile" },
      { label: "Teeth", value: "Case Hardened" },
      { label: "Application", value: "Conveyor Systems" },
    ],
    description: "Specially designed sprockets for Redler chain conveyor systems with precise tooth profiles.",
    image: "https://images.unsplash.com/photo-1767739791246-9f832345f8f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHNwcm9ja2V0cyUyMGdlYXJzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Redler compatible", "Special profile", "Case hardened", "Perfect fit"],
  },
  {
    id: "pinion-gears",
    name: "Pinion Gears",
    category: "Sprockets & Gears",
    categoryId: "sprockets-gears",
    material: "EN19 / EN24",
    specifications: [
      { label: "Material", value: "EN19 / EN24" },
      { label: "Teeth", value: "Ground & Hardened" },
      { label: "Module", value: "Custom as per req." },
      { label: "Precision", value: "DIN Grade 6-8" },
      { label: "Treatment", value: "Heat Treated" },
    ],
    description: "High-precision pinion gears with ground and hardened teeth for critical applications.",
    image: "https://images.unsplash.com/photo-1750601455222-d2566db36f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBjaGFpbnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzc0OTM3NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Ground teeth", "Heat treated", "DIN precision", "Custom modules"],
  },
  {
    id: "bulk-flow-sprockets",
    name: "Bulk Flow Sprockets",
    category: "Sprockets & Gears",
    categoryId: "sprockets-gears",
    material: "Cast Steel / Forged Steel",
    specifications: [
      { label: "Material", value: "Cast / Forged Steel" },
      { label: "Type", value: "Bulk Flow Compatible" },
      { label: "Size", value: "Large Diameter" },
      { label: "Teeth", value: "Wear Resistant" },
      { label: "Application", value: "Heavy Duty" },
    ],
    description: "Large diameter sprockets designed for bulk flow conveyor systems with enhanced wear resistance.",
    image: "https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHRleHR1cmUlMjBpbmR1c3RyaWFsJTIwc3RlZWx8ZW58MXx8fHwxNzc0OTM3NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Large diameter", "Wear resistant", "Heavy-duty build", "Bulk material use"],
  },

  // Elevator & Custom Solutions Category
  {
    id: "ss-bucket-elevator-chains",
    name: "SS Bucket Elevator Chains",
    category: "Elevator & Custom Solutions",
    categoryId: "elevator-custom-solutions",
    pitch: "100mm, 125mm, 160mm",
    material: "Stainless Steel (SS304/SS316)",
    specifications: [
      { label: "Pitch Range", value: "100mm - 160mm" },
      { label: "Material", value: "SS304 / SS316" },
      { label: "Corrosion", value: "Highly Resistant" },
      { label: "Application", value: "Food / Chemical" },
      { label: "Standard", value: "ANSI/ISO" },
    ],
    description: "Corrosion-resistant stainless steel chains for food processing and chemical industry elevators.",
    image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMHByZWNpc2lvbiUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Stainless steel", "Corrosion proof", "Food grade", "Chemical resistant"],
  },
  {
    id: "ms-bucket-elevator-chains",
    name: "MS Bucket Elevator Chains",
    category: "Elevator & Custom Solutions",
    categoryId: "elevator-custom-solutions",
    pitch: "100mm, 125mm, 160mm",
    material: "Mild Steel",
    specifications: [
      { label: "Pitch Range", value: "100mm - 160mm" },
      { label: "Material", value: "Mild Steel" },
      { label: "Strength", value: "High Tensile" },
      { label: "Finish", value: "Black Oxide / Painted" },
      { label: "Use", value: "General Industrial" },
    ],
    description: "Robust mild steel elevator chains for general industrial vertical material handling.",
    image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXlvciUyMGNoYWluJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzQ5Mzc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["High tensile", "Cost-effective", "Reliable", "Industrial grade"],
  },
  {
    id: "seamless-elevator-buckets",
    name: "Seamless Elevator Buckets",
    category: "Elevator & Custom Solutions",
    categoryId: "elevator-custom-solutions",
    material: "Mild Steel / Galvanized Steel",
    specifications: [
      { label: "Material", value: "MS / GI" },
      { label: "Type", value: "Seamless" },
      { label: "Capacity", value: "Various Sizes" },
      { label: "Design", value: "Deep / Shallow" },
      { label: "Finish", value: "Galvanized / Painted" },
    ],
    description: "Durable seamless buckets for elevator chains, available in various capacities and designs.",
    image: "https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHRleHR1cmUlMjBpbmR1c3RyaWFsJTIwc3RlZWx8ZW58MXx8fHwxNzc0OTM3NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Seamless design", "Various capacities", "Leak-proof", "Multiple finishes"],
  },
  {
    id: "elevator-bucket-bolts",
    name: "Elevator Bucket Bolts",
    category: "Elevator & Custom Solutions",
    categoryId: "elevator-custom-solutions",
    material: "Mild Steel / SS",
    specifications: [
      { label: "Material", value: "MS / SS" },
      { label: "Type", value: "T-Bolt / Cup Head" },
      { label: "Thread", value: "Metric / Imperial" },
      { label: "Finish", value: "Zinc Plated / Plain" },
      { label: "Standard", value: "DIN / ISO" },
    ],
    description: "Specialized fastening bolts for secure bucket attachment to elevator chains.",
    image: "https://images.unsplash.com/photo-1750601455222-d2566db36f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBjaGFpbnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzc0OTM3NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Secure fastening", "Multiple types", "Standard threads", "Quality finish"],
  },
  {
    id: "hex-bolts-nut-sets",
    name: "Hex Bolts & Nut Sets",
    category: "Elevator & Custom Solutions",
    categoryId: "elevator-custom-solutions",
    material: "MS / SS / High Tensile",
    specifications: [
      { label: "Material", value: "MS / SS / HT" },
      { label: "Grade", value: "4.6, 8.8, 10.9" },
      { label: "Size Range", value: "M6 to M30" },
      { label: "Finish", value: "Zinc / HDG / Plain" },
      { label: "Standard", value: "IS/DIN/ISO" },
    ],
    description: "Complete range of hex bolts and nut sets for industrial assembly and maintenance.",
    image: "https://images.unsplash.com/photo-1585204630262-84278b4d8b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZXIlMjBjaGFpbiUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0OTM3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Multiple grades", "Wide size range", "Various finishes", "Standard compliant"],
  },
];

export const companyInfo = {
  name: "Bansal Chain Industries",
  phone: "+919417271707", 
  whatsapp: "919417271707",
  email: "bansalchain1972@yahoo.com",
  gst: "03ACYPK6084A1ZJ",
  address: "E-352, Focal Point Phase 6, Ludhiana, Punjab 141003",
  
  // Standard link for the "Open in Google Maps" button
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Bansal+Chain+Industries&query_place_id=ChIJq6qqqm2dGjkRGzhMtOLbIqg", 
  
  // FIXED EMBED URL: Uses Place ID to force the BCI marker to show
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.943187236521!2d75.91811837618587!3d30.88820867825701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9d6daaaaab0b%3A0xa822db04b44cb81b!2sBANSAL%20CHAIN%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1711885000000!5m2!1sen!2sin",
  
  tagline: "30+ Years of Manufacturing Excellence",
  description: "Leading manufacturer of high-quality industrial chains, sprockets, and precision engineering solutions for global markets.",
};