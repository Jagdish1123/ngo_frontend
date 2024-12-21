import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/plugins/slider/css/owl.carousel.min.css';
import './assets/plugins/slider/css/owl.theme.default.css';
import './assets/css/style.css';
import Footer from './footer';
import "./payment.css"
// Import images
import image01 from './assets/images/events/image_01.jpg';
import image02 from './assets/images/events/image_02.jpg';
import image03 from './assets/images/events/image_03.jpg';
import image04 from './assets/images/events/image_04.jpg';
import image05 from './assets/images/events/image_05.jpg';
import image06 from './assets/images/events/image_06.jpg';

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

const Blog = () => {
    return (
        <div>
            <Shape/>
            <section className="our-blog">
                <div className="container">
                    <div className="blog-row row">
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog">
                                <figure>
                                    <img src={image01} alt="Blog 1" />
                                </figure>
                                <div className="blog-detail">
                                    <small>By Admin | August 10 2018</small>
                                    <h4>Methods of Recuirtments</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
                                    </p>
                                    <div className="link">
                                        <a href="#">Read more</a>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog">
                                <figure>
                                    <img src={image02} alt="Blog 2" />
                                </figure>
                                <div className="blog-detail">
                                    <small>By Admin | August 10 2018</small>
                                    <h4>Methods of Recuirtments</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
                                    </p>
                                    <div className="link">
                                        <a href="#">Read more</a>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog">
                                <figure>
                                    <img src={image03} alt="Blog 3" />
                                </figure>
                                <div className="blog-detail">
                                    <small>By Admin | August 10 2018</small>
                                    <h4>Methods of Recuirtments</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
                                    </p>
                                    <div className="link">
                                        <a href="#">Read more</a>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog">
                                <figure>
                                    <img src={image04} alt="Blog 4" />
                                </figure>
                                <div className="blog-detail">
                                    <small>By Admin | August 10 2018</small>
                                    <h4>Methods of Recuirtments</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
                                    </p>
                                    <div className="link">
                                        <a href="#">Read more</a>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog">
                                <figure>
                                    <img src={image05} alt="Blog 5" />
                                </figure>
                                <div className="blog-detail">
                                    <small>By Admin | August 10 2018</small>
                                    <h4>Methods of Recuirtments</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
                                    </p>
                                    <div className="link">
                                        <a href="#">Read more</a>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog">
                                <figure>
                                    <img src={image06} alt="Blog 6" />
                                </figure>
                                <div className="blog-detail">
                                    <small>By Admin | August 10 2018</small>
                                    <h4>Methods of Recuirtments</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.
                                    </p>
                                    <div className="link">
                                        <a href="#">Read more</a>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    );
};

export default Blog;
