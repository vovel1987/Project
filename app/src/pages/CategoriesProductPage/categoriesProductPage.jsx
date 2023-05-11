import React, { useState, useEffect } from "react";
import styles from "./categoriesProductPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/Products/products";
import FilterBar from "../../components/FilterBar/filterBar";
import { resetState } from "../../store/productsReducer/productsReducer";

export default function CategoriesProductPage() {
  const { id } = useParams();

  const products = useSelector((state) => state.products.list);
  const data = products.filter((elem) => elem.show && elem.showDisc);
  const categoryProducts = data.filter((elem) => elem.categoryId === +id);

  const dispatch = useDispatch();

  // const fetchData = async () => {
  //   const resp = await fetch(`http://localhost:3333/categories/${id}`);
  //   const data = await resp.json();
  //   console.log(data.data);
  //   return data
  // };

  // console.log(categoryProducts);
  // console.log(id);

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <div>
      <FilterBar products={products} />
      <div className={styles.container}>
        {categoryProducts.map((elem) => (
          <Products key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
