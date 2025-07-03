import Link from 'next/link';

export default function Skills() {
  return (
    <>
      <header className="header">
        <Link href="/" className="logo">Portfolio.</Link>

        <nav className="navbar">
          <Link href="/" style={{ '--i': 1 }}>Home</Link>
          <Link href="/about" style={{ '--i': 2 }}>About</Link>
          <Link href="/skills" style={{ '--i': 3 }} className="active">Skills</Link>
          <Link href="/projects" style={{ '--i': 4 }}>Portfolio</Link>
          <Link href="/#contact" style={{ '--i': 5 }}>Contact</Link>
        </nav>
      </header>

      <Link href="/" className="back-arrow">
        <i className='bx bx-arrow-back'></i>
        <span>Back to Home</span>
      </Link>

      <h1 className="sub-title">My <span>Skills</span></h1>
      
      <section>
        {/* Technical Skills Section */}
        <div className="container1" id="skills">
          <h1 className="heading1">Technical Skills</h1>
          <div className="technical-skills-grid">
            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#c95d2e" }} className='bx bxl-html5'></i>
                  <span>HTML</span>
                </div>
                <span className="percentage-badge">90%</span>
              </div>
              <div className="progress-line html"><span></span></div>
            </div>

            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#147bbc" }} className='bx bxl-css3'></i>
                  <span>CSS</span>
                </div>
                <span className="percentage-badge">70%</span>
              </div>
              <div className="progress-line css"><span></span></div>
            </div>

            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#b0bc1e" }} className='bx bxl-javascript'></i>
                  <span>JavaScript</span>
                </div>
                <span className="percentage-badge">85%</span>
              </div>
              <div className="progress-line js"><span></span></div>
            </div>

            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#0078d4" }} className='bx bx-data'></i>
                  <span>SQL</span>
                </div>
                <span className="percentage-badge">70%</span>
              </div>
              <div className="progress-line sql"><span></span></div>
            </div>

            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#000000" }} className='bx bx-code-block'></i>
                  <span>Next.js</span>
                </div>
                <span className="percentage-badge">80%</span>
              </div>
              <div className="progress-line nextjs"><span></span></div>
            </div>

            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#c32ec9" }} className='bx bxl-react'></i>
                  <span>React</span>
                </div>
                <span className="percentage-badge">80%</span>
              </div>
              <div className="progress-line react"><span></span></div>
            </div>

            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#69bcbc" }} className='bx bxl-python'></i>
                  <span>Python</span>
                </div>
                <span className="percentage-badge">80%</span>
              </div>
              <div className="progress-line python"><span></span></div>
            </div>

            <div className="skill-card-tech">
              <div className="skill-header">
                <div className="skill-name">
                  <i style={{ color: "#0ef" }} className='bx bx-brain'></i>
                  <span>Prompt Engineering</span>
                </div>
                <span className="percentage-badge">75%</span>
              </div>
              <div className="progress-line prompt"><span></span></div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="professional-skills">
            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-crown'></i>
              </div>
              <h3>Leadership</h3>
              <p>Leading teams and driving innovation</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-chat'></i>
              </div>
              <h3>Communication</h3>
              <p>Clear and effective messaging</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-bulb'></i>
              </div>
              <h3>Problem Solving</h3>
              <p>Creative solutions to complex challenges</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-group'></i>
              </div>
              <h3>Teamwork</h3>
              <p>Collaborative and supportive approach</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-book-reader'></i>
              </div>
              <h3>Teaching</h3>
              <p>Sharing knowledge and mentoring</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-microphone'></i>
              </div>
              <h3>Public Speaking</h3>
              <p>Confident presentation skills</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-refresh'></i>
              </div>
              <h3>Adaptability</h3>
              <p>Flexible and resilient mindset</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-search-alt'></i>
              </div>
              <h3>Critical Thinking</h3>
              <p>Analytical and logical reasoning</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className='bx bx-palette'></i>
              </div>
              <h3>Creativity</h3>
              <p>Innovative and artistic thinking</p>
            </div>
          </div>
        </div>

        {/* Tools & Frameworks Section */}
        <div className="container1">
          <h1 className="heading1">Tools & Frameworks</h1>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">
                <i className='bx bxl-github'></i>
              </div>
              <h4>GitHub</h4>
            </div>

            <div className="tool-card">
              <div className="tool-icon">
                <i className='bx bxl-firebase'></i>
              </div>
              <h4>Firebase</h4>
            </div>

            <div className="tool-card">
              <div className="tool-icon">
                <i className='bx bx-data'></i>
              </div>
              <h4>MongoDB</h4>
            </div>

            <div className="tool-card">
              <div className="tool-icon">
                <i className='bx bx-code-alt'></i>
              </div>
              <h4>VS Code</h4>
            </div>

            <div className="tool-card">
              <div className="tool-icon">
                <i className='bx bx-palette'></i>
              </div>
              <h4>Figma</h4>
            </div>
          </div>
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