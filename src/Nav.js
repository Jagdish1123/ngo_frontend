import React , { useState, useEffect }from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "./store/auth";
import "./Navbar.css";
import Footer from "./footer";
import Team from "./team"
import Number from "./number";
import Slideshow from "./slideshow"
import SocialBtn from "./social";

// css
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/plugins/slider/css/owl.carousel.min.css';
import './assets/plugins/slider/css/owl.theme.default.css';
import './assets/css/style.css';




//data
// Function to generate a random number within a range
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const generateRandomAchievements = () => [
    { number: `${getRandomNumber(10, 20)}+`, label: "YEARS OF EXPERIENCE" },
    { number: `${getRandomNumber(1000, 2000)}+`, label: "HAPPY CHILDREN" },
    { number: `${getRandomNumber(50, 100)}+`, label: "EVENTS" },
    { number: `${getRandomNumber(40, 60)}+`, label: "FUND RAISED" },
  ];

const NavMenu = ({ routes }) => (
    <Nav className="ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
        {routes.map((route, i) => (
            <Nav.Item key={i}>
                <Nav.Link href={route.href}>{route.name}</Nav.Link>
            </Nav.Item>
        ))}
    </Nav>
);

NavMenu.propTypes = {
    routes: PropTypes.array.isRequired,
};

const AuthNavMenu = ({ isLogged, logout }) => (
    <Nav className="flex-row mb-2 mb-lg-0 ms-lg-3">
        {!isLogged ? (
            <>
                <Nav.Item className="me-2">
                    <Button variant="outline-primary" className="px-3" as={Link} to="/register">
                        Register
                    </Button>
                </Nav.Item>
                <Nav.Item className="me-2">
                    <Button variant="primary" className="px-3" as={Link} to="/login">
                        Log In
                    </Button>
                </Nav.Item>
            </>
        ) : (
            <>
                <Nav.Item className="me-2">
                    <Button variant="primary" className="px-3" onClick={logout}>
                        Log Out
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="danger" className="px-3" as={Link} to="/services">
                        Apply
                    </Button>
                </Nav.Item>
            </>
        )}
    </Nav>
);

AuthNavMenu.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};

const Navigation2 = () => {
    const [achievementsData, setAchievementsData] = useState(generateRandomAchievements());
    useEffect(() => {
        const interval = setInterval(() => {
          setAchievementsData(generateRandomAchievements());
        }, 3000); // Update every 3 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
    const { isLogged, logout } = useAuth();
    const routes = [
        { name: "Home", href: "/" },
        { name: "Project", href: "/apply" },

        { name: "About Us", href: "/aboutus" },
        // { name: "Services ", href: "/services" },
        { name: "Contact Us", href: "/contactus" },
        { name: "Gallery ", href: "/gallery" },

        { name: "Blog", href: "/blog" },
    ];

    return (
        <div className="ezy__nav2 light">
            <Navbar expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#">Y4D</Navbar.Brand>
                    <Navbar.Toggle aria-controls="ezy__nav2-navbar-nav">
                        <span>
                            <span />
                        </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="ezy__nav2-navbar-nav">
                        <NavMenu routes={routes} />
                        <AuthNavMenu isLogged={isLogged()} logout={logout} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Card */}
            <Slideshow/>

            {/* SocialBtn */}
            <SocialBtn/>

            {/* number */}
            <Number achievements={achievementsData} />

            {/* team */}

            <Team />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Navigation2;
