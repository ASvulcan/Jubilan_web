import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-about">
        <h5>About Us</h5>
        <p>
          We provide the best services to help your business grow. Connect with us on social media!
        </p>

        <div className="social-icons">  
          <a href="#!" aria-label="Facebook"><FaFacebook /></a>
          <a href="#!" aria-label="Twitter"><FaTwitter /></a>
          <a href="#!" aria-label="Instagram"><FaInstagram /></a>
          <a href="#!" aria-label="LinkedIn"><FaLinkedin /></a>
          
          {/* Whatsapp added here - add this down her  href ="https://wa.me/1234567890 */}
          <a 
            href="#!" 
            aria-label="WhatsApp"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Vision">Services</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h5>Contact</h5>
        <ul>
          <li>Email:  jubilantds@gmail.com</li>
          {/* <li>Phone: +123 456 7890</li>
          <li>Address: 123 Main St, City</li> */}
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 YourCompany. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
