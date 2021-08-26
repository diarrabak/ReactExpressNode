import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-12 col-sm-4" id="logo">
          <Link to="/">
            LOSSA<span>Lab</span>
          </Link>
        </div>
        <nav className="col-12 col-sm-8">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li className="research">
              <Link to="/research">Research</Link>
              <ul className="sub-link">
                <li>
                  <Link to="/groups">Teams</Link>
                </li>
                <li>
                  <Link to="/researchers">Researchers</Link>
                </li>
                <li>
                  <Link to="/articles">Publications</Link>
                </li>
              </ul>
            </li>
            <li className="careers">
              <Link to="/careers">Careers</Link>

              <ul className="sub-link">
                <li>
                  <Link to="/phd-positions">PhD positions</Link>
                </li>
                <li>
                  <Link to="/internships">Internships</Link>
                </li>
                <li>
                  <Link to="/other-positions">Other positions</Link>
                </li>
              </ul>
            </li>

            <li className="studies">
              <Link to="/studies">Studies</Link>
              <ul className="sub-link">
                <li>
                  <Link to="/doctorate">Doctorate programs</Link>
                </li>
                <li>
                  <Link to="/masters">Master programs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
