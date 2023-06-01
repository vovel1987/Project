import React, { useState, useEffect } from "react";
import styles from "./categoriesProductPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/Products/products";
import FilterBar from "../../components/FilterBar/filterBar";
import { resetState } from "../../store/productsReducer/productsReducer";
import NotFound from "../NotFound/notFound";

export default function CategoriesProductPage() {
  const { id } = useParams();
  const nav = useNavigate();

  const categories = useSelector((state) => state.category.list);
  const products = useSelector((state) => state.products.list);
  const data = products.filter((elem) => elem.show && elem.showDisc);

  const categoryProducts = data.filter((elem) => elem.categoryId === +id);

  const currentcategory = data.find((elem) => elem.categoryId === +id);

  const target = categoryProducts.map((elem) => {
    const categoryTitle = categories.find(({ id }) => id === elem.categoryId);
    return categoryTitle.title;
  });

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

  useEffect(() => {
    if (!currentcategory) {
      nav("/*");
    }
  }, [nav, currentcategory]);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{target[0]}</h1>
      <FilterBar products={products} />
      <div className={styles.container_products}>
        {categoryProducts.map((elem) => (
          <Products key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
