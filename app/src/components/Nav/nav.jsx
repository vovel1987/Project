import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav() {
  const links = [
    { id: 1, label: "Main Page", to: "/" },
    { id: 2, label: "All Products", to: "/products/all" },
    { id: 3, label: "All Sales", to: "/products/all/sales" },
    {
      id: 4,
      label: <img src="/images/basket.png" alt="Basket" />,
      to: "/basket",
    },
  ];

  const link = `categories/all`;
  return (
    <nav>
      <div className={styles.block1}>
        <img className={styles.icon} src="/images/icon1.png" alt="Icon" />

        <Link className={styles.a} to={link}>
          <button className={styles.button}>Catalog</button>
        </Link>
      </div>
      <div className={styles.block2}>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink className={styles.link1} key={link.id} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
