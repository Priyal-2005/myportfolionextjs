'use client';

import Image from 'next/image';
import './globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">Portfolio.</a>

        <nav className="navbar">
          <a href="#home" style={{ '--i': 1 }} className="active">Home</a>
          <Link href="/about" style={{ '--i': 2 }}>About</Link>
          <Link href="/skills" style={{ '--i': 3 }}>Skills</Link>
          <Link href="/projects" style={{ '--i': 4 }}>Portfolio</Link>
          <a href="#contact" style={{ '--i': 5 }}>Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, it's Me</h3>
          <h1>Priyal Sarda</h1>
          <h3>And I'm a <span className="text">Student Entrepreneur</span></h3>
          <p>Co-founder of Coding Champs and Founder of PhotoDost. Student entrepreneur passionate about AI, and turning real-world problems into impactful solutions. I specialize in Python, JavaScript, React, and have a strong foundation in data structures and algorithms.</p>
          
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/priyal-sarda-a38793323/" style={{ '--i': 7 }} aria-label="LinkedIn">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="mailto:priyal.sarda2005@gmail.com" style={{ '--i': 8 }} aria-label="Gmail">
              <i className='bx bxl-gmail'></i>
            </a>
            <a href="https://github.com/Priyal-2005" style={{ '--i': 9 }} aria-label="GitHub">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.instagram.com/itspriyalsarda/?__pwa=1"
  target="_blank"
  rel="noopener noreferrer"
  style={{ '--i': 10 }}
  aria-label="Instagram"
>
  <i className='bx bxl-instagram'></i>
</a>

          </div>
          
          <Link href="/about" className="btn-box">More About Me</Link>
        </div>

        <div className="profile-container">
          <img src="/images/profile.jpg" alt="Priyal Sarda" className="profile-pic" />
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>Contact <span>Me</span></h2>
          <h4>Let's Work Together</h4>
          <p>I'm always interested in new opportunities and collaborations. Whether you have a project in mind, want to discuss business ideas, or just want to connect, feel free to reach out!</p>
          
          <div className="contact-list">
            <li><i className='bx bxs-send'></i> priyalsarda@example.com</li>
            <li><i className='bx bxs-phone'></i> +91 12345 67890</li>
            <li><i className='bx bxs-location-plus'></i> Mumbai, India</li>
          </div>
          
          <div className="contact-icons">
            <i className='bx bxl-linkedin' style={{ '--i': 7 }}></i>
            <i className='bx bxl-gmail' style={{ '--i': 8 }}></i>
            <i className='bx bxl-github' style={{ '--i': 9 }}></i>
            <i className='bx bxl-instagram' style={{ '--i': 10 }}></i>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <input type="text" placeholder="Enter Your Subject" required />
            <textarea placeholder="Enter Your Message" required></textarea>
            <input type="submit" value="Submit" className="send" />
          </form>
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