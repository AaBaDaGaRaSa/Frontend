import React from "react";
import "./Footer.scss";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const QuickLinks = [
    {
      title: "Terms & Conditions",
      url: "#",
    },
    {
      title: "Privacy and Security",
      url: "#",
    },
    {
      title: "Orders and Refund",
      url: "#",
    },
  ];

  const FooterLinks = [
    {
      title: "Locations",
      url: "#",
    },
    {
      title: "Menu",
      url: "#",
    },
    {
      title: "Orders",
      url: "#",
    },
    {
      title: "Payment Method",
      url: "#",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <Logo />
              <p>Taste the authentic mexican food near you. Order now!</p>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer-link-title">Explore</h5>
              <ListGroup>
                {FooterLinks.map((item, index) => (
                  <ListGroupItem className="link-item">
                    <Hyperlink key={index} to={item.url}>
                      {item.title}
                    </Hyperlink>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer-link-title">Information</h5>
              <ListGroup>
                {QuickLinks.map((item, index) => (
                  <ListGroupItem className="link-item">
                    <Hyperlink key={index} to={item.url}>
                      {item.title}
                    </Hyperlink>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="4" md="4" sm="6">
              <h5 className="footer-link-title">Contact</h5>
              <ListGroup>
                <ListGroupItem className="link-item d-flex align-items-center gap-3">
                  <i className="ri-map-pin-line"></i>
                  11 Broadway, New York City.
                </ListGroupItem>

                <ListGroupItem className="link-item d-flex align-items-center gap-3">
                  <i className="ri-mail-line"></i>
                  TacoTown@tacos.com
                </ListGroupItem>

                <ListGroupItem className="link-item d-flex align-items-center gap-3">
                  <i className="ri-phone-line"></i>
                  +1 723-888-7576
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

const Hyperlink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;

  &:visited {
    color: white;
  }

  &:hover {
    color: #f5b70a;
    transition-duration: 0.3s;
  }
`;

export default Footer;
