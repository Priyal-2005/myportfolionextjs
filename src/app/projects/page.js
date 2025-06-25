'use client';

export default function Projects() {
  const projects = [
    {
      title: "AI Chatbot",
      description: "Gemini API-based chatbot with context awareness, file upload, and emoji support.",
      image: "/images/AI-chatbot.jpg",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates with search, forecast, and smooth responsive UI.",
      image: "/images/Weather-app.jpg",
    },
    {
      title: "Calculator",
      description: "Basic calculator with dark mode, delete, and modern UI experience.",
      image: "/images/Calculator.jpg",
    },
    {
      title: "BMI Calculator",
      description: "Interactive BMI checker with sliders and health status indicators.",
      image: "/images/bmi-calculator.jpg",
    },
    {
      title: "Calendar",
      description: "Simple and clean calendar with navigation and real-time date info.",
      image: "/images/Calendar.jpg",
    },
  ];

  return (
    <section className="projects-section">
      <div className="main-text">
        <h2>Latest <span>Projects</span></h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}