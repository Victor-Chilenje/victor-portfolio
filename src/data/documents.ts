export interface Document {
  id: number;
  category: "Career" | "Certification" | "Achievement";
  title: string;
  issuer: string;
  file: string;
  icon: string;
  available: boolean;
  updated?: string;
}

export const documents: Document[] = [
  {
    id: 1,
    category: "Career",
    title: "Curriculum Vitae",
    issuer: "Victor Chilenje",
    file: "/documents/My CV.docx",
    icon: "📄",
    available: true,
    updated: "July 2026",
  },

  {
    id: 2,
    category: "Career",
    title: "Academic Transcript",
    issuer: "University of Lusaka",
    file: "/documents/Transcript.pdf",
    icon: "🎓",
    available: false,
  },

  {
    id: 3,
    category: "Certification",
    title: "Cisco CCNA",
    issuer: "Cisco Networking Academy",
    file: "/documents/CCNA.pdf",
    icon: "🌐",
    available: false,
  },

  {
    id: 4,
    category: "Certification",
    title: "AWS Cloud Practitioner",
    issuer: "Coming Soon",
    file: "",
    icon: "☁",
    available: false,
  },

  {
    id: 5,
    category: "Certification",
    title: "Microsoft Azure Fundamentals",
    issuer: "Coming Soon",
    file: "",
    icon: "🟦",
    available: false,
  },

  {
    id: 6,
    category: "Achievement",
    title: "Research Publications",
    issuer: "Coming Soon",
    file: "",
    icon: "📚",
    available: false,
  },
  {
    id: 7,
    category: "Certification",
    title: "Networking Basics ",
    issuer: "Cisco Networking Academy",
    file: "/documents/Networking Basics certificate .pdf",
    icon: "🌐",
    available: true,
  },
    {
    id: 8,
    category: "Certification",
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    file: "/documents/Networking_Devices_and_Initial_Configuration_certificate_victorchilenje9-gmail-com_b3557432-d402-4e01-8edc-702342de53ac.pdf",
    icon: "🌐",
    available: true,
  },
    {
    id: 9,
    category: "Certification",
    title: "Introduction to Cybersecurity ",
    issuer: "Cisco Networking Academy",
    file: "/documents/Introduction_to_Cybersecurity_certificate_victorchilenje9-gmail-com_9dfb8be5-9db0-436a-af7d-6d3dd9134817.pdf",
    icon: "🔒",
    available: true,
  },
    {
    id: 10,
    category: "Certification",
    title: "Introduction to Internet of Things (IoT) ",
    issuer: "Cisco Networking Academy",
    file: "/documents/Introduction to IoT.pdf",
    icon: "📡",
    available: true,
  },
];