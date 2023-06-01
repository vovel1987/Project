import React from "react";
import styles from "./categories.module.css";
import { Link } from "react-router-dom";
export default function Categories({ title, image, id }) {
  const url = "http://localhost:3333/";
  const link = `/categories/${id}`;
  console.log(id);

  return (
    <div className={styles.container}>
     
      <Link to={link}>
        <img className={styles.image} src={`${url}${image}`} alt="" />
        <p className={styles.title}>{title}</p>
     
      </Link>
    </div>
  );
}
