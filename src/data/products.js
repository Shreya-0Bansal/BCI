const legacyImages = {
  hero: "/machinery.jpg",
  conveyor: "/CONVEYOR_CHAIN1.jpg",
  roller: "/RollerChain.webp",
  sprocket: "/SPROCKET.png",
  machinery: "/lpg-bottling-plant.jpg",
  texture: "/SPROCKET2.avif",
  fastners: "/Fastners.jpg",
  conveyorAlt: "/Conveyor_Chain.png",
};

export const productFamilies = [
  // { slug: "roller-chains", name: "Roller Chains" },
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
    slug: "roller-chains",
    familySlug: "roller-chains",
    category: "Roller Chains",
    name: "Precision Roller Chains",
    summary:
      "High-duty transmission chains for industrial drives, agricultural equipment, and continuous mechanical power transfer.",
    detailTitle: "Roller chains with stable pitch control and dependable wear life.",
    description:
      "Designed for steady transmission efficiency, these roller chains are suitable for moderate to high-load applications where repeatable pitch accuracy and hardened wear surfaces are required.",
    specHighlights: ["ANSI / ISO reference range", "Alloy steel options"],
    materials: ["Carbon steel", "Alloy steel", "Nickel-plated finish on request"],
    customization: [
      "Duplex and triplex configurations",
      "Corrosion-resistant surface finishes",
      "Matched lengths for conveyor integration",
    ],
    sizeChart: [
      { reference: "08B-1", pitch: '12.70 mm', width: "7.75 mm", load: "17.8 kN", material: "Carbon steel" },
      { reference: "10B-1", pitch: '15.875 mm', width: "9.40 mm", load: "22.2 kN", material: "Alloy steel" },
      { reference: "12B-1", pitch: '19.05 mm', width: "11.68 mm", load: "29.0 kN", material: "Alloy steel" },
    ],
    galleryTitles: ["Pitch accuracy", "Hardened surfaces", "Transmission layout"],
    heroImage: legacyImages.roller,
    gallery: buildGallery([
      legacyImages.roller,
      legacyImages.hero,
      legacyImages.texture,
    ]),
  },
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
    sizeChart: [
      { reference: "C110", pitch: "100 mm", width: "38 mm", load: "65 kN", material: "MS / Alloy steel" },
      { reference: "C125", pitch: "125 mm", width: "42 mm", load: "78 kN", material: "Alloy steel" },
      { reference: "C160", pitch: "160 mm", width: "50 mm", load: "95 kN", material: "Alloy steel" },
    ],
    galleryTitles: ["Conveyor profile", "Attachment detail", "Bulk handling geometry"],
    heroImage: legacyImages.conveyor,
    gallery: buildGallery([
      legacyImages.conveyor,
      legacyImages.conveyorAlt,
      legacyImages.hero,
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
    sizeChart: [
      { reference: "I90", pitch: "28.58 mm", width: "17.02 mm", load: "34 kN", material: "Alloy steel" },
      { reference: "I120", pitch: "38.10 mm", width: "25.40 mm", load: "52 kN", material: "Alloy steel" },
      { reference: "I160", pitch: "50.80 mm", width: "31.75 mm", load: "82 kN", material: "Heat-treated steel" },
    ],
    galleryTitles: ["Machine integration", "Load-bearing links", "Industrial wear profile"],
    heroImage: legacyImages.hero,
    gallery: buildGallery([
      legacyImages.hero,
      legacyImages.roller,
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
    sizeChart: [
      { reference: "B82", pitch: "31.75 mm", width: "82.5 mm", load: "12 kN", material: "SS / engineered mix" },
      { reference: "B114", pitch: "38.10 mm", width: "114.3 mm", load: "15 kN", material: "SS304" },
      { reference: "B152", pitch: "50.80 mm", width: "152.4 mm", load: "19 kN", material: "SS304 / SS316" },
    ],
    galleryTitles: ["Packaging transfer", "Washdown-ready surfaces", "Bottling line layout"],
    heroImage: legacyImages.machinery,
    gallery: buildGallery([
      legacyImages.machinery,
      legacyImages.conveyorAlt,
      legacyImages.hero,
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
    specHighlights: ["CNC-machined tooth profiles", "Custom bore options"],
    materials: ["EN8", "EN19", "C45", "Stainless on request"],
    customization: [
      "Simplex, duplex, and triplex sprockets",
      "Keyway, taper lock, and finished bore options",
      "Induction hardening for tooth wear resistance",
    ],
    sizeChart: [
      { reference: "SP-16", pitch: "12.70 mm", width: "16 teeth", load: "Drive dependent", material: "EN8" },
      { reference: "SP-24", pitch: "19.05 mm", width: "24 teeth", load: "Drive dependent", material: "EN19" },
      { reference: "SP-36", pitch: "25.40 mm", width: "36 teeth", load: "Drive dependent", material: "C45" },
    ],
    galleryTitles: ["Tooth profile", "Machined bore detail", "Drive system layout"],
    heroImage: legacyImages.sprocket,
    gallery: buildGallery([
      legacyImages.sprocket,
      legacyImages.roller,
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
    sizeChart: [
      { reference: "M8", pitch: "1.25 mm", width: "13 mm AF", load: "Grade dependent", material: "MS / HT" },
      { reference: "M12", pitch: "1.75 mm", width: "19 mm AF", load: "Grade dependent", material: "HT steel" },
      { reference: "M16", pitch: "2.00 mm", width: "24 mm AF", load: "Grade dependent", material: "SS / HT" },
    ],
    galleryTitles: ["Fastener geometry", "Thread finish", "Assembly hardware set"],
    heroImage: legacyImages.fastners,
    gallery: buildGallery([
      legacyImages.fastners,
      legacyImages.texture,
      legacyImages.sprocket,
    ]),
  },
];

export const featuredProducts = products.slice(0, 4);

export const galleryVisuals = products.map((product) => ({
  title: product.name,
  image: product.heroImage,
}));
