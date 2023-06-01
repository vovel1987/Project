import { Routes, Route } from "react-router-dom";
import Nav from "../Nav/nav";
// import "./App.css";
import HomePage from "../../pages/HomePage/homePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { asyncLoadCategories } from "../../store/asyncCategories/asyncCategories";
import { asyncLoadProductss } from "../../store/asyncProducts/asyncProducts";
import styles from "./App.module.css";
import Footer from "../Footer/footer";
import CategoriesPage from "../../pages/CategoriesPage/categoriesPage";
import AllProductsPage from "../../pages/AllProductsPage/allProductsPage";
import Products from "../Products/products";
import AllSales from "../../pages/AllSales/allSales";
import CategoriesProductPage from "../../pages/CategoriesProductPage/categoriesProductPage";
import ProductPage from "../../pages/ProductPage/productPage";
import NotFound from "../../pages/NotFound/notFound";
import BasketPage from "../../pages/BasketPage/basketPage";
import { fetchProducts } from "../../store/productSlice/productSliceN";
import { fetchCategories } from "../../store/categoriesSlice/categoriessliceN";
import ButtonToScroll from "../ButtontoScroll/buttonToScroll";

function App() {
  // const data = async() =>{
  //   const response = await fetch('http://localhost:3333/products/all')
  //   const data = await response.json()
  //   console.log(data);
  // }
  // data()

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncLoadCategories);
  //   dispatch(asyncLoadProductss);
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <div className={styles.app}>
      <Nav />
      <ToastContainer
              position="top-right"
              autoClose={1000}
              theme="light"
            />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/all" element={<CategoriesPage />} />
        <Route path="/products/all" element={<AllProductsPage />} />
        <Route path="/products/all/sales" element={<AllSales />} />
        <Route path="/categories/:id" element={<CategoriesProductPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="/*" element={<NotFound />} />

        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <ButtonToScroll/>
      <Footer />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092216354006!2d13.375044699999998!3d52.5079329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sde!2sde!4v1681464088700!5m2!1sde!2sde"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default App;
