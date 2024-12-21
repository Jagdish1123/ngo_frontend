import React from 'react';

import './assets/css/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h2>About Us</h2>
            <p>
              At NGO, we're dedicated to making a difference. Our mission is to support and uplift communities in need, working towards a brighter future for all. Join us in our journey to spread kindness and make lasting impacts.
            </p>
            <p>
              With a focus on empowerment and sustainable development, our team works tirelessly to create opportunities and improve lives. Discover how you can be a part of our story and contribute to meaningful change.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2>Useful Links</h2>
            <ul className="list-unstyled link-list">
              <li><a href="#/about">About Us</a><i className="fa fa-angle-right"></i></li>
              <li><a href="#/projects">Our Projects</a><i className="fa fa-angle-right"></i></li>
              <li><a href="#/volunteer">Volunteer Opportunities</a><i className="fa fa-angle-right"></i></li>
              <li><a href="#/gallery">Gallery</a><i className="fa fa-angle-right"></i></li>
              <li><a href="#/contact">Contact Us</a><i className="fa fa-angle-right"></i></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 map-img">
            <h2>Contact Us</h2>
            <address className="md-margin-bottom-40">
              Helping Hands NGO<br />
              Phone: +91 9159669599<br />
              Email: <a href="mailto:info@helpinghandsngo.org">info@ngo.org</a><br />
              Web: <a href="https://www.y4d.ngo/">www.ngo.org</a>
            </address>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>© 2024 NGO. All rights reserved. | Powered by <a href="https://www.y4d.ngo/">Compassionate Hearts</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
