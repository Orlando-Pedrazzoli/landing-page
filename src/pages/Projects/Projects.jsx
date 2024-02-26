import React from 'react';
import './Projects.css';
import iron_img from '../../assets/ironsurfstore.png';
import ai_img from '../../assets/aigenerator.png';
import wheater_img from '../../assets/wheaterapp.png';
import todo_img from '../../assets/todo-list-img.png';

function Projects() {
  return (
    <div className='parent'>
      <div className='project-link'>
        <a
          href='https://iron-surf-store.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={iron_img} alt='' />
          <div className='overlay'>
            <p>MERN E-COMMERCE</p>
          </div>
        </a>
      </div>
      <div className='project-link'>
        <a
          href='https://liveweathercheck.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={wheater_img} alt='' />
          <div className='overlay'>
            <p>WEATHER APP</p>
          </div>
        </a>
      </div>
      <div className='project-link'>
        <a
          href='https://todolisthelp.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={todo_img} alt='' />
          <div className='overlay'>
            <p>TO DO LIST</p>
          </div>
        </a>
      </div>
      <div className='project-link'>
        <a
          href='https://orlandopedrazzoli.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={ai_img} alt='' />
          <div className='overlay'>
            <p>AI IMAGE GENERATOR</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
