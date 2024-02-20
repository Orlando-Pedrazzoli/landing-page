import { useState } from 'react';
import './Contact.css';
import arrow_icon from '../../assets/arrow_icon.png';
import right_img from '../../assets/pexels.png';

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');

  const onSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '27b5d6fd-c619-4497-b9cc-51e8688d8576');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());

    if (res.success) {
      const name = formData.get('name');
      setUserName(name);
      setShowModal(true);
      event.target.reset();
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='contact-container'>
      <form onSubmit={onSubmit} action='' className='contact-left'>
        <div className='contact-left-title'>
          <h2>Get in contact</h2>
          <hr />
        </div>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          className='contact-inputs'
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          className='contact-inputs'
          required
        />
        <textarea
          name='message'
          placeholder='Your Message'
          className='contact-inputs'
          required
        ></textarea>
        <button type='submit'>
          Submit <img src={arrow_icon} alt='' />{' '}
        </button>
      </form>
      <div className='contact-right'>
        <img src={right_img} alt='' />
      </div>

      {showModal && (
        <div className='modal-bg' onClick={closeModal}>
          <div className='modal'>
            <h2>
              Thank you, {userName}, for your message. I'll get back to you
              soon!
            </h2>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
