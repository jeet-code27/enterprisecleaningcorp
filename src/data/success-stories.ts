export interface SuccessStory {
  id: string;
  slug: string;
  companyName: string;
  industry: string;
  logo: string;
  headline: string;
  subheading: string;
  testimonialText: string[];
  rawContent: {
    overview: string;
    challengeAndSolution: string;
    routineAndSpecial: string;
    result: string;
  };
  resultSummary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  keyHighlights: string[];
  signOff: {
    name: string;
    title: string;
    company: string;
    date: string;
    location: string;
    signatureBadgeText?: string;
  };
  contactPerson: {
    name: string;
    title: string;
    company: string;
    phone: string;
  };
  isFeatured?: boolean;
}

export const successStories: SuccessStory[] = [
  {
    id: "wcu-bank",
    slug: "wcu-bank",
    companyName: "WCU Bank",
    industry: "Banking & Financial Services",
    logo: "/logos/wcu-logo.svg",
    headline: "Keeping Banking Environments Clean, Disinfected, and Ready for Customers",
    subheading: "Maintaining a pristine, professional, and welcoming atmosphere across 7+ bank branches.",
    testimonialText: [
      "At WCU Bank, keeping our branches clean, disinfected, and welcoming is essential to providing an exceptional customer experience. Enterprise Cleaning Corp. has proven to be an invaluable partner in maintaining high standards of cleanliness across more than seven of our financial locations.",
      "Every day, our employees and valued customers interact in high-touch areas, private offices, waiting lounges, and common teller spaces. Enterprise’s dedicated cleaning crew works consistently to sanitize and disinfect these facilities, creating a safe, healthy, and pristine environment for everyone who walks through our doors.",
      "What truly sets our partnership apart is Enterprise's responsiveness and versatility. Beyond our scheduled daily janitorial services, whenever we require emergency cleaning support or specialized project cleaning, Enterprise is always ready to respond swiftly and keep our branch operations running seamlessly."
    ],
    rawContent: {
      overview: "WCU Bank trusts Enterprise Cleaning Corp. to help maintain a clean, professional, and welcoming environment across more than seven locations.",
      challengeAndSolution: "In the banking industry, cleanliness is an important part of the customer experience. Every day, employees and customers interact in high-touch areas, offices, waiting areas, and common spaces. Enterprise’s team works consistently to keep these facilities clean and disinfected, helping create a comfortable environment for the bank’s valued customers and employees.",
      routineAndSpecial: "Our partnership goes beyond routine cleaning. When WCU Bank needs additional support for special cleaning projects or unexpected cleaning needs, Enterprise is there to respond and help keep their operations running smoothly.",
      result: "A dependable cleaning partnership across multiple locations, with the flexibility to provide both consistent janitorial services and additional project support whenever needed."
    },
    resultSummary: "A dependable cleaning partnership across multiple locations, with the flexibility to provide both consistent janitorial services and additional project support whenever needed.",
    metrics: [
      { label: "Branch Locations Managed", value: "7+" },
      { label: "Daily Disinfection Coverage", value: "100%" },
      { label: "Special Project Support", value: "24/7" },
      { label: "Client Partnership Status", value: "Long-Term" }
    ],
    keyHighlights: [
      "Consistent multi-location janitorial & floor maintenance",
      "Rigorous high-touch area disinfection protocols",
      "Flexible, rapid-response team for unexpected cleaning needs",
      "Seamless support for special commercial cleaning projects"
    ],
    signOff: {
      name: "VP of Facilities & Operations",
      title: "Director of Branch Facilities",
      company: "WCU Bank",
      date: "July 2026",
      location: "New England Branches",
      signatureBadgeText: "Verified Client Testimonial"
    },
    contactPerson: {
      name: "Alex Puchulu",
      title: "Director of Sales & Marketing",
      company: "Enterprise Cleaning Corporation",
      phone: "508-304-2369"
    },
    isFeatured: true
  },
  {
    id: "apderm",
    slug: "apderm",
    companyName: "APDerm",
    industry: "Healthcare & Dermatology",
    logo: "/logos/apderm-logo.svg",
    headline: "Specialized Cleaning for a Growing Multi-Location Medical Network",
    subheading: "Maintaining consistent cleaning, operating room sanitation, and facility support across 30+ medical locations in MA, RI, and NH.",
    testimonialText: [
      "Operating more than 30 dermatology locations across Massachusetts, Rhode Island, and New Hampshire requires exceptional reliability, meticulous attention to detail, and absolute consistency in disinfection standards. Enterprise Cleaning Corp. has been a key partner in maintaining immaculate medical environments ready for our patients and staff every single day.",
      "Beyond general medical facility cleaning, Enterprise provides specialized cleaning procedures for our operating room environments, where strict compliance and micro-detail are paramount. Their team understands the unique standards required for healthcare settings and delivers dependable quality across our entire network.",
      "What makes our partnership uniquely valuable is Enterprise's total flexibility. When our facility needs extend beyond traditional janitorial services—from assembling furniture and hanging office equipment to hauling heavy materials—Enterprise steps up without hesitation to keep our healthcare operations running smoothly."
    ],
    rawContent: {
      overview: "APDerm operates more than 30 dermatology locations across Massachusetts, Rhode Island, and New Hampshire.",
      challengeAndSolution: "Maintaining consistent cleaning and disinfection standards across a large medical network requires reliability, attention to detail, and the ability to adapt to specialized environments. Enterprise Cleaning Corp. works with APDerm to help keep their facilities clean, disinfected, and ready for patients and staff.",
      routineAndSpecial: "Our team also provides specialized cleaning services for operating room environments, where attention to cleaning procedures and detail is especially important. One of the strengths of our partnership is flexibility. APDerm’s needs can extend beyond traditional janitorial services, and Enterprise is able to accommodate additional facility requests, including certain handyman and support tasks. From hanging items to helping discard heavy materials or assembling furniture, our team can step in when additional support is needed.",
      result: "A long-term partnership that combines reliable medical facility cleaning with the flexibility to support the changing needs of a growing healthcare organization."
    },
    resultSummary: "A long-term partnership that combines reliable medical facility cleaning with the flexibility to support the changing needs of a growing healthcare organization.",
    metrics: [
      { label: "Medical Locations", value: "30+" },
      { label: "States Covered", value: "MA, RI, NH" },
      { label: "Specialty Sanitation", value: "Operating Rooms" },
      { label: "Facility Support", value: "Handyman & More" }
    ],
    keyHighlights: [
      "Consistent medical disinfection across 30+ dermatology locations",
      "Specialized operating room cleaning procedures and compliance",
      "Multi-state healthcare network coverage (MA, RI, NH)",
      "Versatile facility support (furniture assembly, heavy disposal, handyman tasks)"
    ],
    signOff: {
      name: "Network Facilities Operations Director",
      title: "Director of Clinical Operations & Facilities",
      company: "APDerm",
      date: "July 2026",
      location: "MA, RI & NH Clinics",
      signatureBadgeText: "Verified Healthcare Partner"
    },
    contactPerson: {
      name: "Alex Puchulu",
      title: "Director of Sales & Marketing",
      company: "Enterprise Cleaning Corporation",
      phone: "508-304-2369"
    }
  }
];

export function getSuccessStoryBySlug(slug: string): SuccessStory | undefined {
  return successStories.find((story) => story.slug === slug);
}

export function getAllSuccessStories(): SuccessStory[] {
  return successStories;
}
