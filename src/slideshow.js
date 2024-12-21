import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './img-4';
// import Carousel from 'react-bootstrap/Carousel';
// import "./slideshow"

import teamMemb1 from './assets/images/team//church-of-the-king-j9jZSqfH5YI-unsplash.jpg';
import teamMemb2 from './assets/images/team/clark-tibbs-oqStl2L5oxI-unsplash.jpg';
import teamMemb3 from './assets/images/team/clement-chai-yrCp5O-x2uc-unsplash.jpg';

function Slideshow() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center " style={{ height: '75vh' }}>
                    <img
                        className="d-block h-75 w-75"
                        src={teamMemb1}
                        alt="First slide"
                    />
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center " style={{ height: '75vh' }}>
                    <img
                        className="d-block h-75 w-75"
                        src={teamMemb3}
                        alt="Second slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center " style={{ height: '75vh' }}>
                    <img
                        className="d-block h-75 w-75"
                        src={teamMemb2}
                        alt="Third slide"
                    />
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

export default Slideshow;