import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "AI Chatbot",
      description: "Gemini API-based chatbot with context awareness, file upload, and emoji support. Built with modern React and integrated with advanced AI capabilities for natural conversations.",
      image: "/images/AI-chatbot.jpg",
      repo: "https://github.com/Priyal-2005/AI-Chatbot",
      live: "https://priyal-2005.github.io/AI-Chatbot/",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates with search, forecast, and smooth responsive UI. Features location-based weather data, 7-day forecasts, and beautiful weather animations.",
      image: "/images/Weather-app.jpg",
      repo: "https://github.com/Priyal-2005/Weather-App",
      live: "https://priyal-2005.github.io/Weather-App/",
    },
    {
      title: "Calculator",
      description: "Basic calculator with dark mode, delete functionality, and modern UI experience. Supports complex calculations with a clean, intuitive interface design.",
      image: "/images/Calculator.jpg",
      // Add your GitHub repository link here
      repo: "https://github.com/Priyal-2005/Calculator", // Replace with actual repo URL
      // Add your live demo link here
      live: "https://your-calculator-demo.vercel.app", // Replace with actual demo URL
    },
    {
      title: "BMI Calculator",
      description: "Interactive BMI checker with sliders and health status indicators. Provides personalized health recommendations and tracks BMI history over time.",
      image: "/images/bmi-calculator.jpg",
      repo: "https://github.com/Priyal-2005/BMI-Calculator",
      live: "https://priyal-2005.github.io/BMI-Calculator/",
    },
    {
      title: "Calendar",
      description: "Simple and clean calendar with navigation and real-time date info. Features event management, reminders, and seamless month-to-month navigation.",
      image: "/images/Calendar.jpg",
      // Add your GitHub repository link here
      repo: "https://github.com/Priyal-2005/calendar", // Replace with actual repo URL
      // Add your live demo link here
      live: "https://your-calendar-demo.vercel.app", // Replace with actual demo URL
    },
    {
      title: "Notes App",
      description: "A smart notes application built with React that allows users to create, edit, delete, and pin notes. Supports autosave and responsive layout for mobile users.",
      image: "/images/notes-app.jpg",
      // Add your GitHub repository link here
      repo: "https://github.com/Priyal-2005/notes-app", // Replace with actual repo URL
      // Add your live demo link here
      live: "https://your-notes-app-demo.vercel.app", // Replace with actual demo URL
    },
    {
      title: "Loan Calculator App",
      description: "A modern loan calculator that computes EMI, total payment, and interest breakdown. Built using Next.js with real-time input handling and styled with plain CSS. Supports dynamic input and responsive charts.",
      image: "/images/loan-calculator.jpg",
      status: "Work in Progress",
      // Add your GitHub repository link here when available
      repo: "https://github.com/Priyal-2005/loan-calculator", // Replace with actual repo URL
      // Live demo not available yet for work in progress
      live: null, // Will be added when project is completed
    },
  ];

  return (
    <>
      <header className="header">
        <Link href="/" className="logo">Portfolio.</Link>

        <nav className="navbar">
          <Link href="/" style={{ '--i': 1 }}>Home</Link>
          <Link href="/about" style={{ '--i': 2 }}>About</Link>
          <Link href="/skills" style={{ '--i': 3 }}>Skills</Link>
          <Link href="/projects" style={{ '--i': 4 }} className="active">Portfolio</Link>
          <Link href="/#contact" style={{ '--i': 5 }}>Contact</Link>
        </nav>
      </header>

      <Link href="/" className="back-arrow">
        <i className='bx bx-arrow-back'></i>
        <span>Back to Home</span>
      </Link>

      <section className="projects-section">
        <div className="main-text">
          <h2>Latest <span>Projects</span></h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                {project.status && (
                  <div className="project-status">
                    <span>{project.status}</span>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                
                {/* Project Links */}
                <div className="project-links">
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      className="project-link repo-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <i className='bx bxl-github'></i>
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="project-link demo-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <i className='bx bx-link-external'></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="last-text">
        <p>Developed by Priyal Sarda © 2024</p>
      </div>

      <a href="#home" className="top">
        <i className='bx bx-up-arrow-alt'></i>
      </a>
    </>
  );
}