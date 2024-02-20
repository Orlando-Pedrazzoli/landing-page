import './About.css';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-text'>
          <h1>About Me</h1>
          <p>
            I am a Web Developer with a strong foundation in modern web
            technologies. As a recent graduate of a Full-Stack Web Developer
            program, I am excited to embark on a journey to contribute to
            innovative projects and make a positive impact on the digital world.
          </p>
        </div>
        <div className='chart'>
          <div className='bar'>
            <div className='label'>React</div>
            <div className='bar-inner' style={{ width: '600px' }}>
              80%
            </div>
          </div>
          <div className='bar'>
            <div className='label'>CSS</div>
            <div className='bar-inner' style={{ width: '550px' }}>
              75%
            </div>
          </div>
          <div className='bar'>
            <div className='label'>JavaScript</div>
            <div className='bar-inner' style={{ width: '500px' }}>
              70%
            </div>
          </div>
          <div className='bar'>
            <div className='label'>TypeScript</div>
            <div className='bar-inner' style={{ width: '450px' }}>
              60%
            </div>
          </div>
          <div className='bar'>
            <div className='label'>Node/Express</div>
            <div className='bar-inner' style={{ width: '400px' }}>
              50%
            </div>
          </div>
          <div className='bar'>
            <div className='label'>MongoDB</div>
            <div className='bar-inner' style={{ width: '350px' }}>
              45%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
