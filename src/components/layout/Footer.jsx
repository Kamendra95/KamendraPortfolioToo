import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kamendra Kumar</h3>
            <p>Mern Stack Developer creating amazing web experiences.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 sharmakamendra200@gmail.com</p>
            <p>📍 Sitamarhi, Bihar, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Kamendra Kumar All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;