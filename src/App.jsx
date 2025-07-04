import { useState } from 'react'
import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";


function App() {
  // Define the colors based on the user's provided image palette.
  // These will be used for various elements in the design.
  const colors = {
    primary: '#002D62', // Navy Blue - for headers, prominent elements
    secondary: '#1E90FF', // Dodger Blue - for accents, buttons
    accent: '#87CEEB', // Sky Blue - for subtle highlights, backgrounds
    textDark: '#333333', // Dark text for readability
    textLight: '#ffffff', // Light text for dark backgrounds
    bgLight: '#f8f8f8', // Light background
    bgDark: '#1a1a1a', // Dark background (optional, could be used for footer or specific sections)
  };

  // Dummy project data. In a real application, this might come from an API or a CMS.
  // Each project includes details necessary for the ProjectCard component.
  const projects = [
    {
      id: 1,
      title: 'E-commerce Storefront',
      description: 'A responsive e-commerce platform built with React, featuring product listings, a shopping cart, and user authentication.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Redux', 'Firebase'],
      image: 'https://placehold.co/600x400/002D62/FFFFFF?text=E-Commerce+Store',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A full-stack task manager allowing users to create, update, and delete tasks. Includes features like priority setting and due dates.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/1E90FF/FFFFFF?text=Task+Manager',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application fetching real-time weather data from an external API, displaying current conditions and forecasts.',
      technologies: ['React', 'JavaScript', 'CSS', 'OpenWeather API'],
      image: 'https://placehold.co/600x400/87CEEB/002D62?text=Weather+App',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Personal Blog Platform',
      description: 'A minimalist blog platform where users can read and publish articles. Features markdown support and comment sections.',
      technologies: ['React', 'Gatsby', 'GraphQL', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/002D62/FFFFFF?text=Blog+Platform',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  // Define skills categorized for better organization.
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Firebase'],
    tools: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Vite', 'npm', 'Yarn'],
    concepts: ['Component-Based Architecture', 'State Management', 'Asynchronous JavaScript', 'Debugging', 'Version Control'],
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: colors.bgLight, color: colors.textDark }}>
      {/* Header Component */}
      <Header colors={colors} />

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
        {/* Hero Section */}
        <Hero colors={colors} />

        {/* About Section */}
        <About colors={colors} />

        {/* Skills Section */}
        <Skills colors={colors} skills={skills} />

        {/* Projects Section */}
        <Projects colors={colors} projects={projects} />

        {/* Contact Section */}
        <Contact colors={colors} />
      </main>

      {/* Footer Component */}
      <Footer colors={colors} />
    </div>
  );
}

export default App;