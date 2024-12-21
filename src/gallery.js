import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/plugins/slider/css/owl.carousel.min.css';
import './assets/plugins/slider/css/owl.theme.default.css';
import './assets/css/style.css';
import Footer from './footer';

// Import images
import image08 from './assets/images/events/image_08.jpg';
import image06 from './assets/images/events/image_06.jpg';
import image04 from './assets/images/events/image_04.jpg';
import image05 from './assets/images/events/image_05.jpg';
import image07 from './assets/images/events/image_07.jpg';

const Gallery = () => {
    const handleFilterClick = (filter) => {
        const items = document.querySelectorAll('.gallery_product');
        items.forEach(item => {
            item.style.display = item.classList.contains(filter) || filter === 'all' ? 'block' : 'none';
        });
    };

    return (
        <div>


            <div id="portfolio" className="gallery">
                <div className="container">
                    <div className="row">
                        <div className="gallery-filter d-none d-sm-block">
                            <button className="btn btn-default filter-button" onClick={() => handleFilterClick('all')}>All</button>
                            <button className="btn btn-default filter-button" onClick={() => handleFilterClick('finance')}>Finance</button>
                            <button className="btn btn-default filter-button" onClick={() => handleFilterClick('digital-marketing')}>Digital Marketing</button>
                            <button className="btn btn-default filter-button" onClick={() => handleFilterClick('money')}>Money</button>
                            <button className="btn btn-default filter-button" onClick={() => handleFilterClick('business-analysis')}>Business Analysis</button>
                        </div>
                        <br />

                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter finance">
                            <img src={image08} alt="Finance" className="img-responsive" />
                        </div>

                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter digital-marketing">
                            <img src={image06} alt="Digital Marketing" className="img-responsive" />
                        </div>

                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter finance">
                            <img src={image04} alt="Finance" className="img-responsive" />
                        </div>

                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter business-analysis">
                            <img src={image05} alt="Business Analysis" className="img-responsive" />
                        </div>

                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter money">
                            <img src={image07} alt="Money" className="img-responsive" />
                        </div>

                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter money">
                            <img src={image08} alt="Money" className="img-responsive" />
                        </div>

                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter business-analysis">
                            <img src={image06} alt="Business Analysis" className="img-responsive" />
                        </div>

                        <div className="gallery_product col-lg-3 col-md-4 col-sm-3 col-xs-6 filter business-analysis">
                            <img src={image04} alt="Business Analysis" className="img-responsive" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
