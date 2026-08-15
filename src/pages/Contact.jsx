import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: '', text: '' });

    // Your EmailJS credentials - replace these with your own
    const SERVICE_ID = 'service_cw1hbd7'; // Get from EmailJS dashboard
    const TEMPLATE_ID = 'template_fkghoni'; // Get from EmailJS dashboard
    const PUBLIC_KEY = '_uO1lWefEaRMp9N2v'; // Get from EmailJS dashboard

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kamendra Kumar', // Your name
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('Email sent successfully!', response);
      setStatusMessage({ 
        type: 'success', 
        text: 'Thank you for your message! I will get back to you soon.' 
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatusMessage({ 
        type: 'error', 
        text: 'Failed to send message. Please try again later or contact me directly via email.' 
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Let's Connect</h1>
          <p className="contact-subtitle">
            I'm always interested in hearing about new opportunities and exciting projects.
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in touch</h3>
              <p>Feel free to reach out through any of these channels.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>sharmakamendra200@gmail.com</p>
                  </div>
                </div>
                {/* <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 1039580665</p>
                  </div>
                </div> */}
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>Sitamarahi, Bihar, India</p>
                  </div>
                </div>
              </div>
              
              <div className="social-connect">
                <h4>Connect with me</h4>
                <div className="social-icons">
                  <a href="https://github.com/Kamendra95" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/kamendra-kumar-9b1aa9314/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://x.com/KamendraK95" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                ></textarea>
              </div>
              
              {/* Status Message */}
              {statusMessage.text && (
                <div className={`status-message ${statusMessage.type}`}>
                  {statusMessage.text}
                </div>
              )}
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;