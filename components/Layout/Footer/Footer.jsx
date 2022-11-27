import React from "react";
import { Container } from "react-bootstrap";
import styleFooter from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="page-section bg-dark py-5 text-center" id="footer">
      <Container>
        <span className={styleFooter.spanFooter}>Terms of Service</span>
      </Container>
    </footer>
  );
};

export default Footer;
