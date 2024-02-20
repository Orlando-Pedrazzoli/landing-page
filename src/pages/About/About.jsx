import './About.css';
import lifestyle from '../../assets/GOPR1324.png';

const About = () => {
  return (
    <div className='about-container'>
      <div className='img-profile'>
        <img src={lifestyle} alt='' />
      </div>
      <div className='about-text'>
        <p>
          I am a Web Developer with a strong foundation in modern web
          technologies. As a recent graduate of a Full-Stack Web Developer
          program, I am excited to embark on a journey to contribute to
          innovative projects and make a positive impact on the digital world.
        </p>
      </div>
    </div>
  );
};

export default About;
