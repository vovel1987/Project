import React from "react";
import styles from "./productDisc.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProdukt } from "../../store/basketSlice/basketSliceN";
import { ToastContainer, toast } from "react-toastify";

export default function ProductDisc({
  title,
  price,
  discont_price,
  description,
  image,
  id,
}) {
  const discount = ((price / discont_price) * 100 - 100).toFixed(2);

  const url = "http://localhost:3333/";
  const link = `/products/${id}`;
  const dispatch = useDispatch();
  return (
    <>
      {discont_price !== null ? (
        <div className={styles.container}>
          <Link to={link}>
            <img className={styles.image} src={`${url}${image}`} alt="" />
          </Link>
          <button
            onClick={() =>
              dispatch(
                addProdukt(id),
                toast.success("Your product was added", {
                  theme: "dark",
                })
              )
            }
            className={styles.modal}
          >
            Add to cart
          </button>

          <div className={styles.prices}>
            <p className={styles.disc_price}>{discont_price}€</p>
            <p className={styles.price}> {price}€</p>
            <p className={styles.discount}>{-discount}%</p>
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
