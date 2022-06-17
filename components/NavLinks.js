import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Fonctionnalités
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Abonnement
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Équipe
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Écrans
        </ScrollLink>
      </li>
      <li className="dropdown">
        <Link href="/blog">
          <>
            <a>News</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link href="/blog">
              <a>Nouvelles</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-post">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
