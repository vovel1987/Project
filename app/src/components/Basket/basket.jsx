import React from "react";
import styles from "./basket.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProdukt,
  deleteItem,
  incrementProdukt,
} from "../../store/basketSlice/basketSliceN";
import { Link } from "react-router-dom";

export default function Basket({
  id,
  title,
  price,
  discont_price,
  count,
  image,
}) {
  const url = "http://localhost:3333/";
  const dispatch = useDispatch();

  const { basket, products } = useSelector((state) => state);

  //   const itemPrice = basket.reduce((acc, elem) => {
  //     const target = products.find(({ id }) => id === elem.id);
  // console.log(target);
  //     return target.discont_price
  //       ? acc + elem.count * target.discont_price
  //       : acc + elem.count * target.price;
  //   }, 0);

  const summe = (
    discont_price !== null ? count * discont_price : count * price
  ).toFixed(2);

  const link = `/products/${id}`;

  return (
    <div className={styles.container}>
      {/* <div className={styles.block1}> */}
      <Link to={link}>
        <img className={styles.image} src={`${url}${image}`} alt={title} />
      </Link>
      <div className={styles.block1}>
        <p className={styles.title}>{title}</p>
        <div className={styles.count_block}>
          <button
            className={count === 1 ? styles.button_none : styles.button}
            onClick={() => dispatch(decrementProdukt(id))}
          >
            -
          </button>
          <p className={styles.count}>{count}</p>
          <button
            className={styles.button_2}
            onClick={() => dispatch(incrementProdukt(id))}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.prices}>
        <p className={styles.summe}>{+summe}</p>
        <p className={discont_price !== null ? styles.prices_disc : ""}>
          {discont_price !== null ? price : ""}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteItem(id))}
        className={styles.button_del}
      >
        <img
          className={styles.delete_icon}
          src="/images/cross.png"
          alt="Delete"
        />
      </button>
      {/* </div> */}
    </div>
  );
}
