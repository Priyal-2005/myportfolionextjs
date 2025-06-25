'use client';

export default function Skills() {
  return (
    <>
      <h1 className="sub-title">My <span>Skills</span></h1>
      <section>
        <div className="container1" id="skills">
          <h1 className="heading1">Technical Skills</h1>
          <div className="technical-bars">

            <div className="bar">
              <i style={{ color: "#c95d2e" }} className='bx bxl-html5'></i>
              <div className="info"><span>HTML</span></div>
              <div className="progress-line html"><span></span></div>
            </div>

            <div className="bar">
              <i style={{ color: "#147bbc" }} className='bx bxl-css3'></i>
              <div className="info"><span>CSS</span></div>
              <div className="progress-line css"><span></span></div>
            </div>

            <div className="bar">
              <i style={{ color: "#b0bc1e" }} className='bx bxl-javascript'></i>
              <div className="info"><span>JavaScript</span></div>
              <div className="progress-line js"><span></span></div>
            </div>

            <div className="bar">
              <i style={{ color: "#c32ec9" }} className='bx bxl-react'></i>
              <div className="info"><span>React</span></div>
              <div className="progress-line react"><span></span></div>
            </div>

            <div className="bar">
              <i style={{ color: "#69bcbc" }} className='bx bxl-python'></i>
              <div className="info"><span>Python</span></div>
              <div className="progress-line python"><span></span></div>
            </div>

          </div>
        </div>

        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            {[
              { percent: "85%", label: "Leadership" },
              { percent: "90%", label: "Communication" },
              { percent: "75%", label: "Problem Solving" },
              { percent: "80%", label: "Teamwork" },
            ].map((skill, index) => (
              <div className="radial-bar" key={index}>
                <svg viewBox="0 0 200 200">
                  <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                  <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="precentage">{skill.percent}</div>
                <div className="text">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}