import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./nav.module.css";
import { useSelector } from "react-redux";

export default function Nav() {
  const basket = useSelector((state) => state.basket.list);

  const products = basket.reduce((acc, elem) => acc + elem.count, 0);
  const links = [
    { id: 1, label: "Main Page", to: "/" },
    { id: 2, label: "All Products", to: "/products/all" },
    { id: 3, label: "All Sales", to: "/products/all/sales" },
    {
      id: 4,
      label: "Categories",
      to: "/categories/all",
    },
  ];

  const basketLink = [
    {
      id: 4,
      label: <img src="/images/basket.png" alt="Basket" />,
      to: "/basket",
      count: products,
    },
  ];

  const link = `categories/all`;
  const link2 = `/`;

  const isActive = ({ isActive }) =>
    [isActive ? "" : "", styles.link1].join(" ");

  const userRefLinks = useRef();

  const navHandler = () => {
    userRefLinks.current.classList.toggle(styles.nav_open);
  };

  return (
    <nav>
      <div className={styles.block1}>
        <Link to={link2} className={styles.a}>
          <img className={styles.icon} src="/images/icon1.png" alt="Icon" />
        </Link>

        {/* <Link className={styles.a1} to={link}>
          <button className={styles.button}>Catalog</button>
        </Link> */}
      </div>
      <div className={styles.block2}>
        <div className={styles.links} ref={userRefLinks}>
          {links.map((link) => (
            <NavLink
              // className={styles.link1}
              className={isActive}
              key={link.id}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <GiHamburgerMenu className={styles.hamburger} onClick={navHandler} />
        <div>
          {basketLink.map((link) => (
            <NavLink
              data-count={link.count || undefined}
              // className={styles.link1}
              className={isActive}
              key={link.id}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
