import React from "react";
import "./navbar.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import styled from "styled-components";
import CartButton from "../Cart/Cart";

const Navbar = () => {
  return (
    <header>
      <Container>
        <div className="navigation">
          <div className="logo">
            <Logo />
          </div>
          <div className="nav-menu">
            <div className="nav-list-wrapper"></div>
            <ul className="nav-list">
              <li className="nav-item">
                <Hyperlink to="/">Home</Hyperlink>
              </li>
              <li className="nav-item">
                <Hyperlink to="about">About</Hyperlink>
              </li>
              <li className="nav-item">
                <Hyperlink to="menu">Menu</Hyperlink>
              </li>
              <li className="nav-item">
                <Hyperlink to="">Orders</Hyperlink>
              </li>
            </ul>
          </div>
          <div className="menu-right">
            <div className="search">
              <input type="text" placeholder="search food..." />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>
          <CartButton />
          <div className="mobile-menu">
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
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
    text-decoration: underline;
  }
`;

export default Navbar;
