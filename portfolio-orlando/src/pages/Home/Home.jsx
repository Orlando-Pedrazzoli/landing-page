import { useEffect } from 'react';
import Typed from 'typed.js';
import cv_pdf from '../../assets/Orlando-Pedrazzoli-CV.pdf';
import orlando_img from '../../assets/foto-orlando.png';
import './Home.css';

function Home() {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['passionate about creating', 'Full-Stack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className='home'>
      <div className='home-content'>
        <h3>Hello, my name is</h3>
        <h1>Orlando Pedrazzoli</h1>
        <h3>
          and I'm{' '}
          <span
            style={{ letterSpacing: '1px' }}
            className='multiple-text'
          ></span>
        </h3>

        <div className='social-media'>
          <a
            href='https://www.linkedin.com/in/orlandopedrazzoli/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ '--i': 10 }}
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a
            href='https://github.com/Orlando-Pedrazzoli'
            target='_blank'
            rel='noopener noreferrer'
            style={{ '--i': 11 }}
          >
            <i className='bx bxl-github'></i>
          </a>
          <a
            href='https://www.facebook.com/orlando.pedrazzoli.7'
            target='_blank'
            rel='noopener noreferrer'
            style={{ '--i': 7 }}
          >
            <i className='bx bxl-facebook'></i>
          </a>
          <a
            href='https://twitter.com/OrlandoPedraDev'
            target='_blank'
            rel='noopener noreferrer'
            style={{ '--i': 8 }}
          >
            <i className='bx bxl-twitter'></i>
          </a>
          <a
            href='https://www.instagram.com/orlando_pedrazzoli/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ '--i': 9 }}
          >
            <i className='bx bxl-instagram-alt'></i>
          </a>
        </div>

        <a
          href={cv_pdf}
          download='Orlando-Pedrazzoli.pdf'
          style={{ '--i': 7 }}
          className='btn'
        >
          Download CV
        </a>
      </div>
      <div className='home-img'>
        <img src={orlando_img} alt='orlando' />
      </div>
    </section>
  );
}

export default Home;
