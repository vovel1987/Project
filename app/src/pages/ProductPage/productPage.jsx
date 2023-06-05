import React, { useEffect } from "react";
import styles from "./productPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../../components/Product/product";


export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.list);
  const categoryProducts = products.filter((elem) => elem.id === +id);
  const currentProduct = products.find((elem) => elem.id === +id);
  console.log(currentProduct);

  console.log(categoryProducts);

  useEffect(() => {
    if (!currentProduct) {
      navigate("/*");
    }
  }, [navigate, currentProduct]);

  return (
    <div className={styles.container}>
      {categoryProducts.map((elem) => (
        <Product key={elem.id} {...elem} />
      ))}
    </div>
  );
}
