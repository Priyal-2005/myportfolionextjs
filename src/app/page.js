'use client';

import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">Portfolio.</a>

        <nav className="navbar">
          <a href="#home" style={{ '--i': 1 }} className="active">Home</a>
          <a href="#about" style={{ '--i': 2 }}>About</a>
          <a href="#skills" style={{ '--i': 3 }}>Skills</a>
          <a href="#projects" style={{ '--i': 4 }}>Portfolio</a>
          <a href="#contact" style={{ '--i': 5 }}>Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, it's Me</h3>
          <h1>Priyal Sarda</h1>
          <h3>And I'm a <span className="text"></span></h3>
          <p>Co-founder of Coding Champs and Founder of PhotoDost.<br />
            Student entrepreneur passionate about AI, and turning real-world problems into impactful solutions.
          </p>
          <div className="profile-container">
            <img src="/images/profile.jpg" alt="My Photo" className="profile-pic" />
          </div>
          <div className="home-sci">
            <a href="#" style={{ '--i': 7 }}><i className='bx bxl-linkedin'></i></a>
            <a href="#" style={{ '--i': 8 }}><i className='bx bxl-gmail'></i></a>
            <a href="#" style={{ '--i': 9 }}><i className='bx bxl-github'></i></a>
            <a href="#" style={{ '--i': 10 }}><i className='bx bxl-instagram'></i></a>
          </div>
          <a href="#" className="btn-box">More About Me</a>
        </div>
        <span className="home-imgHover"></span>
      </section>
    </>
  );
}