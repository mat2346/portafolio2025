import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,   
    starbucks, 
    carrent,
  } from "../assets";
  
  export const navLinks = [
    { id: "about", title: "about" },
    { id: "work", title: "work" },
    { id: "contact", title: "Contact" },
  ];
  
  export const services = [
    { title: "Web Developer", icon: web },
    { title: "React Native Developer", icon: mobile },
    { title: "Backend Developer", icon: backend },
    { title: "Systems Engineer", icon: creator },
  ];
  
  export const technologies = [
    { name: "HTML 5", icon: html, bg: "#e34c26" }, // Rojo HTML
    { name: "CSS 3", icon: css, bg: "#264de4" },  // Azul CSS
    { name: "JavaScript", icon: javascript, bg: "#f7df1e" }, // Amarillo JS
    { name: "React JS", icon: reactjs, bg: "#61dbfb" }, // Azul React
    { name: "Redux Toolkit", icon: redux, bg: "#764abc" }, // Violeta Redux
    { name: "Tailwind CSS", icon: tailwind, bg: "#38b2ac" }, // Verde Turquesa Tailwind
    { name: "Node JS", icon: nodejs, bg: "#68a063" }, // Verde Node.js
    { name: "MongoDB", icon: mongodb, bg: "#4ea94b" }, // Verde MongoDB
    { name: "git", icon: git, bg: "#f1502f" }, // Naranja Git
    { name: "figma", icon: figma, bg: "#f24e1e" }, // Naranja Figma
  ];
  
  export const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // Resto de las experiencias en inglés...
  ];
  
  export const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // Resto de los testimonios...
  ];
  
  export const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    // Resto de los proyectos...
  ];
  