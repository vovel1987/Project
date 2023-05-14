import React from "react";
import styles from "./categories.module.css";
import { useSelector } from "react-redux";
import Categories from "../../components/Categories";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.category.list);
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Categories</h1>
      <div className={styles.categories}>
        {categories.map((elem) => (
          <Categories
            key={elem.id}
            // image={elem.image} title={elem.title} id={elem.id}
            {...elem}
          />
        ))}
      </div>
    </div>
  );
}
