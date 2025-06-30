import Link from 'next/link';

export default function About() {
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

      <div className="last-text">
        <p>Developed by Priyal Sarda © 2024</p>
      </div>

      <a href="#home" className="top">
        <i className='bx bx-up-arrow-alt'></i>
      </a>
    </>
  );
}