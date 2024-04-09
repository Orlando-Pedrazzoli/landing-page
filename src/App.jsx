import Porfile from './assets/Photo.png';
import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';
import ArrowDown from './assets/arrow-down.svg';
import cv_pdf from './assets/orlando-resume.pdf';
import { useEffect, useState } from 'react';

function NewLanding() {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onPageScroll);
    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
  }, []);

  return (
    <div className='font-poppins  max-w-6xl m-auto relative'>
      <header>
        <div className='container flex justify-between h-20 mx-auto max-w-6xl bg-black'>
          <a
            rel='noopener noreferrer'
            href='#'
            aria-label='Back to homepage'
            className='flex items-center p-2'
          >
            <p className='font-bold text-sm:text-lg ml-2 md:ml-0 md:ml-2'>
              ORLANDO PEDRAZZOLI
            </p>
          </a>
          <button
            className='flex justify-end p-6 md:hidden'
            onClick={toggleMenu}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
          <ul
            className={`items-center  md:items-stretch md:space-x-3 md:flex ${
              showMenu ? 'flex-col' : 'hidden md:flex'
            } ${!showMenu ? ' justify-center' : ''} ${showMenu ? 'mt-4' : ''}`}
          >
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#projects'
                className='flex items-center px-4'
              >
                Projects
              </a>
            </li>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#technologies'
                className='flex items-center px-4'
              >
                Technologies
              </a>
            </li>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#aboutme'
                className='flex items-center px-4'
              >
                About me
              </a>
            </li>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#contact'
                className='flex items-center px-4'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className='relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12'>
        {/* Intro/Banner section */}
        <section>
          <div className='container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left'>
            <div>
              <h2 className='mt-10 font-bold text-3xl sm:text-4xl'>
                Hello, I'm Orlando,
              </h2>
              <div>
                <h2 className='font-bold text-3xl mt-1 sm:mt-0 sm:text-4xl gradiant-text sm:gradiant-text-static'>
                  Full-Stack developer
                </h2>
              </div>
              <div>
                <p className='mt-4 text-gray-400 mr-6  '>
                  I am a Web Developer with a strong foundation in modern web
                  technologies. <br /> As a recent graduate of a Full-Stack Web
                  Developer program, I am excited to contribute to innovative
                  projects and make a positive impact on the digital world.
                </p>
                {/* Wrapper div for centering buttons on small screens */}
                <div className='flex flex-col items-center sm:items-start'>
                  <a href={cv_pdf} download>
                    <button className='mt-12 flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-t from-blue-500 to-cyan-500 px-5 sm:px-7 py-2 sm:py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-sm sm:text-base'>
                      Download resume
                    </button>
                  </a>
                  <a
                    href='https://github.com/Orlando-Pedrazzoli'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='mt-6 flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-700 to-gray-800 px-5 sm:px-7 py-2 sm:py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-white hover:border-gray-800 hover:from-black hover:to-gray-900 text-sm sm:text-base'>
                      <svg
                        viewBox='0 0 24 24'
                        height='24'
                        width='24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill='#FFFFFF'
                          d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                        ></path>
                      </svg>
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='relative flex justify-center'>
              <div className='after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40  '>
                <img
                  src={Porfile}
                  className='rounded-lg relative z-10 w-[280px] m-auto mt-8 sm:mt-0 sm:w-[600px]'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id='projects'>
          <div className='container m-auto px-4 sm:py-12'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex flex-col sm:flex-row gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={Project2} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>Driver Deluxe</h3>
                <p className='text-gray-400 text-sm mt-2'>
                  Driver Deluxe is an app developed for Uber drivers or any
                  other app-based drivers. Built on the MERN (MongoDB,
                  Express.js, React, Node.js) stack, it offers discounts on
                  services such as massage and vehicle maintenance.
                  Additionally, it provides access to a real-time news API,
                  seamlessly integrates the Google Maps API across all services,
                  and features a catalog of places to visit around Portugal.
                </p>
                <div className='flex mt-12 gap-2'>
                  <a
                    href='https://driver-deluxe.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center flex items-center justify-center'
                  >
                    Live preview
                  </a>
                  <a
                    href='https://github.com/Orlando-Pedrazzoli/driver-deluxe'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center flex items-center justify-center'
                  >
                    Checkout GitHub
                  </a>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={Project1} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>
                  Iron Surf Store E-commerce
                </h3>
                <p className='text-gray-400 text-sm mt-2'>
                  Iron Surf Store is an ecommerce platform for surf enthusiasts.
                  Built on the MERN (MongoDB, Express.js, React, Node.js) stack,
                  it offers a shopping experience for purchasing top-quality
                  surfing accessories. The platform not only showcases a diverse
                  range of products but also integrates real-time weather map
                  API, enabling users to make informed decisions based on
                  current weather conditions.
                </p>
                <div className='flex gap-2 mt-12'>
                  <a
                    href='https://iron-surf-store.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center flex items-center justify-center'
                  >
                    Live preview
                  </a>
                  <a
                    href='https://github.com/Orlando-Pedrazzoli/my-store'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center flex items-center justify-center'
                  >
                    Checkout GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row  gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={Project3} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>Weather App</h3>
                <p className='text-gray-400 text-sm mt-2'>
                  Introducing Weather App, a React-based solution for real-time
                  weather updates. With its sleek design and precise forecasts,
                  Weather App keeps you informed and prepared for any weather
                  conditions. Stay ahead with Weather App.
                </p>
                <div className='flex gap-4 mt-12'>
                  <a
                    href='https://liveweathercheck.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center flex items-center justify-center'
                  >
                    Live preview
                  </a>
                  <a
                    href='https://github.com/Orlando-Pedrazzoli/weather'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center flex items-center justify-center'
                  >
                    Checkout GitHub
                  </a>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={Project4} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>To-Do-List</h3>
                <p className='text-gray-400 text-sm mt-2'>
                  To-Do-List, a streamlined task management app built with
                  React. With its clean interface and intuitive features,
                  To-Do-List helps you stay organized and focused on your
                  priorities. Simplify your tasks and boost productivity with
                  To-Do-List.
                </p>
                <div className='flex gap-2 mt-12'>
                  <a
                    href='https://todolisthelp.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center flex items-center justify-center'
                  >
                    Live preview
                  </a>
                  <a
                    href='https://github.com/Orlando-Pedrazzoli/to-do-list'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center flex items-center justify-center'
                  >
                    Checkout GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className='m-8 py-10' id='technologies'>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Frontend Development</h2>
            <div className='mt-8'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>HTML</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>
                    CSS (Tailwind CSS, Bootstrap, Material-UI, Ant Design)
                  </h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>
                    JavaScript | TypeScript | JQuery
                  </h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>

              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>React | React Native</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Responsive Web Design</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
            </div>
          </div>
          <div className='container mt-20 m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Backend Development</h2>
            <div className='mt-8'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Node.js</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Express.js</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>MongoDB</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
            </div>
          </div>
          <div className='container mt-20 m-auto px-4'>
            <h2 className='text-2xl font-semibold'>
              Version Control and Collaboration
            </h2>
            <div className='mt-8'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Git</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>GitHub</h2>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}

        <section className=' py-8' id='experience'>
          <div className=' container mt-16 mx-auto px-4'>
            <h2 className='ml-8 text-2xl font-semibold'>Experience</h2>
            <div className='mt-12 space-y-8'>
              <div className='timeline-item pr-10'>
                <div className='pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='left-0 text-lg font-semibold mb-2'>
                    Sep 2023 - Present
                  </h3>
                  <p>
                    Career transition
                    <br />
                    Lisbon
                    <br />
                    In the process of switching careers to become a Full Stack
                    Developer. Eager to learn and apply modern technologies to
                    create user-friendly web applications. With a background in
                    JavaScript, React, MongoDB, ExpressJS, Node, HTML, CSS, Git,
                    GitHub and API, excited to contribute to dynamic teams and
                    take on new challenges in the tech industry.
                  </p>
                </div>
              </div>
              <div className='timeline-item pr-10'>
                <div className='pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='left-0 text-lg font-semibold mb-2'>
                    Mar 2010 - Sep 2023
                  </h3>
                  <p>
                    Founder
                    <br />
                    Elite Surfing · Self-employed
                    <br />
                    Brazil · Remote
                    <br />
                    The company's production rights were transferred to a
                    third-party entity concurrent with my relocation to
                    Portugal. Previously I was responsible for:
                    <br />
                    - led the company's strategic vision and growth in the
                    surfing industry.
                    <br />
                    - supervise end-to-end operations.
                    <br />
                    - drive innovative product development and management.
                    <br />- market expansion initiatives, fostering a culture of
                    excellence.
                  </p>
                </div>
              </div>
              <div className='timeline-item pr-10'>
                <div className='pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className=' left-0 text-lg font-semibold mb-2'>
                    Nov 2005 - Jan 2010
                  </h3>
                  <p>
                    Production Manager
                    <br />
                    PLP Importação e Exportação Ltda · Full-time
                    <br />
                    São Paulo e Região, Brasil · On-site
                    <br />
                    The company was responsible for importing, distributing, and
                    manufacturing sports accessories for brands: FCS, Creatures
                    of Leisure, Gorilla Grip, and Bullys.
                    <br />
                    As a production manager, I was responsible for:
                    <br />
                    - The entire production cycle for the Bullys brand, from
                    inception to delivery.
                    <br />
                    - Recruitment processes.
                    <br />
                    - Creation of a comprehensive range of surfing accessories,
                    encompassing covers, leashes, decks, and a variety of
                    related items.
                    <br />
                    - Productivity reports.
                    <br />- Production costs.
                  </p>
                </div>
              </div>
              <div className='timeline-item pr-10'>
                <div className='pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='left-0 text-lg font-semibold mb-2'>
                    Jan 2000 - Jul 2005
                  </h3>
                  <p>
                    Chief Executive Officer
                    <br />
                    International Surfing Company South América Ltda. ·
                    Self-employed
                    <br />
                    São Paulo e Região, Brasil · Hybrid
                    <br />
                    - License for the commercialization of the Australian brand
                    WET DREAMS (surf accessories), exclusively throughout South
                    America.
                    <br />- Importation and distribution, operating along the
                    entire coastal region of the Brazilian territory
                  </p>
                </div>
              </div>
              <div className='timeline-item pr-10'>
                <div className='pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='left-0 text-lg font-semibold mb-2'>
                    Feb 1999 - Nov 1999
                  </h3>
                  <p>
                    General Assistant
                    <br />
                    Wet Dreams Austrália · Full-time
                    <br />
                    Perth e Região, Austrália · On-site
                    <br />
                    General Assistant of the entire production line and quality
                    control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className='max-w-5xl m-auto mt-16 mb-16 py-6 bg-black text-white sm:dark:bg-gray-100 sm:dark:text-gray-900'
          id='contact'
        >
          <div className='container grid max-w-5xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x'>
            <div className='py-6 md:py-0 md:px-6'>
              <h1 className='text-3xl font-bold'>Get in touch</h1>
              <p className='pt-2 pb-4'>
                Fill in the form to start a conversation
              </p>
              <div className='space-y-4'>
                <p className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 mr-2 sm:mr-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span>Lisbon, Portugal</span>
                </p>
                <p className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 mr-2 sm:mr-6'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z'></path>
                  </svg>
                  <span>+351 912164220</span>
                </p>
                <p className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 mr-2 sm:mr-6'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                  </svg>
                  <span>pedrazzoliorlando@gmail.com</span>
                </p>
              </div>
            </div>
            <form
              novalidate=''
              className='flex m-6 flex-col py-6 space-y-6 md:py-0 md:px-6'
            >
              <label className='block'>
                <span className='mb-1'>Name</span>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='block w-full p-2 py-1 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100'
                />
              </label>
              <label className='block'>
                <span className='mb-1'>Email address</span>
                <input
                  type='email'
                  placeholder='Your email'
                  className='block w-full p-2 py-1 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100'
                />
              </label>
              <label className='block'>
                <span className='mb-1'>Message</span>
                <textarea
                  rows='3'
                  className='block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100'
                ></textarea>
              </label>
              <button
                type='button'
                className='self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-blue-600 dark:text-gray-50 focus:dark:ring-blue-600 hover:dark:ring-blue-600'
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className='m-6'>
        <div className='container m-auto flex justify-between px-4 py-6'>
          <div>
            <p className='text-gray-300 text-sm'>Copyright @ 2024</p>
          </div>
          <div>
            <ul className='flex  gap-6'>
              <a
                href='https://www.linkedin.com/in/orlandopedrazzoli/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <section class='flex justify-center items-center'>
                  <button class='group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1.1em'
                      viewBox='0 0 512 512'
                      stroke-width='0'
                      fill='currentColor'
                      stroke='currentColor'
                      class='w-5 h-5'
                    >
                      <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z'></path>
                    </svg>
                    <span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700'>
                      Linkedin
                    </span>
                  </button>
                </section>
              </a>
              <a
                href='https://www.facebook.com/orlando.pedrazzoli.7'
                target='_blank'
                rel='noopener noreferrer'
              >
                <section class=' flex justify-center items-center'>
                  <button class='group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1.1em'
                      viewBox='0 0 448 512'
                      stroke-width='0'
                      fill='currentColor'
                      stroke='currentColor'
                      class='w-5'
                    >
                      <path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'></path>
                    </svg>
                    <span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700'>
                      Facebook
                    </span>
                  </button>
                </section>
              </a>
              <a
                href='https://twitter.com/OrlandoPedraDev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <section class='flex justify-center items-center'>
                  <button class='group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                      stroke-width='0'
                      fill='currentColor'
                      stroke='currentColor'
                    >
                      <path d='M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z'></path>
                    </svg>
                    <span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700'>
                      x
                    </span>
                  </button>
                </section>
              </a>
              <a
                href='https://www.instagram.com/orlando_pedrazzoli/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <section class='flex justify-center items-center'>
                  <button class='group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1.2em'
                      viewBox='0 0 24 24'
                      stroke-width='1'
                      fill='currentColor'
                      stroke='currentColor'
                      class='w-5'
                    >
                      <path d='M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z'></path>
                    </svg>
                    <span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700'>
                      Instagram
                    </span>
                  </button>
                </section>
              </a>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <div className='hidden sm:inline-block'>
          <button
            className='fixed block right-8 bottom-0 w-24 '
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={ArrowDown} />
          </button>
        </div>
      )}
    </div>
  );
}
export default NewLanding;
