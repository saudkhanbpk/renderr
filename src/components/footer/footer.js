import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import './Footer.css'; // Create a CSS file for styling
import logo from '../../logo.png'


function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="sa">
        <div className="row">
          <div className="col-md-2">
            <img src={logo} alt="Logo" /> {/* Replace with your logo */}
          </div>
          <div className="center col-md-8">
            <ul className="navigation">
            <li><a href="#">For Designer</a></li>
              <li><a href="#">Find Telent</a></li>
              <li><a href="#">Inspiration</a></li>
              <li><a href="#">Learn Design</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
          <div className=" col-md-2">
            <div className="social-icons">
              <a href="#">
                <FaFacebook/>
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p className='copy'>© 2023 Renderr. All rights reserved..</p>
      </div>
    </footer>
  );
}

export default Footer;
