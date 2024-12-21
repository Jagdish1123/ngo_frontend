import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './assets/css/style.css';
import Footer from './footer';
import "./contact.css"
import "./payment.css"

// images
import image08 from './assets/images/events/image_08.jpg';
import image06 from './assets/images/events/image_06.jpg';
import image04 from './assets/images/events/image_04.jpg';
import image05 from './assets/images/events/image_05.jpg';
import image07 from './assets/images/events/image_07.jpg';
const Shape = () => {
    return (
        <svg
            className="position-absolute top-0 end-0 d-none d-sm-block"
            width="544"
            height="495"
            viewBox="0 0 544 495"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="336.426"
                y="-167.539"
                width="150"
                height="526"
                rx="87.5"
                transform="rotate(39.7614 336.426 -167.539)"
                fill="#FFC107"
            />
            <rect
                x="523.426"
                y="-89.5391"
                width="150"
                height="526"
                rx="87.5"
                transform="rotate(39.7614 523.426 -89.5391)"
                fill="#2F80ED"
            />
            <rect
                x="721.426"
                y="-21.5391"
                width="150"
                height="526"
                rx="87.5"
                transform="rotate(39.7614 721.426 -21.5391)"
                fill="#FF774D"
            />
        </svg>
    );
};
const Shape1 = () => (
    <svg
        className="payment-shape-1"
        width="765"
        height="352"
        viewBox="0 0 765 352"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M-233.567 243.494C-233.567 243.494 -192.563 139.13 -133.479 118.445C-84.3687 101.251 -48.7519 155.405 -1.18896 134.314C47.9318 112.533 25.2003 38.0036 76.0346 20.5795C128.975 2.43373 155.956 79.8324 210.867 69.0092C275.621 56.2461 267.911 -15.1528 329.258 -39.4731C391.104 -63.9909 432.024 -44.6718 497.161 -58.2395C581.608 -75.8293 691.003 -208 691.003 -208"
            stroke="var(--ezy-theme-color)"
            strokeWidth="2"
        />
        <path
            d="M-198.142 351.446C-198.142 351.446 -215.983 270.082 -156.926 249.4C-107.838 232.209 -37.0917 306.522 10.4495 285.434C59.5477 263.655 76.7688 193.419 127.58 175.997C180.496 157.854 191.203 187.805 246.09 176.984C310.815 164.224 276.625 71.699 337.945 47.3818C399.762 22.8672 492.184 91.1712 557.292 77.6067C641.701 60.0211 726.004 -99.9998 726.004 -99.9998"
            stroke="var(--ezy-theme-color)"
            strokeOpacity="0.37"
            strokeWidth="2"
            strokeDasharray="4 2.5"
        />
    </svg>
);
const Services = () => {
    const navigate = useNavigate(); 

    const handleDonateClick = () => {
      navigate('/submit'); 
    };
    return (
        <div>
            {/* Page Title */}
            {/* <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Popular Causes</h2>
            <ul>
              <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
              <li><i className="fas fa-angle-double-right"></i> About Us</li>
            </ul>
          </div>
        </div>
      </div> */}

            {/* Events Section */}
            <Shape/>
          
            <section className="events">
                <div className="container">
                    <div className="event-ro row">
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                {/* Uncomment and use the imported image */}
                                <img src={image08} alt="Event 1" />
                                {/* <img src="/assets/images/events/image_08.jpg" alt="Event 1" /> */}
                                <h4>Child Education </h4>
                               
                                <p className="desic">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                                <button onClick={handleDonateClick} className="btn btn-success btn-sm">Apply Now!</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                {/* Uncomment and use the imported image */}
                                <img src={image06} alt="Event 2" />
                                {/* <img src="/assets/images/events/image_06.jpg" alt="Event 2" /> */}
                                <h4>Sports</h4>
                               
                                <p className="desic">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                                <button className="btn btn-success btn-sm">Apply Now!</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                {/* Uncomment and use the imported image */}
                                <img src={image04} alt="Event 3" />
                                {/* <img src="/assets/images/events/image_04.jpg" alt="Event 3" /> */}
                                <h4>Healthcare</h4>
                               
                                <p className="desic">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                                <button className="btn btn-success btn-sm">Apply Now!</button>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                {/* Uncomment and use the imported image */}
                                <img src={image05} alt="Event 4" />
                                {/* <img src="/assets/images/events/image_05.jpg" alt="Event 4" /> */}
                                <h4>Child Education in Africa</h4>
                               
                                <p className="desic">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                                <button className="btn btn-success btn-sm">Apply Now!</button>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                {/* Uncomment and use the imported image */}
                                <img src={image07} alt="Event 5" />
                                {/* <img src="/assets/images/events/image_07.jpg" alt="Event 5" /> */}
                                <h4>Child Education in Africa</h4>
                               
                                <p className="desic">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                                <button className="btn btn-success btn-sm">Apply Now!</button>
                            </div>


                        </div>            <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                {/* Uncomment and use the imported image */}
                                <img src={image07} alt="Event 5" />
                                {/* <img src="/assets/images/events/image_07.jpg" alt="Event 5" /> */}
                                <h4>Child Education in Africa</h4>
                               
                                <p className="desic">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                                <button className="btn btn-success btn-sm">Apply Now!</button>
                            </div>
                        </div>
                     
                    </div>
                   
                </div>
               
            </section>
          
            <Footer />
        </div>
    );
};

export default Services;
