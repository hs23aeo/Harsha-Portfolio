/* Fixed Portfolio Configuration for HARSHA R SHARMA */

// Website related settings
const settings = {
  isSplash: false, 
};

// SEO Related settings
const seo = {
  title: "Harsha R Sharma's Portfolio",
  description:
    "Cyber Security Specialist and IAM Consultant. Expert in securing digital identities, automating security workflows, and AI-driven threat classification.",
  og: {
    title: "Harsha R Sharma's Portfolio",
    type: "website",
    url: "https://github.com/harshars112",
  },
};

// Home Page
const greeting = {
  title: "Harsha R Sharma",
  logo_name: "HarshaRSharma",
  nickname: "The Solver",
  subTitle:
    "Cyber Security Specialist & IAM Consultant with 'Big 4' experience at Deloitte. I specialize in Identity & Access Management , securing SDLC processes , and leveraging AI for threat detection. Currently finalizing an MSc in Cyber Security with Advanced Research.",
  resumeLink: "https://docs.google.com/document/d/1kPn8mi4B39n58hPyHwWy8wf0LiAk1NyU/edit?usp=drive_link&ouid=101629678604820420535&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/harshars112",
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
    link: "https://www.linkedin.com/in/harsha-r-sharma/",
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
      title: "Identity & Access Management (IAM)",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expert in PAM solutions, IAM policies, and Managed Password Objects.",
        "⚡ Managing secure workflows for technical change reviews and access governance.",
        "⚡ Ensuring compliance with SOC 2, ISO 27001, GDPR, and NIST Frameworks.",
        "⚡ Deep experience in ServiceNow Queue Management and Incident Resolution.",
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
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker-icon",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "Security Automation & AI",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing AI-powered threat detection using NLP (BERT, RoBERTa) to classify malicious activities.",
        "⚡ Automating security tasks and compliance reporting using Azure Logic Apps and Python.",
        "⚡ Conducting research into secure-by-design principles and distributed system security.",
        "⚡ Advanced scripting in Python for operational security task accuracy.",
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
      duration: "Jan 2024 - Feb 2026 (Expected)",
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
      title: "ISC2 CCSP",
      subtitle: "- Certified Cloud Security Professional",
      logo_path: "isc2_logo.png",
      certificate_link: "#",
      alt_name: "ISC2",
      color_code: "#000000",
    },
    {
      title: "CompTIA Security+",
      subtitle: "- CompTIA",
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
    "Over 1.5 years of experience in 'Big 4' environments, specializing in application security, process automation, and identity governance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Analyst",
          company: "Deloitte USI Hyderabad, India",
          company_url: "https://www2.deloitte.com/",
          logo_path: "deloitte_logo.png",
          duration: "Aug 2022 – Jan 2024",
          location: "Hyderabad, India",
          description:
            "Managed secure workflows for technical change reviews and access governance. Deployed automated workflows via Azure Logic Apps, ensuring compliance with ISO 27001/SOC 2 standards.",
          color: "#86BC25",
        },
      ],
    },
    {
      title: "Internships and Volunteerships",
      work: false,
      experiences: [
        
        {
          title: "Technical Trainee (Identity Security)",
          company: "Global Education Pvt Ltd",
          company_url: "",
          logo_path: "global_edu_logo.png",
          duration: "June 2021 – July 2022",
          location: "Nagpur, India",
          description:
            "Oversaw security for 2,000+ sensitive applications and performed foundational security testing using Java and Python.",
          color: "#000000",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "Key projects include AI-powered threat detection for social media account classification and designing theoretical DLP architectures for multi-region cloud environments.",
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
      "I am available on LinkedIn and Gmail. I can help you with IAM, PAM solutions, and Cyber Security research.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Documentation of my professional journey and technical knowledge sharing. Coming soon.",
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
    title: "Phone Number",
    subtitle: "+44 07452751029",
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