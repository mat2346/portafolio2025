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
    { id: "about", title: "sobre mi" },
    { id: "work", title: "trabajos" },
    { id: "contact", title: "Contacto" },
  ];
  
  export const services = [
    { title: "Desarrollador Web", icon: web },
    { title: "Desarrollador React Native", icon: mobile },
    { title: "Desarrollador Backend", icon: backend },
    { title: "Ingeniero en Sistemas", icon: creator },
  ];
  
  export const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React JS", icon: reactjs },
    { name: "Redux Toolkit", icon: redux },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "git", icon: git },
    { name: "figma", icon: figma },
  ];
  
  export const experiences = [
    {
      title: "Desarrollador React.js",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Marzo 2020 - Abril 2021",
      points: [
        "Desarrollando y manteniendo aplicaciones web usando React.js y otras tecnologías relacionadas.",
        "Colaborando con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores.",
        "Implementando diseño responsivo y asegurando compatibilidad entre navegadores.",
        "Participando en revisiones de código y proporcionando retroalimentación constructiva a otros desarrolladores.",
      ],
    },
    // Resto de las experiencias en español...
  ];
  
  export const testimonials = [
    {
      testimonial:
        "Pensé que era imposible hacer un sitio web tan hermoso como nuestro producto, pero Rick me demostró que estaba equivocado.",
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
        "Plataforma web que permite a los usuarios buscar, reservar y gestionar alquileres de autos de diversos proveedores.",
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
  