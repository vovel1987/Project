import React, { useState } from "react";
import styles from "./filterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCheck,
  filterPrice,
  inputFilter,
  sortSelect,
} from "../../store/productSlice/productSliceN";

// } from "../../store/productsReducer/productsReducer";

export default function FilterBar({ price, discont_price, id }) {
  // const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  // const data = useSelector((state) => state.products);
  // const [maxValue, setMaxValue] = useState(Infinity);
  // const [minValue, setMinValue] = useState(0);

  // const values = {
  //   max: maxValue,
  //   min: minValue,
  // };

  const filterByPrices = (event) => {
    const data = Object.fromEntries(new FormData(event.target.parentNode));
    console.log(data);
    data.min = data.min === "" ? 0 : +data.min;
    data.max = data.max === "" ? Infinity : +data.max;
    dispatch(filterPrice(data));
  };

  function salesHandler(event) {
    dispatch(filterCheck(event.target.checked));
  }

  const price1 = "test";
  const sortSelectValue = (event) => dispatch(sortSelect(+event.target.value));
  const searchInput = (event) => dispatch(inputFilter(event.target.value));
  return (
    <div className={styles.container}>
      <form onChange={filterByPrices}>
        <p className={styles.form_p}>Price :</p>
        <input
          className={styles.form_input}
          name="min"
          type="number"
          placeholder="from"
          // onChange={(event) => setMinValue(+event.target.value)}
        />
        <input
          className={styles.form_input}
          type="number"
          name="max"
          placeholder="to"
          // onChange={(event) => setMaxValue(+event.target.value)}
        />
      </form>

      <div className={styles.checkbox}>
        <p className={styles.form_p}>Discounted items </p>
        <input type="checkbox" onClick={salesHandler} />
      </div>
      <label className={styles.label_select} htmlFor="priceValue">
        Change price:
        <select className={styles.option} onChange={sortSelectValue}>
          <option  value="">Price</option>
          <option value="1">Min price</option>
          <option value="-1">Max price</option>
        </select>
      </label>

      <input className={styles.input_search}
        onChange={searchInput}
        type="text"
        placeholder="Search"
        name="title"
      />
    </div>
  );
}
