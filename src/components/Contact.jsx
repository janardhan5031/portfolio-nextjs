import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { gmail, logo, phone, send, sendHover, whatsapp } from '../assets';
import { contactDetails } from '../constants';

const phoneNumber = '9666528220';
const whatsappNumber = '9666528220'; // Replace with your WhatsApp number
const emailAddress = 'bjanardhan5031@gmail.com'; // Replace with your email
const emailSubject = 'Contact Request';
const emailBody = 'Hello, I would like to get in touch with you.';


const STYLES = {

  button: {
    // padding: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    // backgroundColor: '#007bff',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    // transition: 'background-color 0.3s ease',
  },

};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactDetails.phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    const customMessage = encodeURIComponent(`Hello Janardhan, I would like to get in touch with you regarding a development position.`);
    window.open(`https://wa.me/${contactDetails.whatsappNumber}?text=${customMessage}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(contactDetails.emailSubject)}&body=${encodeURIComponent(contactDetails.body)}`;
  };


  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[1] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        {/* <h3 className={styles.sectionHeadTextLight}>Contact.</h3> */}

        <div className='flex items-center justify-center gap-12'>
          <button style={STYLES.button} onClick={handlePhoneClick}>
            {/* 📞 Phone */}
            <img src={phone} alt="" className='w-16 h-16'/>
          </button>
          <button style={STYLES.button} onClick={handleWhatsAppClick}>
            {/* 💬 WhatsApp */}
            <img src={whatsapp} alt="" className='w-16 h-16'/>
          </button>
          <button style={STYLES.button} onClick={handleEmailClick}>
            {/* ✉️ Email */}
            <img src={gmail} alt="" className='w-16 h-16'/>
          </button>
        </div>
      </motion.div>
    </div>
  );
};



export default SectionWrapper(Contact, 'contact');
