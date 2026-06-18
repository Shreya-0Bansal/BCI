const legacyImages = {
  industrial: "/IndustrialChain.png",
  conveyor: "/CONVEYOR_CHAIN1.png",
  sprocket: "/SPROCKET2.avif",
  machinery: "/bottling-plant.png",
  fastners: "/Fastners.png",
  conveyorAlt: "/Conveyor_Chain.png",
};

export const productFamilies = [
  { slug: "conveyor-chains", name: "Conveyor Chains" },
  { slug: "industrial-chains", name: "Industrial Chains" },
  { slug: "bottling-plant-chains", name: "Bottling Plant Chains" },
  { slug: "gear-sprockets", name: "Gear / Sprockets" },
  { slug: "fastners", name: "Fastners" },
];

function buildGallery(images) {
  return images;
}

export const products = [
  {
  slug: "conveyor-chains",
  familySlug: "conveyor-chains",
  category: "Conveyor Chains",
  name: "Conveyor Chains",
  summary:
    "Attachment-ready conveyor chains for material handling lines, bucket systems, and abrasive-duty conveying setups.",
  detailTitle: "Conveyor chain systems designed for line stability and attachment flexibility.",
  description:
    "This range supports drag conveyors, handling lines, and process transport equipment requiring durable links, application-specific attachments, and stable movement under load.",
  specHighlights: ["Attachment-ready links", "Heavy-duty conveying"],
  materials: ["Mild steel", "Alloy steel", "Heat-treated wear components"],
  customization: [
    "Flight and attachment profiles",
    "Custom pitch and side-bar geometry",
    "Application-specific heat treatment",
  ],
  
  // Comprehensively mapped based on BS 4116 / ISO 1977 standard solid pin conveyor chains
  sizeChart: [
    { reference: "BS 4116 / 3000", pitch: "50 mm", width: "15.0 mm", rollerDia: "31.75 mm", load: "30 kN", material: "Alloy Steel / Case Hardened" },
    { reference: "BS 4116 / 6000", pitch: "75 mm", width: "19.0 mm", rollerDia: "47.63 mm", load: "60 kN", material: "Alloy Steel / Case Hardened" },
    { reference: "BS 4116 / 7500", pitch: "100 mm", width: "22.0 mm", rollerDia: "47.63 mm", load: "75 kN", material: "Alloy Steel / Case Hardened" },
    { reference: "BS 4116 / 12000", pitch: "100 mm", width: "25.4 mm", rollerDia: "66.68 mm", load: "120 kN", material: "Alloy Steel / Case Hardened" },
    { reference: "BS 4116 / 15000", pitch: "125 mm", width: "25.4 mm", rollerDia: "66.68 mm", load: "150 kN", material: "Alloy Steel / Case Hardened" },
    { reference: "BS 4116 / 24000", pitch: "150 mm", width: "38.1 mm", rollerDia: "88.90 mm", load: "240 kN", material: "Alloy Steel / Case Hardened" },
    { reference: "ISO M56", pitch: "100 mm", width: "24.0 mm", rollerDia: "50.00 mm", load: "56 kN", material: "Alloy Steel / Heat Treated" },
    { reference: "ISO M80", pitch: "125 mm", width: "28.0 mm", rollerDia: "60.00 mm", load: "80 kN", material: "Alloy Steel / Heat Treated" },
    { reference: "ISO M112", pitch: "160 mm", width: "32.0 mm", rollerDia: "70.00 mm", load: "112 kN", material: "Alloy Steel / Heat Treated" },
    { reference: "ISO M160", pitch: "200 mm", width: "37.0 mm", rollerDia: "85.00 mm", load: "160 kN", material: "Alloy Steel / Heat Treated" },
    { reference: "ISO M224", pitch: "250 mm", width: "43.0 mm", rollerDia: "100.00 mm", load: "224 kN", material: "Alloy Steel / Heat Treated" },
  ],

  // New data architecture block to render attachment specifications directly into details
  attachmentSpecifications: [
  {
    Type: "A1 / A2 Attachments",
    Description:
      "Bent attachment on one side only (Single hole / Double hole configurations) for slats or pusher plates.",
  },
  {
    Type: "K1 / K2 Attachments",
    Description:
      "Bent attachment on both sides of the chain, establishing a secure balanced surface for conveying flights.",
  },
  {
    Type: "M1 / M2 Attachments",
    Description:
      "Straight vertical side plate extensions on one side, typically used for side boards or tracking lines.",
  },
  {
    Type: "G2 / G4 Attachments",
    Description:
      "Deep link plates / large flange holes directly piercing the chain centerline for cross-rod integration.",
  },
  {
    Type: "Extended Pins",
    Description:
      "Extended link-pins projecting from the side plate profile to anchor custom fixture setups under load.",
  },
],

  galleryTitles: ["Conveyor profile", "Attachment detail", "Bulk handling geometry"],
  heroImage: legacyImages.conveyor,
  gallery: buildGallery([
    legacyImages.conveyor,
    legacyImages.conveyorAlt,
    legacyImages.industrial,
  ]),
},
 {
  slug: "industrial-chains",
  familySlug: "industrial-chains",
  category: "Industrial Chains",
  name: "Industrial Chains",
  summary:
    "General-purpose industrial chain assemblies for process machinery, plant equipment, and engineered duty cycles.",
  detailTitle: "Industrial chains tailored for demanding process environments.",
  description:
    "Used across mechanical handling and process lines, these chains are configured around load, lubrication approach, wear expectation, and installation constraints.",
  specHighlights: ["Process-line duty", "Custom engineering support"],
  materials: ["Alloy steel", "Heat-treated carbon steel", "Stainless variants on request"],
  customization: [
    "Special side bars and block links",
    "Bush and pin upgrades",
    "Low-speed or high-shock configurations",
  ],
  
  // Mapped directly to standard heavy-duty ANSI (ASA) and British Standard (BS/DIN) industrial chains
  sizeChart: [
    { reference: "ANSI 80 (Heavy Duty)", pitch: "25.40 mm", width: "15.88 mm", pinDia: "7.94 mm", load: "65.0 kN", material: "Through-Hardened Alloy" },
    { reference: "ANSI 100 (Heavy Duty)", pitch: "31.75 mm", width: "19.05 mm", pinDia: "9.53 mm", load: "101.0 kN", material: "Through-Hardened Alloy" },
    { reference: "ANSI 120 (Heavy Duty)", pitch: "38.10 mm", width: "25.40 mm", pinDia: "11.11 mm", load: "142.0 kN", material: "Through-Hardened Alloy" },
    { reference: "ANSI 140 (Heavy Duty)", pitch: "44.45 mm", width: "25.40 mm", pinDia: "12.70 mm", load: "192.0 kN", material: "Case-Hardened Alloy" },
    { reference: "ANSI 160 (Heavy Duty)", pitch: "50.80 mm", width: "31.75 mm", pinDia: "14.29 mm", load: "249.0 kN", material: "Case-Hardened Alloy" },
    { reference: "ANSI 200 (Heavy Duty)", pitch: "63.50 mm", width: "38.10 mm", pinDia: "19.85 mm", load: "390.0 kN", material: "Premium Chromized Steel" },
    { reference: "BS 16B (High Tensile)", pitch: "25.40 mm", width: "17.02 mm", pinDia: "8.28 mm", load: "72.0 kN", material: "Through-Hardened Alloy" },
    { reference: "BS 20B (High Tensile)", pitch: "31.75 mm", width: "19.56 mm", pinDia: "10.19 mm", load: "106.0 kN", material: "Through-Hardened Alloy" },
    { reference: "BS 24B (High Tensile)", pitch: "38.10 mm", width: "25.40 mm", pinDia: "14.63 mm", load: "178.0 kN", material: "Through-Hardened Alloy" },
    { reference: "BS 28B (High Tensile)", pitch: "44.45 mm", width: "30.99 mm", pinDia: "15.90 mm", load: "222.0 kN", material: "Case-Hardened Alloy" },
    { reference: "BS 32B (High Tensile)", pitch: "50.80 mm", width: "30.99 mm", pinDia: "17.81 mm", load: "280.0 kN", material: "Case-Hardened Alloy" },
  ],

  // Secondary engineering specifications block for environmental and performance matching
  operatingConditions: [
    { environment: "High-Shock / Impact Loading", recommendation: "Thicker heavy-duty link plates ('H' series geometry) to resist cyclical fatiguing.", lubrication: "High-viscosity extreme pressure grease" },
    { environment: "Abrasive / Dusty Plants", recommendation: "Chromized pins and case-hardened bushes to prevent particulate tracking score marks.", lubrication: "Dry-film or tacky synthetic lube" },
    { environment: "High-Temperature Processing", recommendation: "Special structural tempering cycles maintaining hardness metrics up to 250°C.", lubrication: "High-temp graphite dispersion oil" },
    { environment: "Corrosive / Washdown Lines", recommendation: "Nickel-plated premium finishes or customized stainless grades for moderate oxidation defense.", lubrication: "Food-grade synthetic or unlubricated" },
  ],

  galleryTitles: ["Machine integration", "Load-bearing links", "Industrial wear profile"],
  heroImage: legacyImages.industrial,
  gallery: buildGallery([
    legacyImages.industrial,
    legacyImages.machinery,
  ]),
},
 {
  slug: "bottling-plant-chains",
  familySlug: "bottling-plant-chains",
  category: "Bottling Plant Chains",
  name: "Bottling Plant Chains",
  summary:
    "Smooth-running chains for bottling, packaging, and beverage handling systems where cleanliness and reliable movement matter.",
  detailTitle: "Bottling plant chains for synchronized packaging and controlled movement.",
  description:
    "These chain systems are suitable for bottling and packaging lines that require low-vibration transfer, stable guidance, and maintenance-friendly replacement cycles.",
  specHighlights: ["Packaging line ready", "Smooth transfer geometry"],
  materials: ["Stainless steel", "Low-friction engineered components", "Special coatings on request"],
  customization: [
    "Side-flexing and straight-running options",
    "Material upgrades for washdown lines",
    "Matched sets for packaging layouts",
  ],
  
  // Standardized based on global slat top / flat top industrial standards (812, 820, and 881 side-flexing series)
  sizeChart: [
    { reference: "SS 815-K325 (Straight)", pitch: "38.10 mm", plateWidth: "82.5 mm", plateThick: "3.1 mm", workingLoad: "4.5 kN", material: "Austenitic SS 304" },
    { reference: "SS 815-K450 (Straight)", pitch: "38.10 mm", plateWidth: "114.3 mm", plateThick: "3.1 mm", workingLoad: "4.5 kN", material: "Austenitic SS 304" },
    { reference: "SS 815-K600 (Straight)", pitch: "38.10 mm", plateWidth: "152.4 mm", plateThick: "3.1 mm", workingLoad: "4.5 kN", material: "Ferritic Stainless Steel" },
    { reference: "SS 815-K750 (Straight)", pitch: "38.10 mm", plateWidth: "190.5 mm", plateThick: "3.1 mm", workingLoad: "4.5 kN", material: "Ferritic Stainless Steel" },
    { reference: "SS 821-K750 (Heavy Duty)", pitch: "38.10 mm", plateWidth: "190.5 mm", plateThick: "4.8 mm", workingLoad: "10.8 kN", material: "Martensitic Hardened SS" },
    { reference: "SS 821-K1000 (Heavy Duty)", pitch: "38.10 mm", plateWidth: "254.0 mm", plateThick: "4.8 mm", workingLoad: "10.8 kN", material: "Martensitic Hardened SS" },
    { reference: "SS 881M-K325 (Side Flex)", pitch: "38.10 mm", plateWidth: "82.5 mm", plateThick: "3.1 mm", workingLoad: "5.5 kN", material: "Premium Magnetizable SS" },
    { reference: "SS 881M-K450 (Side Flex)", pitch: "38.10 mm", plateWidth: "114.3 mm", plateThick: "3.1 mm", workingLoad: "5.5 kN", material: "Premium Magnetizable SS" },
    { reference: "LF 820-K325 (Polymer)", pitch: "38.10 mm", plateWidth: "82.5 mm", plateThick: "4.0 mm", workingLoad: "2.1 kN", material: "Low-Friction Acetal POM" },
    { reference: "LF 820-K450 (Polymer)", pitch: "38.10 mm", plateWidth: "114.3 mm", plateThick: "4.0 mm", workingLoad: "2.1 kN", material: "Low-Friction Acetal POM" },
  ],

  // Secondary architectural block focusing on line compliance and lubrication strategy
  hygieneAndCompliance: [
    { zone: "Filling & Capping (Wet Area)", challenge: "Acidic beverage spillage, continuous water exposure, and high oxidation rates.", solution: "SS316 marine-grade links or specially treated passivated surfaces." },
    { zone: "High-Speed Accumulation Tables", challenge: "High pressure friction buildup and backline bottle scuffing.", solution: "Low-Friction (LF) Acetal polymer with specialized structural self-lubricating additives." },
    { zone: "Incline / Decline Box Handling", challenge: "Product slippage or shifting orientations on high-pitch transport structures.", solution: "Rubber-top or molded high-grip thermoplastic elastomer pads vulcanized onto base links." },
    { zone: "Chemical Washdown Tunnels", challenge: "Aggressive caustic cleaning agents and hot steam cycles breaking down chains.", solution: "Hardened chemical-resistant engineering resins and custom passivated pin systems." },
  ],

  galleryTitles: ["Packaging transfer", "Washdown-ready surfaces", "Bottling line layout"],
  heroImage: legacyImages.machinery,
  gallery: buildGallery([
    legacyImages.machinery,
    legacyImages.conveyorAlt,
    legacyImages.industrial,
  ]),
},
  {
  slug: "gear-sprockets",
  familySlug: "gear-sprockets",
  category: "Gear / Sprockets",
  name: "Gear / Sprockets",
  summary:
    "Precision sprockets and gear components for chain drives, conveyors, and custom industrial machinery integrations.",
  detailTitle: "Sprockets and gear components machined for dependable chain engagement.",
  description:
    "Manufactured with controlled tooth profiles and bore flexibility, this product family serves replacement requirements as well as new chain-drive assemblies.",
  specHighlights: ["Precision-machined tooth profiles", "Custom bore options"],
  materials: ["EN8", "EN19", "C45", "Stainless on request"],
  customization: [
    "Simplex, duplex, and triplex sprockets",
    "Keyway, taper lock, and finished bore options",
    "Induction hardening for tooth wear resistance",
  ],
  
  // Standardized based on BS 228 / DIN 8187 and ANSI B29.1 industrial transmission standards
  sizeChart: [
    { reference: "08B Simplex / Duplex", chainMatch: "BS 1/2\" pitch", standardTeeth: "13T, 15T, 17T, 19T, 21T, 25T, 38T, 57T", minBore: "10 mm", maxBore: "42 mm", toothMaterial: "C45 Induction Hardened" },
    { reference: "10B Simplex / Duplex", chainMatch: "BS 5/8\" pitch", standardTeeth: "13T, 15T, 17T, 19T, 21T, 25T, 38T, 57T", minBore: "12 mm", maxBore: "50 mm", toothMaterial: "C45 Induction Hardened" },
    { reference: "12B Simplex / Duplex", chainMatch: "BS 3/4\" pitch", standardTeeth: "13T, 15T, 17T, 19T, 21T, 25T, 38T, 57T", minBore: "14 mm", maxBore: "60 mm", toothMaterial: "C45 / EN8 Medium Carbon" },
    { reference: "16B Simplex / Duplex", chainMatch: "BS 1\" pitch", standardTeeth: "11T, 13T, 15T, 17T, 19T, 21T, 23T, 25T, 38T", minBore: "20 mm", maxBore: "80 mm", toothMaterial: "EN8 / EN19 Tough Alloy" },
    { reference: "20B Simplex / Duplex", chainMatch: "BS 1-1/4\" pitch", standardTeeth: "11T, 13T, 15T, 17T, 19T, 21T, 25T, 38T", minBore: "25 mm", maxBore: "90 mm", toothMaterial: "EN19 Chrome Moly" },
    { reference: "ANSI 40 Simplex", chainMatch: "ASA 1/2\" pitch", standardTeeth: "12T, 14T, 15T, 16T, 17T, 18T, 20T, 24T, 40T", minBore: "9.5 mm", maxBore: "38 mm", toothMaterial: "C45 Induction Hardened" },
    { reference: "ANSI 60 Simplex", chainMatch: "ASA 3/4\" pitch", standardTeeth: "11T, 12T, 13T, 15T, 17T, 19T, 21T, 23T, 35T", minBore: "14 mm", maxBore: "55 mm", toothMaterial: "C45 Induction Hardened" },
    { reference: "ANSI 80 Simplex / Duplex", chainMatch: "ASA 1\" pitch", standardTeeth: "11T, 12T, 13T, 15T, 17T, 19T, 21T, 25T, 35T", minBore: "19 mm", maxBore: "75 mm", toothMaterial: "EN8 / EN19 Tough Alloy" },
    { reference: "ANSI 100 Simplex", chainMatch: "ASA 1-1/4\" pitch", standardTeeth: "11T, 12T, 13T, 15T, 17T, 19T, 21T, 25T, 35T", minBore: "20 mm", maxBore: "85 mm", toothMaterial: "EN19 Chrome Moly" },
  ],

  // Secondary structural configurations architecture block for engineering layout selection
  machiningBoreSpecs: [
    { configType: "Pilot Bore (Stock)", details: "Supplied with basic minimum stock bore sizes to allow industrial customers to custom-turn or wire-cut internal configurations locally.", engineeringBenefit: "Maximum field adaptability" },
    { configType: "Finished Bore & Keyway", details: "Precision internal boring mapped to exact h7 tolerances, complete with IS 2048 / DIN 6885 parallel keyways and dual grub locking points.", engineeringBenefit: "Direct out-of-the-box drive integration" },
    { configType: "Taper Lock Bushing (TLB)", details: "Machined to receive standard 1008 through 5050 series split-taper locking bushes for easy maintenance assembly and high torque gripping parameters.", engineeringBenefit: "Rapid shaft mounting and dismounting" },
    { configType: "Platewheel Variant", details: "Hubless, completely flat profile sprockets designed to match directly to custom customer-engineered carrier flanges or rotating drum assemblies.", engineeringBenefit: "Weight reduction and axial space efficiency" },
  ],

  galleryTitles: ["Tooth profile", "Machined bore detail", "Drive system layout"],
  heroImage: legacyImages.sprocket,
  gallery: buildGallery([
    legacyImages.sprocket,
    legacyImages.texture,
  ]),
},
  {
  slug: "fastners",
  familySlug: "fastners",
  category: "Fastners",
  name: "Industrial Fastners",
  summary:
    "Industrial fastners for structural assemblies, machinery fastening, and maintenance stock requirements.",
  detailTitle: "Fastners engineered for repeatable fastening performance.",
  description:
    "Available in common industrial grades and finish options, these fastners support machine structures, chain attachments, and general engineering assemblies.",
  specHighlights: ["Metric size coverage", "Plated and plain finishes"],
  materials: ["Mild steel", "High tensile steel", "Stainless steel"],
  customization: [
    "Length variations against application drawings",
    "Grade selection from commercial to high-tensile",
    "Thread and finish options",
  ],
  
  // Standardized based on DIN 931/933, ISO 4014/4017, and ANSI B18.2.1 dimensional metrics
  sizeChart: [
    { reference: "M6 Hex Bolt", threadPitch: "1.00 mm", wrenchSize: "10 mm AF", headHeight: "4.0 mm", standardLengths: "12 mm – 60 mm", materialOptions: "MS Grade 4.6 / SS304" },
    { reference: "M8 Hex Bolt", threadPitch: "1.25 mm", wrenchSize: "13 mm AF", headHeight: "5.3 mm", standardLengths: "16 mm – 80 mm", materialOptions: "MS 4.6 / HT 8.8 / SS304" },
    { reference: "M10 Hex Bolt", threadPitch: "1.50 mm", wrenchSize: "17 mm AF", headHeight: "6.4 mm", standardLengths: "20 mm – 100 mm", materialOptions: "HT 8.8 / HT 10.9 / SS316" },
    { reference: "M12 Hex Bolt", threadPitch: "1.75 mm", wrenchSize: "19 mm AF", headHeight: "7.5 mm", standardLengths: "25 mm – 120 mm", materialOptions: "HT 8.8 / HT 10.9 / SS316" },
    { reference: "M16 Hex Bolt", threadPitch: "2.00 mm", wrenchSize: "24 mm AF", headHeight: "10.0 mm", standardLengths: "30 mm – 150 mm", materialOptions: "HT 8.8 / HT 10.9 / HT 12.9" },
    { reference: "M20 Hex Bolt", threadPitch: "2.50 mm", wrenchSize: "30 mm AF", headHeight: "12.5 mm", standardLengths: "40 mm – 200 mm", materialOptions: "HT 8.8 / HT 10.9 / HT 12.9" },
    { reference: "M24 Hex Bolt", threadPitch: "3.00 mm", wrenchSize: "36 mm AF", headHeight: "15.0 mm", standardLengths: "50 mm – 240 mm", materialOptions: "HT 8.8 / HT 10.9 / HT 12.9" },
    { reference: "M30 Hex Bolt", threadPitch: "3.50 mm", wrenchSize: "46 mm AF", headHeight: "18.7 mm", standardLengths: "70 mm – 300 mm", materialOptions: "HT 8.8 / HT 10.9 / Structural" },
    { reference: "M36 Hex Bolt", threadPitch: "4.00 mm", wrenchSize: "55 mm AF", headHeight: "22.5 mm", standardLengths: "80 mm – 360 mm", materialOptions: "HT 8.8 / HT 10.9 / Structural" },
  ],

  // Secondary architectural block focusing on structural strength classification and surface treatment
  mechanicalPropertyGrades: [
    { gradeClass: "Property Class 4.6 (Commercial)", proofLoad: "225 MPa", tensileStrength: "400 MPa", recommendedSurface: "Clear Zinc Plated / Galvanized", bestFor: "Light guards, brackets, and non-load-bearing enclosures" },
    { gradeClass: "Property Class 8.8 (High Tensile)", proofLoad: "580 MPa", tensileStrength: "800 MPa", recommendedSurface: "Black Oxide / Phosphated", bestFor: "Standard plant machinery, motor mounts, and structural frames" },
    { gradeClass: "Property Class 10.9 (High Tensile)", proofLoad: "830 MPa", tensileStrength: "1040 MPa", recommendedSurface: "Black Oxide / Zinc Flake", bestFor: "High-stress gear assemblies, sprockets, and cyclical automotive rigs" },
    { gradeClass: "Property Class 12.9 (Premium Alloy)", proofLoad: "970 MPa", tensileStrength: "1220 MPa", recommendedSurface: "Plain / Light Oil Coating", bestFor: "Heavy hydraulic presses, foundry molds, and high-vibration clamp loads" },
    { gradeClass: "Stainless Steel A2-70 / A4-80", proofLoad: "450 MPa", tensileStrength: "700 / 800 MPa", recommendedSurface: "Passivated / Self-Color Clean", bestFor: "Food processing, bottling lines, washdown tunnels, and chemical plants" },
  ],

  galleryTitles: ["Fastener geometry", "Thread finish", "Assembly hardware set"],
  heroImage: legacyImages.fastners,
  gallery: buildGallery([
    legacyImages.fastners,
    legacyImages.texture,
    legacyImages.sprocket,
  ]),
}
];

export const featuredProducts = products.slice(0, 4);