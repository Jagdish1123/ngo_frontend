import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './payment.css';
import { useNavigate } from 'react-router-dom'; 
const Shape0 = () => (
	<>
		<svg
			className="ezy__service20-shape-one position-absolute"
			width="405"
			height="626"
			viewBox="0 0 405 626"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="-302.65"
				y="296.986"
				width="433.92"
				height="140"
				rx="73.8464"
				transform="rotate(-33.796 -302.65 296.986)"
				fill="#7434F8"
				fillOpacity="0.5"
			/>
			<rect
				x="-315"
				y="502.403"
				width="666.584"
				height="140"
				rx="73.8464"
				transform="rotate(-33.796 -315 502.403)"
				fill="#FAA515"
				fillOpacity="0.5"
			/>
		</svg>
		<svg
			className="ezy__service20-shape-two position-absolute end-0"
			width="340"
			height="658"
			viewBox="0 0 495 778"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="389"
				cy="389"
				r="389"
				fill="var(--ezy-theme-color)"
				fillOpacity="0.19"
			/>
		</svg>
	</>
);

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

const Shape2 = () => (
  <svg
    className="payment-shape-2"
    width="765"
    height="616"
    viewBox="0 0 765 616"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1413_1802)">
      <path
        d="M2 308C2 138.449 139.449 1 309 1H763V615H309C139.449 615 2 477.551 2 308V308Z"
        fill="var(--ezy-theme-color)"
      />
      <path
        d="M88.3318 766.511C88.3318 766.511 80.9409 654.626 125.572 610.73C162.67 574.244 217.971 608.05 252.008 568.698C287.159 528.058 234.829 470.327 273.387 432.897C313.543 393.918 370.941 452.433 416.001 419.237C469.138 380.091 431.731 318.789 476.86 270.64C522.356 222.1 567.607 222.135 620.748 182.098C689.642 130.192 732.267 -35.9998 732.267 -35.9998"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M150.839 825.443C150.839 825.443 100.019 759.446 144.628 715.563C181.706 679.089 277.378 716.159 311.396 676.819C346.528 636.19 332.169 565.313 370.708 527.896C410.844 488.929 433.295 511.459 478.334 478.276C531.447 439.145 461.081 370.018 506.186 321.884C551.658 273.359 664.378 295.754 717.494 255.732C786.355 203.846 794.41 23.1564 794.41 23.1564"
        stroke="#EEEDEB"
        strokeOpacity="0.37"
        strokeWidth="2"
        strokeDasharray="4 2.5"
      />
    </g>
  </svg>
);

const Payment = () => {
  const navigate = useNavigate(); 

  const handleDonateClick = () => {
    navigate('/pay'); 
  };

  return (
    <section className="payment">
      <Shape1 />
      <Container className="position-relative">
        <Row className="justify-content-between">
          <Col lg={6} className="pe-xl-5 text-center text-lg-start">
            <div className="payment-content-wrapper">
              <h2 className="payment-heading mb-4">
                Be A Hero In Someone’s Life
              </h2>
              <p className="payment-sub-heading">
                Support our mission and be a part of something bigger.
                Donate now to make an impact
              </p>
              <Button
                variant="primary"
                className="payment-btn fs-5 mt-4 mt-md-5"
                onClick={handleDonateClick}
              >
                Donate
              </Button>
            </div>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center position-relative pb-4"
          >
            <Shape2 />
            <img
              src="https://cdn.easyfrontend.com/pictures/cards-1.png"
              alt=""
              className="rounded img-fluid payment-thumbnail position-relative"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Payment;