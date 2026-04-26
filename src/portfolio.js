/* Fixed Portfolio Configuration for HARSHA R SHARMA */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Harsha R Sharma | GRC & Cyber Security Analyst",
  description:
    "GRC and Technology analyst with 1.5 years at Deloitte USI (Big 4) in ISO 27001/SOC 2 compliance, risk assessments, and process automation. MSc Cyber Security with Advanced Research — Commendation (University of Hertfordshire, 2026). Research focus on EU AI Act and NIST AI RMF.",
  og: {
    title: "Harsha R Sharma | GRC & Cyber Security Analyst",
    type: "website",
    url: "https://github.com/hs23aeo",
  },
};

// Home Page
const greeting = {
  title: "Harsha R Sharma",
  logo_name: "HarshaRSharma",
  nickname: "The Solver",
  subTitle:
    "GRC and Technology analyst with 1.5 years at Deloitte USI (Big 4) in ISO 27001/SOC 2 compliance, risk assessments, and process automation. Hands-on experience with Azure Logic Apps, Microsoft Power Platform, ServiceNow, and Python. MSc Cyber Security with Advanced Research — Commendation (University of Hertfordshire, 2026). Research focus on EU AI Act and NIST AI RMF. Open to contract roles in GRC, technology consulting, and Microsoft technology stack.",
  resumeLink:
    "https://docs.google.com/document/d/1kPn8mi4B39n58hPyHwWy8wf0LiAk1NyU/edit?usp=drive_link&ouid=101629678604820420535&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/hs23aeo",
  githubProfile: "https://github.com/hs23aeo",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/hs23aeo",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harsha-sharma-71345b222/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:harshars112@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "GRC & Compliance",
      fileName: "DataScienceImg",
      skills: [
        "⚡ ISO 27001 and SOC 2 compliance — risk assessments, control frameworks, and audit support.",
        "⚡ Third-party risk management and vendor due diligence.",
        "⚡ Translating compliance requirements into technical specifications for engineering teams.",
        "⚡ AI governance research — EU AI Act, NIST AI RMF, and ISO 42001 frameworks.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "ServiceNow",
          fontAwesomeClassname: "simple-icons:servicenow",
          style: { color: "#62D84E" },
        },
      ],
    },
    {
      title: "Security Automation & Microsoft Technology",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Process automation using Azure Logic Apps and Microsoft Power Platform.",
        "⚡ AI-powered threat detection using NLP (BERT, RoBERTa) and graph-based ML.",
        "⚡ DLP architecture design across M365 environments.",
        "⚡ Vulnerability scanning and penetration testing — CTF and HackTheBox.",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackTheBox",
      iconifyClassname: "simple-icons:hackthebox",
      style: { color: "#9FEF00" },
      profileLink: "https://hackthebox.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Hertfordshire, London",
      subtitle: "MSc in Cyber Security with Advanced Research",
      logo_path: "herts_logo.webp",
      alt_name: "University of Hertfordshire",
      duration: "Jan 2024 - Feb 2026 ",
      descriptions: [
        "⚡ Focus on Digital Forensics, Penetration Testing, and Cyber Operations.",
        "⚡ Dissertation: AI-Powered Threat Detection using NLP and graph-based ML models.",
      ],
      website_link: "https://www.herts.ac.uk/",
    },
    {
      title: "SNDT Mumbai University, India",
      subtitle: "Bachelor's in Computer Application",
      logo_path: "sndt_logo.png",
      alt_name: "SNDT University",
      duration: "June 2019 - June 2022",
      descriptions: [
        "⚡ Core Modules: C, C++, and JAVA.",
        "⚡ Digitized 800+ historical books to launch a virtual library.",
      ],
      website_link: "https://sndt.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "OCI 2025 Generative AI Professional",
      subtitle: "- Oracle Cloud Infrastructure",
      logo_path: "oracle_logo.png",
      certificate_link: "#",
      alt_name: "Oracle",
      color_code: "#C74634",
    },
    {
      title: "CompTIA Security+",
      subtitle: "- In Progress",
      logo_path: "comptia_logo.png",
      certificate_link: "#",
      alt_name: "CompTIA",
      color_code: "#FFB500",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "1.5 years at Deloitte USI (Big 4) in GRC, ISO 27001/SOC 2 compliance, risk assessments, and process automation. UK-based experience in system training and agile delivery.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "System Trainer",
          company: "Pret A Manger",
          company_url: "https://www.pret.co.uk/",
          logo_path: "pret.jpg",
          duration: "March 2024 – December 2025",
          location: "Stevenage, UK",
          description:
            "Delivered onboarding and system training to new staff on internal platforms. Developed training materials and guides to support adoption. Supported continuous improvement of training delivery.",
          color: "#8B0000",
        },
        {
          title: "Associate Analyst",
          company: "Deloitte USI",
          company_url: "https://www2.deloitte.com/",
          logo_path: "deloitte_logo.png",
          duration: "Aug 2022 – Jan 2024",
          location: "Hyderabad, India",
          description:
            "Primary GRC liaison for technology change reviews. Ran Security Impact Assessments to identify risks before deployment. Maintained ISO 27001 and SOC 2 compliance. Built automated workflows in Azure Logic Apps saving 10+ manual hours per week. Produced MI reports for senior stakeholders.",
          color: "#86BC25",
        },
      ],
    },
    {
      title: "Internships and Volunteerships",
      work: false,
      experiences: [
        {
          title: "Technical Trainee",
          company: "Global Education Pvt Ltd",
          company_url: "",
          logo_path: "global_edu_logo.png",
          duration: "June 2021 – July 2022",
          location: "Nagpur, India",
          description:
            "Managed security of 2,000+ sensitive student records. Performed vulnerability testing using Java and Python, identifying and remediating critical access point flaws.",
          color: "#000000",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "Three projects — an AI threat detection pipeline built for my MSc dissertation, a DLP architecture design, and a collaborative vulnerability scanner with a live demo.",
  avatar_image_path: "projects_image_female.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research and technical articles.",
  avatar_image_path: "projects_image_female.svg",
};

const publications = {
  data: [],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "PROFILKE_.jpg",
    description:
      "Available for contract and permanent GRC, IT Risk, and Cyber Security roles in London. Open to Microsoft technology stack and consulting opportunities.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Technical writing on GRC, AI governance, and cyber security. Coming soon.",
    link: "",
    avatar_image_path: "blogs_image_female.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "London, UK",
    locality: "London",
    country: "UK",
    region: "London",
    postalCode: "",
    streetAddress: "London",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Contact",
    subtitle: "harshars112@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
