import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


import user3 from "../assets/profile-pictures/user3.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import saad from "../assets/profile-pictures/saad.jpeg";
import mehreen from "../assets/profile-pictures/mehreen.jpeg";
import shahid from "../assets/profile-pictures/shahid.jpeg";
import eric from "../assets/profile-pictures/Eric.jpeg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Shahid Anwar",
    company: "Stellar Solutions",
    image: shahid,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Mehreen Saigal",
    company: "Leopard Courier Services",
    image: mehreen,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Zafar Asim",
    company: "Dewan Fibers",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and excellence are exceptional. Highly recommend their top-notch service.",
  },
  {
    user: "Saad Khwaja",
    company: "Deloitte",
    image: saad,
    text: "Working with Nexi-Craft was a game-changer. Their attention to detail and innovation accelerated our project remarkably. Highly grateful for their expertise!",
  },
  {
    user: "Eric Workman",
    company: "Axle Logistics",
    image: eric,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Krisa De La Cruz",
    company: "SGR TruckLines",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "User Role Management",
    description:
      "Define and manage different user roles with specific permissions to ensure data security and streamlined workflows.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Access and manage the system from mobile devices, ensuring flexibility and real-time updates on the go.",
  },
  {
    icon: <ShieldHalf />,
    text: "Security and Compliance",
    description:
      "Ensure data protection with robust security measures and compliance with industry standards and regulations.",
  },
  {
    icon: <BatteryCharging />,
    text: "Document Management",
    description:
      "Store, organize, and manage documents securely with easy retrieval and version control.",
  },
  {
    icon: <PlugZap />,
    text: "Task and Project Management",
    description:
      "Track tasks and projects with timelines, milestones, and progress indicators to ensure timely completion.",
  },
  {
    icon: <GlobeLock />,
    text: "Reporting and Analytics",
    description:
      "Generate detailed reports and analytics to gain insights into business operations and make data-driven decisions.",
  },
];

export const checklistItems = [
  {
    title: "User-Friendly Interface",
    description:
      "Experience intuitive navigation with a sleek, easy-to-use design.",
  },
  {
    title: "Comprehensive Analytics Dashboard",
    description:
      "Gain insights with a powerful dashboard that offers detailed analytics.",
  },
  {
    title: "Efficient Data Management",
    description:
      "View, update, and delete records effortlessly with organized tables.",
  },
  {
    title: "Seamless Module Integration",
    description:
      "Integrate seamlessly with other modules within the system for a cohesive workflow.",
  },
  {
    title: "Flexible Import/Export Options",
    description:
      "Easily import and export data to streamline your operations and maintain consistency.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "500 MB Storage",
      "2 Users",
      "Private Mode",
      "Data Backup Recovery"
    ],
  },
  {
    title: "Pro",
    price: "$60",
    features: [
      "Private board sharing",
      "1 Gb Storage",
      "5 Users",
      "Web Analytics",
      "Private Mode",
      "Data Backup Recovery"
    ],
  },
  {
    title: "Enterprise",
    price: "$400",
    features: [
      "Private board sharing",
      "50GB Storage",
      "Unlimited Users",
      "Web Analytics (Advance)",
      "Private Mode",
      "Data Backup Recovery"
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
