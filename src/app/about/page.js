import Link from 'next/link';

export default function About() {
  const journeySteps = [
    {
      date: "Oct 2019 - Jan 2020",
      title: "TiE TYE Entrepreneurship Program",
      description: "Won prototype competition",
      certificateLink: "https://drive.google.com/file/d/16RrjD6gf_N1ylPHRWldHEnGuHfjuQ4on/view?usp=sharing"
    },
    {
      date: "August 2020",
      title: "IIIT Hyderabad Online Pedagogy Program",
      description: "Youngest IIIT Certified Teacher",
      certificateLink: "https://drive.google.com/file/d/18bCx5JyAKdEuECxCjHw0P0DT11JyP8k0/view?usp=sharing"
    },
    {
      date: "August 2020",
      title: "Metamorphosis IIT Bhubaneshwar Entrepreneurship Program",
      description: "",
      certificateLink: "https://drive.google.com/file/d/17Dkd2poG3ZUKJHnr6MuuIoA9T4xsCuoN/view?usp=sharing"
    },
    {
      date: "March 2021",
      title: "Wadhwani Foundation Entrepreneurship Program",
      description: "",
      certificateLink: "https://drive.google.com/file/d/1gRKhINkr2JhvQ44vQXY7CbI3g6eHfoEQ/view?usp=sharing"
    },
    {
      date: "July 2022",
      title: "EduxLabs IIT Madras DL & Computer Vision using Python",
      description: "",
      certificateLink: "https://drive.google.com/file/d/1zPlE2MYzVNWSunKKASMm8BjTnDqiHuyx/view?usp=sharing"
    },
    {
      date: "July 2022 - August 2022",
      title: "Introduction to Artificial Intelligence – Nanyang Technological University",
      description: "",
      certificateLink: "https://drive.google.com/file/d/1QJ_fyFe5PADkdbxCeCoq9BNKyigEMOQp/view?usp=sharing"
    },
    {
      date: "August 2022 - October 2022",
      title: "Applied AI – Hewlett Packard Enterprise Education",
      description: "Got LoR for winning best AI prototype",
      certificateLink: "https://drive.google.com/file/d/1Ia_47xYRQg2q1-NYcg16HbX9dxIqwlNd/view?usp=sharing"
    }
  ];

  return (
    <>
      <header className="header">
        <Link href="/" className="logo">Portfolio.</Link>

        <nav className="navbar">
          <Link href="/" style={{ '--i': 1 }}>Home</Link>
          <Link href="/about" style={{ '--i': 2 }} className="active">About</Link>
          <Link href="/skills" style={{ '--i': 3 }}>Skills</Link>
          <Link href="/projects" style={{ '--i': 4 }}>Portfolio</Link>
          <Link href="/#contact" style={{ '--i': 5 }}>Contact</Link>
        </nav>
      </header>

      <Link href="/" className="back-arrow">
        <i className='bx bx-arrow-back'></i>
        <span>Back to Home</span>
      </Link>

      <section className="about" id="about">
        <div className="about-img">
          <img src="/images/img.jpeg" alt="About Priyal Sarda" />
        </div>
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>Student Entrepreneur & AI Enthusiast</h4>
          <p>
            I am passionate about Programming, AI, and solving real-life problems. I founded a startup that helps photographers and newlyweds, and I'm a TiE prototype competition winner who has explored idea validation through IIT & Wadhwani.
          </p>
          <p>
            My AI project for loan prediction won me an LoR from HPE. I co-founded Coding Champs and taught Python to kids, becoming the youngest IIIT-H certified pedagogy teacher. I donated 50% of my teaching earnings to PM CARE FUND.
          </p>
          <p>
            I enjoy participating in business and innovation competitions, including one by Tiger Global. Beyond tech, I love modelling and creative exploration! I have technical skills in Python, HTML, CSS, JavaScript, React, and DSA.
          </p>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="journey-section">
        <div className="journey-header">
          <h2>My <span>Journey</span></h2>
          <p>A timeline of my educational achievements and professional milestones</p>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {journeySteps.map((step, index) => (
            <div className="timeline-item" key={index} style={{ '--i': index + 1 }}>
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{step.date}</div>
                <h3 className="timeline-title">{step.title}</h3>
                {step.description && (
                  <p className="timeline-description">{step.description}</p>
                )}
                {/* Uncomment and add href when certificate links are available
                {step.certificateLink && (
                  <a href={step.certificateLink} className="timeline-certificate" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-certificate'></i>
                    View Certificate
                  </a>
                )}
                */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="last-text">
        <p>Developed by Priyal Sarda © 2024</p>
      </div>
    </>
  );
}