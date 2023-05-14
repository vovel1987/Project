import React, { useEffect } from "react";
import styles from "./allproducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductDisc from "../../components/ProductDisc/productDisc";
import Products from "../../components/Products/products";
import FilterBar from "../../components/FilterBar/filterBar";
import { resetState } from "../../store/productSlice/productSliceN";
// import { resetState } from "../../store/productsReducer/productsReducer";

export default function AllProductsPage() {
  const products = useSelector((state) => state.products.list);
  const data = products.filter((elem) => elem.show && elem.showDisc);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <div className={styles.container}>
      <FilterBar />
      <h1 className={styles.text}>All products</h1>
      <div className={styles.products}>
        {data.map((elem) => (
          <Products key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
