import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDisc from "../../components/ProductDisc/productDisc";
import styles from "./allSales.module.css";
import FilterSale from "../../components/FilterSale/filterSale";
import { resetState } from "../../store/productsReducer/productsReducer";

export default function AllSales() {
  const products = useSelector((state) => state.products.list);
  const data = products.filter((elem) => elem.show && elem.showDisc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>All sales</h1>
      <FilterSale />
      <div className={styles.products}>
        {data.map((elem) => (
          <ProductDisc key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
