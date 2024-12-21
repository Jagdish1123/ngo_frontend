import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {
    faEnvelopeOpenText,
    faHdd,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./contact.css"
import "./payment.css"
import Footer from "./footer";


const contactInfoList = [
    {
        icon: faEnvelopeOpenText,
        label: "NGO@email.com",
        href: "mailto:NGO@email.com",
    },
    {
        icon: faPhoneAlt,
        label: "+91 9112326540",
        href: "callto:+91 9112326540",
    },
    { icon: faHdd, label: "NGO.com", href: "NGO.com" },
];


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
const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-2">
                <Form.Control type="text" placeholder="Enter Name" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
                <Form.Control type="email" placeholder="Enter Email" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Enter Message" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid message.
                </Form.Control.Feedback>
            </Form.Group>
            <div className="text-end">
                <Button variant="primary" type="submit" className="contact-btn">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

const ContactFormCard = () => (
    <Card className="contact-form-card">
        <Card.Body className="p-md-5">
            <h2 className="contact-heading mb-3">Contact Us</h2>
            <p className="contact-sub-heading mb-5">
                Get in Touch with Us
            </p>

            <ContactForm />
        </Card.Body>
    </Card>
);

const ContactInfo = ({ contactInfoList }) => (
    <div className="mt-5 pt-md-4">
        {contactInfoList.map((info, i) => (
            <Card className="contact-link mt-4" key={i}>
                <Card.Body className="d-flex align-items-center">
                    <div className="fs-3 px-2 lh-1">
                        <FontAwesomeIcon icon={info.icon} className="contact-icon" />
                    </div>
                    <a
                        className="contact-link-content ms-4"
                        href={info.href || "#!"}
                    >
                        {info.label}
                    </a>
                </Card.Body>
            </Card>
        ))}
    </div>
);

ContactInfo.propTypes = {
    contactInfoList: PropTypes.array.isRequired,
};

const ContactUs = () => {
    return (
        <div>
            <section className="contact light">
                <Shape />
                <Container>

                    <Row className="justify-content-between">
                        <Col lg={5} className="mb-5 mb-lg-0">
                            <h2 className="contact-title mb-4 mt-0">
                                How can we help you?
                            </h2>
                            <p className="contact-sub-heading mb-0">
                                We're here to help you make a difference.
                                Reach out to us for any inquiries, support, or to get involved in our mission to create a better world !
                            </p>

                            <ContactInfo contactInfoList={contactInfoList} />
                        </Col>
                        <Col lg={5}>
                            <ContactFormCard />
                        </Col>
                    </Row>
                </Container>
                <Shape1 />

            </section>
            <Footer />


        </div>

    );
};

export default ContactUs;
