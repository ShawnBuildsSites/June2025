import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faCss3Alt, faGit, faGithubAlt, faHtml5, faJsSquare, faLinkedin, faMicrosoft, faPhp, faReact, faVuejs, faWordpress } from '@awesome.me/kit-391a0d452d/icons/classic/brands';
import { faCode, faComment, faGlobe, faPaperPlane, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faBlock, faCodeSimple, faGrid } from '@awesome.me/kit-391a0d452d/icons/classic/light';

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function Navbar() {
  return (
    <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-linear-0 from-orange-600 to-orange-500 shadow-lg rounded-full px-6 py-2 z-50'>
      <ul className="flex space-x-4">
        <li>
          <a onClick={() => handleScroll('skills')} className="text-gray-200 hover:text-white">Skills</a>
          <a onClick={() => handleScroll('projects')} className="mx-10 text-gray-200 hover:text-white">Projects</a>
          <a onClick={() => handleScroll('about')} className="text-gray-200 hover:text-white">About</a>
          <a onClick={() => handleScroll('contact')} className="mx-10 text-yellow-200 hover:text-white">Contact</a>
          <a href="https://shawntgray.com/blog" className="mx-10 text-yellow-200 hover:text-white">Blog</a>
          <a href="https://linkedin.com/in/shawntgray" target="_blank" className="text-gray-200 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ShawnBuildsSites" target="_blank" className="ml-10 text-gray-200 hover:text-white">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const skills = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'PHP', icon: faPhp },
    { name: 'C#', icon: faCode },
    { name: 'WordPress', icon: faWordpress },
    { name: 'Webflow', icon: faGlobe },
    { name: 'React', icon: faReact },
    { name: 'Lit', icon: faBlock },
    { name: 'Vue.js', icon: faVuejs },
    { name: 'Tailwind', icon: faCss3 },
    { name: 'Git / GitHub', icon: faGit },
    { name: 'Figma', icon: faPencil },
    { name: 'Adobe XD', icon: faGrid },
    { name: 'Visual Studio Code', icon: faCodeSimple },
    { name: '.NET', icon: faMicrosoft }
  ];

  const projects = [
    {
      name: 'React Art Gallery & Slideshow',
      description: 'This image gallery is a fully responsive React-based web app designed to showcase my original artwork in a clean, modern interface. Built from scratch using functional components and hooks, the app emphasizes performance, accessibility, and a seamless user experience.',
      image: 'react-gallery.webp',
      tech: 'React, Vite, JavaScript, Photoshop, Illustrator',
      url: 'https://shawngraydesign.com/react-gallery',
      cta: 'Browse Gallery'
    }, {
      name: 'Trakstar Corporate WordPress Website',
      description: "I led the complete rebuild of Trakstar.com as the lead WordPress Developer. The outdated legacy site was replaced with a custom, modern WordPress theme to align with the company's evolving brand and goals. I collaborated closely with the design, content, and marketing co-workers to deliver a scalable, high-performance site. The new site drove major growth in traffic, leads, and credibility which contributed significantly to the company's valuation and business trajectory.",
      image: 'trakstar.webp',
      tech: 'WordPress, PHP, JavaScript, jQuery, Adobe XD, Figma',
      url: 'https://trakstar.com',
      cta: 'Visit Site'
    }, {
      name: 'Living In Coherence WordPress Website',
      description: 'PrivateNode.io hired me to design and develop LivingInCoherence.com, a responsive WordPress site for a therapist launching her private practice. I led the entire creative process, turning her vision into a calming, professional website with a custom theme and key features like service pages, contact forms, and a blog. The result is a user-friendly, flexible website that reflects her values and supports her business growth.',
      image: 'living-in-coherence.webp',
      tech: 'WordPress, PHP, JavaScript, Figma',
      url: 'https://livingincoherence.com/',
      cta: 'Visit Site'
    }, {
      name: 'Community Vet WordPress Website',
      description: 'Community Vet is a high-volume clinic focused on affordable, compassionate pet care, and needed a website that reflected their values of empathy and transparency. I designed and developed a warm, approachable site with custom illustrations, clear service information, and an efficient user experience tailored to their fast-paced operations. The result balances emotional connection with practical function, helping reduce barriers to care and support their mission.',
      image: 'community-vet.webp',
      tech: 'WordPress, JavaScript, PHP, ACF',
      url: 'https://communityvet.shawngraydesign.com',
      cta: 'Visit Site'
    }
  ];

  const colorChoices = ['orange-500', 'orange-600', 'orange-700', 'teal-500', 'teal-600', 'teal-700', 'violet-500', 'violet-600', 'violet-700'];

  const [randomColor, setRandomColor] = useState([]);
  useEffect(() => {
    const initialColors = Array.from({ length: skills.length }, () => colorChoices[Math.floor(Math.random() * colorChoices.length)]);
    setRandomColor(initialColors);
  }, []);

  return (
    <main className="font-sans text-gray-700 bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="text-gray-200 min-h-[75vh] relative flex flex-col items-center justify-center text-center px-4">
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
            onClick={() => handleScroll('projects')}
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
            <div key={skill.name} className={`bg-${randomColor[index]} text-gray-200 p-4 rounded-xl shadow-sm`}>
              {skill.icon && <FontAwesomeIcon icon={skill.icon} className='mr-3' />}{skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50 px-6" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <a
              key="project.name"
              href={project.url}
              target="_blank"
              rel='nofollow noreferrer'
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded mb-4"
              />
              <h3 className="text-xl text-orange-600 font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500 mt-3 font-normal">Tech: {project.tech}</p>
              <p className="text-gray-700 text-left p-5 mb-5 font-normal">{project.description}</p>
              <button
                className="text-orange-600 border-1 rounded px-4 py-2 mb-5 hover:shadow-lg transition"
              >{project.cta}</button>
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white" id="about">
        <h2 className="text-3xl font-bold mb-6 text-center">About Shawn T Gray</h2>
        <div className="flex flex-row max-w-5xl mx-auto content-center">
          <div className="basis-1/4">
            <img
              src='portrait.webp'
              alt='Shawn T Gray Portrait'
              className='rounded-full mx-auto'
            />
          </div>
          <div className="basis-3/4 px-6 text-left text-gray-700">
            <p className="text-xl">
              I'm a web developer with a passion for clean code and thoughtful design. I love helping businesses build strong, fast, and user-friendly websites.
            </p>
            <p className='my-5'>I&apos;m an experienced Front-End Web Developer and WordPress Specialist with over 10 years of success designing and developing fast, responsive websites. I&apos;ve built everything from custom web apps and conversion-focused landing pages to large-scale corporate websites—delivering measurable growth in traffic, leads, and business value.</p>
            <p className='mb-5'>I launched my web development career in 2012 with a professional site for a local business and built early leadership experience through AIGA at Cleveland State University, where I earned my BA in 2014. After starting a design-focused blog and freelancing full-time in 2015, I went on to develop impactful websites like Community.Vet and took on the role of Web Chair for AIGA Cleveland in 2020. In 2022, I led a major redesign of Trakstar.com that contributed to a successful company sale, and I continue to grow as an independent Web & WordPress Developer under Shawn Gray Design.</p>
            <p className='mb-5'>My approach to web design embodies simple yet powerful principles: Plan. Design. Build. Guided by a user-first approach and responsive design, I champion performance optimization and accessibility. A great website seamlessly marries functionality with storytelling, ensuring an effortless user journey regardless what the user&apos;s device may be.</p>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange-500 text-white px-6" id="contact">
        <h2 className="text-4xl font-bold mb-6 text-center">Let&apos;s Talk!</h2>
        <div className="text-center">
          <p className="mb-4 text-lg">Let&apos;s work together or talk about your next project.</p>
          <a
            href="mailto:hello@shawntgray.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
          >
            <FontAwesomeIcon icon={faPaperPlane} className='mr-5' />
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-6 text-center bg-white">
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-5xl text-orange-600 -rotate-5 my-25'><strong>Creative clutter</strong> is better than <strong>idle neatness</strong>.</h2>
          <img
            src="workspace.png"
            alt="Messy Workspace vector illustration"
          />
        </div>
        <p className="text-gray-200 text-sm bg-gray-800 py-5">© {new Date().getFullYear()} Shawn T Gray. Built with React, Tailwind, and FontAwesome.</p>
      </footer>
      <div
        className="sticky-contact-button"
        onClick={() => window.location.href = 'mailto:hello@shawntgray.com'}
      >
        <FontAwesomeIcon icon={faComment} />
        <span className='sticky-contact-button-text'>Contact</span>
      </div>
    </main>
  );
}

export default App
