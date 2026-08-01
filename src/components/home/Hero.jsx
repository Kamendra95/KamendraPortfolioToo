import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import heroImage from '../../assets/images/KamendraDpToo.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Hi, I'm <span className="gradient-text">Kamendra..</span>
            </h1>
            <div className="typewriter">
              <h2>Mern Stack Developer</h2>
            </div>
            <p>
              Currently working as a MERN Stack Developer and continuously expanding my skills to become a Full Stack Developer with expertise in modern web technologies.
            </p>
            <div className="hero-buttons">
              <a href="contact" className="btn btn-primary">Hire Me</a>
              <a href="/projects" className="btn btn-secondary">View Work</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Kamendra95" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kamendra-kumar-9b1aa9314/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/KamendraK95" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="mailto:john@example.com">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src={heroImage} alt="John Doe" />
              <div className="experience-badge">
                <span>Fresher</span>
                {/* <small>Experience</small> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;