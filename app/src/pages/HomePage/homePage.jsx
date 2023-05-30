import React from "react";
import { useSelector } from "react-redux";
import Categories from "../../components/Categories";
import styles from "./homePage.module.css";
import ProductDisc from "../../components/ProductDisc/productDisc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchPost } from "../../store/productSlice/productSliceN";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  const categories = useSelector((state) => state.category.list);
  const products = useSelector((state) => state.products.list);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const arr = products
    .filter((elem) => elem.discont_price)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  console.log(arr);
  const onSubmit = (data) => {
    try {
      console.log(data);
      fetchPost(data);
      reset();
      // toast("sale coupon");
      toast.success("You received a coupon in the phone number", {
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className={styles.banner_icon}>
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
        <img className={styles.image_1} src="/images/zwerge.jpg" alt="" />
        <div className={styles.percent_block}>
          <h2 className={styles.percent}>5% off</h2>
          <h2 className={styles.percent}>on the first order</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            action=""
          >
            <input
              className={styles.input}
              type="tel"
              placeholder="Phone number : +49"
              {...register("telefon", {
                required: true,
                maxLength: 22,
              })}
            />

            <p className={styles.error}>
              {errors.telefon !== undefined
                ? (errors.telefon.type = "Field is`t empty")
                : ""}
            </p>

            <button className={styles.btn_disc}>Get a discount</button>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              theme="light"
            />
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
