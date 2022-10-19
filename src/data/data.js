const partners = [
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png",
  },
];

const videos = [
  {
    link: "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/tb_tracer.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/tb_billow.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/tb_vertex.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/tb_circuit.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/tb_vault2.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/tb_notice.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/flux_tn.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/unity_tn.png",
  },
  {
    link: "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4",
    poster: "https://storage.googleapis.com/lumen5-site-images/looper_tn.png",
  },
];

const yearly = [
  {
    title: "Community",
    bio: "For casual video enthusiasts and fun",
    price: 0,
    validity: "forever free",
    included: "What's included:",
    whatsIncluded: [
      "Unlimited videos",
      "Contains Lumen5 watermark",
      "720p video resolution",
    ],
    type:"year"
  },
  {
    title: "Basic",
    bio: "For creating simple unbranded videos",
    price: 19,
    validity: "per month, billed yearly",
    included: "Everything in Free, plus:",
    whatsIncluded: [
      "No Lumen5 branding",
      "Access to icons",
    ],
    type:"year"
  },
  {
    title: "Starter",
    bio: "For the individual content creator",
    price: 59,
    validity: "per month, billed yearly",
    included: "Everything in Basic, plus:",
    whatsIncluded: [
      "50M stock photos & videos",
      "Custom colors & styles",
      "1080p video resolution",
    ],
    type:"year"
  },
  {
    title: "Professional",
    bio: "For the professional video storyteller",
    price: 149,
    validity: "per month, billed yearly",
    included: "Everything in Starter, plus:",
    whatsIncluded: [
      "500M stock photos & videos",
      "Custom watermarks",
      "Upload your own fonts",
      "Multiple saved templates",
      "Multiple brand kits",
    ],
    type:"year"
  },
  {
    title: "Enterprise",
    bio: "For marketing & communication teams",
    price: "Custom",
    validity: "",
    included: "",
    whatsIncluded: [
      "Lumen5 design team",
      "Bespoke branded templates",
      "Dedicated customer success",
      "Teams & collaboration",
      "Enterprise-level security",
    ],
    type:"year"
  }
];

const monthly = [
  {
    title: "Community",
    bio: "For casual video enthusiasts and fun",
    price: 0,
    validity: "forever free",
    included: "What's included:",
    whatsIncluded: [
      "Unlimited videos",
      "Contains Lumen5 watermark",
      "720p video resolution",
    ],
    type:"month"
  },
  {
    title: "Basic",
    bio: "For creating simple unbranded videos",
    price: 29,
    validity: "per month",
    included: "Everything in Free, plus:",
    whatsIncluded: [
      "No Lumen5 branding",
      "Access to icons",
    ],
    type:"month"
  },
  {
    title: "Starter",
    bio: "For the individual content creator",
    price: 79,
    validity: "per month",
    included: "Everything in Basic, plus:",
    whatsIncluded: [
      "50M stock photos & videos",
      "Custom colors & styles",
      "1080p video resolution",
    ],
    type:"month"
  },
  {
    title: "Professional",
    bio: "For the professional video storyteller",
    price: 199,
    validity: "per month",
    included: "Everything in Starter, plus:",
    whatsIncluded: [
      "500M stock photos & videos",
      "Custom watermarks",
      "Upload your own fonts",
      "Multiple saved templates",
      "Multiple brand kits",
    ],
    type:"month"
  },
  {
    title: "Enterprise",
    bio: "For marketing & communication teams",
    price: "Custom",
    validity: "",
    included: "",
    whatsIncluded: [
      "Lumen5 design team",
      "Bespoke branded templates",
      "Dedicated customer success",
      "Teams & collaboration",
      "Enterprise-level security",
    ],
    type:"month"
  }
];


export { partners, videos, yearly, monthly };
