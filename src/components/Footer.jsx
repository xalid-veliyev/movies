import React from 'react';

const Footer = () => {
  return (
    <div className='big-footer'>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor est mauris, non vehicula turpis dapibus eget. Aliquam venenatis, justo id euismod finibus.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <ul>
              <li>Ünvan: 123 Şamil Kamilov, Bakı, Azərbaycan</li>
              <li>Telefon: (055) 621-0248</li>
              <li>Email: vxalid@list.ru</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Bizimlə əlaqə</h3>
            <ul className="social-media">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 Your Film Website. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
  );
};

export default Footer;
