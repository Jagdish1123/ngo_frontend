import React, { useState, Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./store/auth";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./payment.css";
import "./register.css";




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

const SocialLoginButton = () => (
    <Fragment>
        <Button
            variant="primary"
            className="register-btn w-100 d-flex align-items-center mb-3"
        >
            <span className="text-white fs-4 lh-1">
                <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="w-100 text-center text-white">
                Continue with Facebook
            </span>
        </Button>
        <Button
            variant="danger"
            className="register-btn w-100 d-flex align-items-center"
        >
            <span className="text-white fs-4 lh-1">
                <FontAwesomeIcon icon={faGoogle} />
            </span>
            <span className="w-100 text-center text-white">Continue with Google</span>
        </Button>
    </Fragment>
);

const SignUpForm = () => {
    const navigate = useNavigate();
    const { StoreToken } = useAuth();
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const apiEndpoint = 'http://localhost:5000/api/register';

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            // Store the token received from the server
            if (result.token) {
                StoreToken(result.token);
            }

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

            navigate('/login');
            console.log("Form submitted successfully:", result);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <Form.Label htmlFor="firstName">First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your First Name"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            First name is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <Form.Label htmlFor="lastName">Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your Last Name"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Last name is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group className="mb-4">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Email is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Password is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-4">
                        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please confirm your password.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-4">
                <Form.Check
                    type="checkbox"
                    id="termsAndConditions"
                    label="I accept the terms & conditions and the privacy policy."
                    required
                />
                <Form.Control.Feedback type="invalid">
                    You must accept the terms & conditions and privacy policy.
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                className="register-btn-submit w-100"
            >
                Sign Up
            </Button>
        </Form>
    );
};

const SignUpFormCard = () => (
    <Card className="register-form-card">
        <Card.Body className="p-md-5">
            <h2 className="register-heading mb-4 mb-md-5">Sign Up</h2>

            <SignUpForm />

            <div className="position-relative register-or-separator">
                <hr className="my-4 my-md-5" />
                <span className="px-2">Or</span>
            </div>

            <SocialLoginButton />

            <div className="text-center mt-4 mt-md-5">
                <p className="mb-0 opacity-50 lh-1">Already have an account?</p>
                <Button variant="link" className="py-0 text-dark text-decoration-none">
                    Sign In
                </Button>
            </div>
        </Card.Body>
    </Card>
);

const SignUp1 = () => {
    return (
        <section className="register light d-flex align-items-center">
            <Container>
                <Row className="py-4 justify-content-center">
                    <Col lg={7} className="d-flex justify-content-center">
                        <SignUpFormCard />
                    </Col>
                </Row>
            </Container>
            <Shape1 />
        </section>
    );
};

export default SignUp1;
