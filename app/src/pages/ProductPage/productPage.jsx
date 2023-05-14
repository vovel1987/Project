import React from "react";
import styles from "./productPage.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../../components/Product/product";

export default function ProductPage() {
  const { id } = useParams();

  const products = useSelector((state) => state.products.list);
  const categoryProducts = products.filter((elem) => elem.id === +id);
  console.log(categoryProducts);
  return (
    <div className={styles.container}>
      {categoryProducts.map((elem) => (
        <Product key={elem.id} {...elem} />
      ))}
    </div>
  );
}
