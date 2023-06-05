import React, { useState, useEffect } from "react";
import styles from "./categoriesProductPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/Products/products";
import FilterBar from "../../components/FilterBar/filterBar";
import { resetState } from "../../store/productsReducer/productsReducer";


export default function CategoriesProductPage() {
  const { title } = useParams();
  const nav = useNavigate();

  const categories = useSelector((state) => state.category.list);
  const products = useSelector((state) => state.products.list);
  const data = products.filter((elem) => elem.show && elem.showDisc);

  const currentItem = categories.find((elem) => elem.title === title);
  const categoryProducts = data.filter(
    (elem) => elem.categoryId === currentItem.id
  );

  // const target = categoryProducts.map((elem) => {
  //   const categoryTitle = categories.find(({ id }) => id === elem.categoryId);
  //   return categoryTitle.title;
  // });

  const dispatch = useDispatch();

  // const fetchData = async () => {
  //   const resp = await fetch(`http://localhost:3333/categories/${id}`);
  //   const data = await resp.json();
  //   console.log(data.data);
  //   return data
  // };

  useEffect(() => {
    dispatch(resetState());
  }, []);

  useEffect(() => {
    if (!currentItem) {
      nav("/*");
    }
  }, [nav, currentItem]);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{title}</h1>
      <FilterBar />
      <div className={styles.container_products}>
        {categoryProducts.map((elem) => (
          <Products key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
