import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/plugins/slider/css/owl.carousel.min.css';
import './assets/plugins/slider/css/owl.theme.default.css';
import './assets/css/style.css';
import Footer from './footer';


// images
import missionImg from './assets/images/misin.jpg';
import visionImg from './assets/images/vision.jpg';

const AboutUs = () => {

  
  // React.useEffect(() => {
  //   const link1 = document.createElement('link');
  //   link1.rel = 'shortcut icon';
  //   link1.href = './assets/images/fav.png';
  //   link1.type = 'image/x-icon';
  //   document.head.appendChild(link1);

  //   const link2 = document.createElement('link');
  //   link2.rel = 'stylesheet';
  //   link2.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap';
  //   document.head.appendChild(link2);

  //   const link3 = document.createElement('link');
  //   link3.rel = 'shortcut icon';
  //   link3.href = './assets/images/fav.jpg';
  //   document.head.appendChild(link3);

  //   return () => {
  //     document.head.removeChild(link1);
  //     document.head.removeChild(link2);
  //     document.head.removeChild(link3);
  //   };
  // }, []);

  return (
    <div>
      {/* <header className="container-fluid">
        <div className="header-top">
          <div className="container">
            <div className="row col-det">
              <div className="col-lg-6 d-none d-lg-block">
                <ul className="ulleft">
                  <li>
                    <i className="far fa-envelope"></i>
                    sales@smarteyeapps.com
                    <span>|</span>
                  </li>
                  <li>
                    <i className="fas fa-phone-volume"></i>
                    +876 987 666 5433
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 folouws">
                <ul className="ulright">
                  <li>
                    <small>Follow Us</small>:
                  </li>
                  <li>
                    <i className="fab fa-facebook-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
                <button className="btn btn-sm btn-success">Join Us</button>
                <button className="btn btn-sm btn-default">Donate</button>
              </div>
            </div>
          </div>
        </div>
        <div id="menu-jk" className="header-bottom">
          <div className="container">
            <div className="row nav-row">
              <div className="col-lg-3 col-md-12 logo">
                <a href="index.html">
                  <img src="./assets/images/logo.jpg" alt="Logo" />
                </a>
                <a data-toggle="collapse" data-target="#menu" href="#menu">
                  <i className="fas d-block d-lg-none small-menu fa-bars"></i>
                </a>
              </div>
              <div id="menu" className="col-lg-9 col-md-12 d-none d-lg-block nav-col">
                <ul className="navbad">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about_us.html">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="gallery.html">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact_us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      

      {/* <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>About Our Charity</h2>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i> About Us
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="about-us container-fluid">
        <div className="container">
          <div className="row natur-row no-margin w-100">
            <div className="text-part col-md-6">
              <h2>About Our Charity</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius faucibus ligula non congue. Suspendisse at pretium massa, sit amet vulputate nibh. Nam posuere eros dolor. Donec vel arcu sagittis, pretium nisl.</p>
              <p>Cras faucibus laoreet nibh, sit amet tincidunt leo mollis in. Etiam eu mauris metus. Nulla facilisi. Etiam vestibulum, nisi et convallis elementum, leo orci aliquam metus, id posuere massa neque vitae arcu.</p>
              <p>Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et. Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus.</p>
            </div>
            <div className="image-part col-md-6">
              <div className="about-quick-box row">
                <div className="col-md-6">
                  <div className="about-qcard">
                    <i className="fas fa-user"></i>
                    <p>Become a Volunteer</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <i className="fas fa-search-dollar red"></i>
                    <p>Quick Fundraise</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <i className="fas fa-donate yell"></i>
                    <p>Give Donation</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <i className="fas fa-hands-helping blu"></i>
                    <p>Help Someone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid mission-vision">
        <div className="container">
          <div className="row mission">
            <div className="col-md-6 mv-det">
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
            </div>
            <div className="col-md-6 mv-img">
              {/* <img src="./assets/images/misin.jpg" alt="Mission" /> */}
              <img src={missionImg} alt="Mission" />
            </div>
          </div>
          <div className="row vision">
            <div className="col-md-6 mv-img">
              {/* <img src="./assets/images/vision.jpg" alt="Vision" /> */}
              <img src={visionImg} alt="Vision" />
            </div>
            <div className="col-md-6 mv-det">
              <h1>Our Vision</h1>
              <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui.</p>
            </div>
          </div>
        </div>
      </section>
     

     {/* footer section  */}
      <Footer/>


      {/* <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>About Us</h2>
              <p>
                Smart Eye is a leading provider of information technology, consulting, and business process services. Our dedicated employees offer strategic insights, technological expertise and industry experience.
              </p>
              <p>We focus on technologies that promise to reduce costs, streamline processes and speed time-to-market, backed by our strong quality processes and rich experience managing global projects.</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h2>Useful Links</h2>
              <ul className="list-unstyled link-list">
                <li><a href="#/about">About us</a><i className="fa fa-angle-right"></i></li>
                <li><a href="#/portfolio">Portfolio</a><i className="fa fa-angle-right"></i></li>
                <li><a href="#/products">Latest jobs</a><i className="fa fa-angle-right"></i></li>
                <li><a href="#/gallery">Gallery</a><i className="fa fa-angle-right"></i></li>
                <li><a href="#/contact">Contact us</a><i className="fa fa-angle-right"></i></li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 map-img">
              <h2>Contact Us</h2>
              <address className="md-margin-bottom-40">
                Smart Eye Apps<br />
                Phone: +91 9159669599<br />
                Email: <a href="mailto:info@smarteyeapps.com">info@smarteyeapps.com</a><br />
                Web: <a href="www.smarteyeapps.com">www.smarteyeapps.com</a>
              </address>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>© 2024 Your Company. All rights reserved. | Design by <a href="#">SmartEye Apps</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default AboutUs;
