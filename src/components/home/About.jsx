import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    backend: ['Node.js', 'Express.js', 'Python', 'Java', 'JavaScript'],
    database: ['MongoDB', 'MySQL'],
    tools: ['Eclips', 'VSCode', 'Git', 'Github',]
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate MERN Stack Developer with a strong interest in building modern, responsive web applications.
              </p>
              <p>
                I am continuously learning new technologies and working toward becoming a skilled Full Stack Developer capable of developing scalable, end-to-end software solutions.
              </p>
              <div className="achievements">
                <div className="achievement">
                  <span className="number">5+</span>
                  <span className="label">Projects Completed</span>
                </div>
                <div className="achievement">
                  <span className="number">2+</span>
                  <span className="label">Happy Clients</span>
                </div>
                <div className="achievement">
                  {/* <span className="number">0</span> */}
                  {/* <span className="label">Fresher</span> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon"><FaCode /></div>
              <h4>Frontend</h4>
              <ul>
                {skills.frontend.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon"><FaServer /></div>
              <h4>Backend</h4>
              <ul>
                {skills.backend.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon"><FaDatabase /></div>
              <h4>Database</h4>
              <ul>
                {skills.database.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon"><FaCloud /></div>
              <h4>DevOps & Tools</h4>
              <ul>
                {skills.tools.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;