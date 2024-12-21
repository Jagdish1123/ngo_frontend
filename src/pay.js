import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row, Form, Card, Container, InputGroup } from 'react-bootstrap';
import './pay.css';
const paymentData = [
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/master-card-logo.png",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/discover-logo.png",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/paypal-logo.png",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/ebay-logo.png",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/western-union-logo.png",
  },
];

const PaymentOptions = ({ item }) => {
  return (
    <Button
      variant=""
      className="pay-payment-option d-flex justify-content-center align-items-center p-4 px-xl-5 rounded-3 h-100 w-100"
    >
      <img src={item.img} alt="" className="img-fluid" />
    </Button>
  );
};
PaymentOptions.propTypes = {
  item: PropTypes.object.isRequired,
};

const CardDetails = () => {
  return (
    <>
      {/* card number  */}
      <Col md={6} lg={4}>
        <Form.Group className="mb-4">
          <Form.Label className="mb-2" htmlFor="card-number">
            Card Number
          </Form.Label>
          <Form.Control
            type="number"
            className="ps-4"
            id="card-number"
            placeholder="Enter your card number"
          />
        </Form.Group>
      </Col>
      {/* name  */}
      <Col md={6} lg={4}>
        <Form.Group className="mb-4">
          <Form.Label className="mb-2" htmlFor="card-name">
            Name on the card
          </Form.Label>
          <Form.Control
            type="text"
            className="ps-4"
            id="card-name"
            placeholder="Enter your Name"
          />
        </Form.Group>
      </Col>

      <Col xs={12} md={6} lg={4}>
        <Row>
          <Col xs={8}>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="expiry-date" className="mb-2">
                Expiry Date
              </Form.Label>
              <InputGroup>
                <Form.Select type="month" className="me-3 rounded-3">
                  <option value="">MM</option>
                </Form.Select>
                <Form.Select type="month" className="rounded-3">
                  <option value="">YY</option>
                </Form.Select>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="cvv" className="mb-2 text-nowrap">
                CVV Code
              </Form.Label>
              <Form.Control
                type="number"
                className="ps-4"
                id="cvv"
                placeholder="0000"
              />
            </Form.Group>
          </Col>
        </Row>
      </Col>
    </>
  );
};

const Address = () => {
  return (
    <>
      {/* country */}
      <Col md={6} lg={4}>
        <Form.Group className="mb-4 mb-lg-0">
          <Form.Label className="mb-2" htmlFor="country">
            Country
          </Form.Label>
          <Form.Control
            type="text"
            className="ps-4"
            id="country"
            placeholder="Country"
          />
        </Form.Group>
      </Col>
      {/* billing address */}
      <Col md={6} lg={4}>
        <Form.Group className="mb-4 mb-lg-0">
          <Form.Label className="mb-2" htmlFor="address">
            Billing Address
          </Form.Label>
          <Form.Control
            type="text"
            className="ps-4"
            id="address"
            placeholder="Billing Address"
          />
        </Form.Group>
      </Col>
      {/* city */}
      <Col md={6} lg={2}>
        <Form.Group className="mb-4 mb-lg-0">
          <Form.Label className="mb-2" htmlFor="city">
            City
          </Form.Label>
          <Form.Control
            type="text"
            className="ps-4"
            id="city"
            placeholder="City"
          />
        </Form.Group>
      </Col>
      {/* zip-code */}
      <Col md={6} lg={2}>
        <Form.Group className="mb-4 mb-lg-0">
          <Form.Label className="mb-2" htmlFor="zip-code">
            Zip Code
          </Form.Label>
          <Form.Control
            type="text"
            className="ps-4"
            id="zip-code"
            placeholder="Zip Code"
          />
        </Form.Group>
      </Col>
    </>
  );
};

const PaymentForm = () => {
  return (
    <Form>
      <Card className="pay-card mt-5 p-4 p-lg-5 border-0 rounded-3">
        <Row className="mb-5">
          <p className="pay-label mb-0">
            Your support makes a difference. How would you like to pay?
          </p>
          <p className="pay-subheading mt-3">
            Every contribution counts. Together, we can create lasting change.
          </p>
          {paymentData.map((item, i) => (
            <Col xs={6} sm={4} lg={2} className="mt-4 mt-lg-2" key={i}>
              <PaymentOptions item={item} />
            </Col>
          ))}
        </Row>
        <Row>
          <CardDetails />
        </Row>

        <hr className="pay-line" />

        <Row>
          <Address />
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <div>
              <Button
                variant=""
                type="submit"
                className="pay-btn-submit"
              >
                Continue
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

const PaymentHeader = () => {
  return (
    <div className="pay-header p-4 rounded-3 text-center">
      <h2 className="pay-heading mb-0">
        Your support makes a difference. How would you like to pay?
      </h2>
      <p className="pay-subheading mt-3">
        Every contribution counts. Together, we can create lasting change.
      </p>
    </div>
  );
};

const Travel6 = () => {
  return (
    <section className="pay">
      <Container>
        <Row>
          <Col xs={12}>
            <PaymentHeader />
          </Col>
        </Row>
        <PaymentForm />
      </Container>
    </section>
  );
};

export default Travel6;
