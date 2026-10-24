import { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub} from 'react-icons/fa'
import './App.css'

// 1. Import your project images here
import calculatorImg from './assets/calculator.png'
import libraryImg from './assets/library.png'
import heroImg from "./assets/hero.png";



function App() {
  // Project data state with images added
  const [projects] = useState([
    { id: 1, title: "Calculator Project", 
      desc: "A simple Calculator project built with HTML, CSS, and JavaScript. Supports basic arithmetic operations.", 
      link: "https://zain3472105-cloud.github.io/Calculator-project/", 
      image: calculatorImg },
    { id: 2, title: "Final Project", 
      desc: "My final web development project showcasing advanced concepts.", 
      link: " https://zain3472105-cloud.github.io/final-project-team/",
      image: libraryImg},
  ])

  // Skills data state with icons components 
  const [skills] = useState([
    { name: "HTML5", level: "Advanced", icon: <FaHtml5 style={{ color: '#e34c26' }} /> },
    { name: "CSS3", level: "Advanced", icon: <FaCss3Alt style={{ color: '#264de4' }} /> },
    { name: "JavaScript", level: "Intermediate", icon: <FaJsSquare style={{ color: '#f7df1e' }} /> },
    { name: "React", level: "Intermediate", icon: <FaReact style={{ color: '#61dafb' }} /> },
    { name: "Git", level: "Intermediate", icon: <FaGitAlt style={{ color: '#f05032' }} /> },
    { name: "GitHub", level: "Intermediate", icon: <FaGithub style={{ color: '#ffffff' }} /> }
  ])

  return (
    <div className="portfolio">
      {/* 1. Header and Navigation Bar */}
      <header className="navbar">
        <div className="logo">My Portfolio</div>
        <nav>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* 2. Hero Section (Main Introduction) */}
      <section id="about" className="hero-section">
        <div className="hero-container">
          {/* Left Side: The Info Card */}
          <div className="hero-card">
            <h1>Hello, I'm Zainab Hasan.</h1>
            <h2 className="subtitle">Front-End Developer</h2>
          <p>
            I am a passionate Front-End Developer. Over the past 4 months of intensive learning, 
            I have successfully mastered core web technologies including <strong>HTML, CSS, JavaScript, React, Git, and GitHub</strong>. 
            I am deeply committed to continuous growth and look forward to further developing my skills, 
            building innovative web applications, and expanding my technical expertise.
          </p>
          <button className="cta-btn">Download Resume</button>
        </div>
        {/* Right Side: The Image Profile */}
          <div className="hero-image-box">
            {/* You can replace 'profile.png' with your actual image filename later */}
            <img src={heroImg} alt="Zainab Hasan" className="hero-img" />
          </div>

        </div>
      </section>
      
      {/* NEW: Skills Section */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Projects Showcase Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Form Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="cta-btn send-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="footer">
        <p>
          Connect with me on:{" "}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}
          >
            GitHub
          </a>
        </p>
        <p>
          Connect me via:{" "}
          <a 
            href="mailto:zain3472105@gmail.com" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}
          >
            zain3472105@gmail.com
          </a>
        </p>
        <p>© 2026 All Rights Reserved.</p>
      </footer>
      </div>
  )
}

export default App