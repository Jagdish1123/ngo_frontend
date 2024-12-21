import React, { Fragment, useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./store/auth";
import "./Login.css"


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

const SocialLoginButton = () => (
    <Fragment>
        <Button
            variant="primary"
            className="login-btn w-100 d-flex align-items-center mb-3"
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
            className="login-btn w-100 d-flex align-items-center"
        >
            <span className="text-white fs-4 lh-1">
                <FontAwesomeIcon icon={faGoogle} />
            </span>
            <span className="w-100 text-center text-white">Continue with Google</span>
        </Button>
    </Fragment>
);


const SignInForm = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const navigate = useNavigate();
    const { StoreToken } = useAuth(); 

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        setValidated(true);

        try {
            const response = await fetch('http://localhost:5000/api/login', {
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
            alert("Login successful");
            console.log("Login successful:", result);

            // Store the token received from the server
            if (result.token) {
                StoreToken(result.token);
            }

            // Navigate to the home page or dashboard upon successful login
            navigate('/');
        } catch (error) {
            alert("Login failed");
            console.error('Login failed:', error);
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-4 mt-2">
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Email is required and should be a valid email address.
                </Form.Control.Feedback>
            </Form.Group>
            

            <Form.Group className="mb-2 mt-2">
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

            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    label="Remember me"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button
                variant="dark"
                type="submit"
                className="login-btn-submit w-100 bg-black text-white"
            >
                Log In
            </Button>

            <Button variant="link" type="button" className="w-100">
                Forget your password?
            </Button>
        </Form>
    );
};



const SignInFormCard = () => (
    <Card className="login-form-card">
        <Card.Body className="p-md-5">

            <h2 className="login-heading mb-4 mb-md-5  ">Log In</h2>

            <SignInForm />

            <div className="position-relative login-or-separator">
                <hr className="my-4 my-md-5" />
                <span className="px-2">Or</span>
            </div>

            <SocialLoginButton />

            <div className="text-center mt-4 mt-md-5">
                <p className="mb-0 opacity-50 lh-1">Don't have an account?</p>
                <Button variant="link" className="py-0 text-dark text-decoration-none">
                    Create account
                </Button>
            </div>
        </Card.Body>
    </Card>
);

const SignIn3 = () => {
    return (
        <section
            className="login light d-flex align-items-center "
        >
            {/* <Shape1 /> */}
            <Container >

                <Row className="py-4 d-flex justify-content-center  ">

                    <Col lg={6}>
                        <SignInFormCard />
                    </Col>
                </Row>

            </Container>
            <Shape0 />
        </section>

    );
};

export default SignIn3;
