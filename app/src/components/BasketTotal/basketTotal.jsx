import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styles from "./basketTotal.module.css";

import React from "react";
import { basketFetchPost } from "../../store/basketSlice/basketSliceN";
import { ToastContainer,toast } from "react-toastify";

export default function BasketTotal(element) {
  const basket = useSelector((state) => state.basket.list);
  const products = useSelector((state) => state.products.list);

  const totalPrice = basket.reduce((acc, item) => {
    const product = products.find(({ id }) => id === item.id);
    return acc + item.count * product.discount;
  }, 0).toFixed(2);



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      // basketFetchPost(data);
      const target = element.element.map((elem) => ({
        ...elem,
        telefon: data.telefon,
      }));
      basketFetchPost(target);
      reset();
      toast.success("Thank you for your purchase", {
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.text_h1}>Order details :</h1>
      <div className={styles.price}>
        <p className={styles.text_total}>Total summe </p>
        <p className={styles.text_price}>{+totalPrice}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.block_form}>
        <input
          type="tel"
          placeholder="Phone number: +49"
          {...register("telefon", {
            required: true,
            maxLength: 22,
          })}
        />
        <button>Buy now</button>
 
      </form>
      <ToastContainer
              position="top-right"
              autoClose={3000}
              theme="light"
            />
    </div>
  );
}
