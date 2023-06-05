import React from "react";
import styles from "./product.module.css";
import { useDispatch } from "react-redux";
import { addProdukt } from "../../store/basketSlice/basketSliceN";
import { toast } from "react-toastify";
export default function Product({
  title,
  price,
  discont_price,
  description,
  image,
  id,
}) {
  const discount = ((price / discont_price) * 100 - 100).toFixed(2);
  const oldPrice = price;
  const discNull = 0;
  const url = "http://localhost:3333/";
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {discont_price !== null ? (
        <>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.block}>
            <div className={styles.block_image}>
              <img className={styles.image} src={`${url}${image}`} alt="" />
            </div>
            <div className={styles.block_descr}>
              <div className={styles.prices}>
                <p className={styles.disc_price}>{discont_price}€</p>
                <p className={styles.price}> {price}€</p>
                <p className={styles.discount}>{-discount}%</p>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addProdukt(id),
                    toast.success("Your product was added", {
                      theme: "dark",
                    })
                  )
                }
                className={styles.button}
              >
                Add to Cart
              </button>
              <p className={styles.descr}>{description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className={styles.title}>{title}</p>

          <div className={styles.block}>
            <div className={styles.block_image}>
              <img className={styles.image} src={`${url}${image}`} alt="" />
            </div>

            <div className={styles.block_descr}>
              <div className={styles.prices}>
                <p className={styles.disc_price}>{oldPrice}€</p>
                <p className={styles.price}> {price}€</p>
                <p className={styles.discount}>{discNull}%</p>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addProdukt(id),
                    toast.success("Your product was added", {
                      theme: "dark",
                    })
                  )
                }
                className={styles.button}
              >
                Add to Cart
              </button>

              <p className={styles.descr}>{description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
