import React from "react";
import { useSelector } from "react-redux";
import Categories from "../../components/Categories";
import styles from "./homePage.module.css";
import ProductDisc from "../../components/ProductDisc/productDisc";
import { Link } from "react-router-dom";

export default function HomePage() {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  const arr = products
    .filter((elem) => elem.discont_price)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  console.log(arr);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.block1}>
          <p className={styles.title}>Sale</p>
          <p className={styles.title}>New Season</p>
          <Link to={`/products/all/sales`}>
            <button className={styles.button}>Sale</button>
          </Link>
        </div>
        <div>
          <img
            className={styles.image}
            src="/images/pflanze.jpg"
            alt="Flower"
          />
        </div>
      </div>
      <div className={styles.catalog}>
        <div className={styles.catalogBlock1}>
          <h2 className={styles.title2}>Catalog</h2>
          <Link to={`categories/all`}>
            <button className={styles.catalogBtn}>All Categories</button>
          </Link>
        </div>
        <div className={styles.category}>
          {categories.map((elem) => (
            <Categories key={elem.id} {...elem} />
          ))}
        </div>
      </div>
      <div className={styles.sale_block}>
        <img className={styles.image} src="/images/zwerge.jpg" alt="" />
        <div className={styles.percent_block}>
          <p className={styles.percent}>5% off</p>
          <p className={styles.percent}>on the first order</p>
          <form className={styles.form} action="">
            <input
              className={styles.input}
              type="number"
              placeholder="Phone number : +49"
            />
            <button className={styles.btn_disc}>Get a discount</button>
          </form>
        </div>
      </div>
      <div className={styles.sale_block2}>
        <p className={styles.title3}>Sale</p>
        <div className={styles.sale_img}>
          {arr.map((elem) => (
            <ProductDisc key={elem.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
}
