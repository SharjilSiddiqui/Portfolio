import { useState } from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";

function App() {
  // ✅ Your custom color palette
  const colors = {
    primary: "#001427",
    secondary: "#BF0603",
    accent: "#F4D58D",
    textLight: "#708D81",
    textDark: "#ffffff",
    bgLight: "#001427",
    bgDark: "#0d1a26",
  };

  // Dummy project data
  const projects = [
    {
      id: 1,
      title: 'E-commerce Storefront',
      description: 'A responsive e-commerce platform built with React, featuring product listings, a shopping cart, and user authentication.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Redux', 'Firebase'],
      image: 'https://placehold.co/600x400/001427/FFFFFF?text=E-Commerce+Store',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A full-stack task manager allowing users to create, update, and delete tasks. Includes features like priority setting and due dates.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/BF0603/FFFFFF?text=Task+Manager',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application fetching real-time weather data from an external API, displaying current conditions and forecasts.',
      technologies: ['React', 'JavaScript', 'CSS', 'OpenWeather API'],
      image: 'https://placehold.co/600x400/F4D58D/001427?text=Weather+App',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Personal Blog Platform',
      description: 'A minimalist blog platform where users can read and publish articles. Features markdown support and comment sections.',
      technologies: ['React', 'Gatsby', 'GraphQL', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/001427/FFFFFF?text=Blog+Platform',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Firebase'],
    tools: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Vite', 'npm', 'Yarn'],
    concepts: ['Component-Based Architecture', 'State Management', 'Asynchronous JavaScript', 'Debugging', 'Version Control'],
  };

  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        backgroundColor: colors.bgLight,
        color: colors.textDark,
      }}
    >
      {/* Header */}
      <Header colors={colors} />

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
        <Hero colors={colors} />
        <About colors={colors} />
        <Skills colors={colors} skills={skills} />
        <Projects colors={colors} projects={projects} />
        <Contact colors={colors} />
      </main>

      {/* Footer */}
      <Footer colors={colors} />
    </div>
  );
}

export default App;
