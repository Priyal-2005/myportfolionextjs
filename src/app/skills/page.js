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
        <div className="container1" id="skills">
          <h1 className="heading1">Technical Skills</h1>
          <div className="technical-bars">
            <div className="bar">
              <div className="info">
                <i style={{ color: "#c95d2e" }} className='bx bxl-html5'></i>
                <span>HTML</span>
              </div>
              <div className="progress-line html"><span></span></div>
            </div>

            <div className="bar">
              <div className="info">
                <i style={{ color: "#147bbc" }} className='bx bxl-css3'></i>
                <span>CSS</span>
              </div>
              <div className="progress-line css"><span></span></div>
            </div>

            <div className="bar">
              <div className="info">
                <i style={{ color: "#b0bc1e" }} className='bx bxl-javascript'></i>
                <span>JavaScript</span>
              </div>
              <div className="progress-line js"><span></span></div>
            </div>

            <div className="bar">
              <div className="info">
                <i style={{ color: "#0078d4" }} className='bx bx-data'></i>
                <span>SQL</span>
              </div>
              <div className="progress-line sql"><span></span></div>
            </div>

            <div className="bar">
              <div className="info">
                <i style={{ color: "#000000" }} className='bx bx-code-block'></i>
                <span>Next.js</span>
              </div>
              <div className="progress-line nextjs"><span></span></div>
            </div>

            <div className="bar">
              <div className="info">
                <i style={{ color: "#c32ec9" }} className='bx bxl-react'></i>
                <span>React</span>
              </div>
              <div className="progress-line react"><span></span></div>
            </div>

            <div className="bar">
              <div className="info">
                <i style={{ color: "#69bcbc" }} className='bx bxl-python'></i>
                <span>Python</span>
              </div>
              <div className="progress-line python"><span></span></div>
            </div>
          </div>
        </div>

        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            {[
              { percent: "90%", label: "Leadership", pathClass: "path-1" },
              { percent: "85%", label: "Communication", pathClass: "path-2" },
              { percent: "75%", label: "Problem Solving", pathClass: "path-3" },
              { percent: "80%", label: "Teamwork", pathClass: "path-4" },
            ].map((skill, index) => (
              <div className="radial-bar" key={index}>
                <svg viewBox="0 0 200 200">
                  <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                  <circle className={`path ${skill.pathClass}`} cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">{skill.percent}</div>
                <div className="text">{skill.label}</div>
              </div>
            ))}
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