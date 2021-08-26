import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ul>
      <li>
        <Link to="/research">Research</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </ul>
  );
};

export default Footer;
