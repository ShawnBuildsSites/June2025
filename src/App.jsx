/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const colorChoices = ['orange-500', 'orange-600', 'orange-700', 'teal-500', 'teal-600', 'teal-700', 'violet-500', 'violet-600', 'violet-700'];
  const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'C#', 'WordPress', 'Webflow', 'React', 'Lit', 'Vue.js', 'Tailwind', 'Git', 'Figma', 'Adobe XD', 'Visual Studio Code', '.NET'];


  const [randomColor, setRandomColor] = useState([]);
  useEffect(() => {
    const initialColors = Array.from({ length: skills.length }, () => colorChoices[Math.floor(Math.random() * colorChoices.length)]);
    setRandomColor(initialColors);
  }, []);

  return (
    <main className="font-sans text-gray-700 bg-white">
      {/* Hero Section */}
      <section className="text-gray-200 min-h-screen relative flex flex-col items-center justify-center text-center px-4">
        <video
          className="absolute z-0 w-full h-full object-cover"
          src="/orange-dark-background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10">
          <img
            className="w-40 mx-auto mb-5"
            src="/logo.svg"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shawn T Gray<br />
            Front-End Developer
          </h1>
          <p className="text-xl md:text-2xl max-w-xl mt-8 mb-12">
            I build fast, accessible, responsive websites using React, WordPress, and modern tools.
          </p>
          <a
            onClick={handleScrollToProjects}
            className="bg-orange-600 text-gray-200 px-6 py-3 rounded-2xl hover:bg-yellow-500 transition"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white px-6" id="skills">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={skill} className={`bg-${randomColor[index]} text-gray-200 p-4 rounded-xl shadow-sm`}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50 px-6" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img src="https://via.placeholder.com/600x300" alt="Project" className="rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-gray-700 mb-2">
              Short description of what you built and the value it delivered.
            </p>
            <p className="text-sm text-gray-500 mb-2">Tech: React, Tailwind, API</p>
            <a href="#" className="text-blue-600 hover:underline">View Live</a>
          </div>
          {/* Repeat for more projects */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white" id="about">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-lg text-gray-700">
          I'm a web developer with a passion for clean code and thoughtful design. I love helping businesses build strong, fast, and user-friendly websites.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100 px-6" id="contact">
        <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
        <div className="text-center">
          <p className="mb-4 text-lg">Let’s work together or talk about your next project.</p>
          <a
            href="mailto:your@email.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Your Name. Built with React + Tailwind.
      </footer>
    </main>
  );
}

export default App
