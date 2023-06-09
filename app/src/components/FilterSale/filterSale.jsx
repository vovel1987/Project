import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { useDispatch } from "react-redux";
import {
  filterPrice,
  inputFilter,
  sortSelect,
} from "../../store/productSlice/productSliceN";
import styles from "./filterSale.module.css";

export default function FilterBar({ price, discont_price, id }) {
  const dispatch = useDispatch();

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  useEffect(() => {
    const target = { min: priceFrom, max: priceTo };
    dispatch(filterPrice(target));
  }, [dispatch, priceFrom, priceTo]);

  const minHandler = (event) => {
    const value = event.target.value;
    setPriceFrom(value);
  };

  const maxHandler = (event) => {
    const value = event.target.value === "" ? Infinity : +event.target.value;
    setPriceTo(value);
  };

  const sortSelectValue = (event) => dispatch(sortSelect(+event.target.value));
  const searchInput = (event) => dispatch(inputFilter(event.target.value));

  const useRefFilter2 = useRef();
  const filterHandler = () => {
    useRefFilter2.current.classList.toggle(styles.filter_open);
  };
  return (
    <>
      <p className={styles.filter_text}>
        <CgMenuGridO className={styles.burgerButton} onClick={filterHandler} />
        Filter
      </p>
      <div className={styles.container} ref={useRefFilter2}>
        <div className={styles.div_btn}>
          <button className={styles.btn_close} onClick={filterHandler}>
            X
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <p className={styles.form_p}>Price :</p>

          <input
            className={styles.form_input}
            name="min"
            type="number"
            placeholder="from"
            onChange={minHandler}
            value={priceFrom}
          />
          <button className={styles.btn_price} onClick={() => setPriceFrom("")}>
            X
          </button>

          <input
            className={styles.form_input}
            type="number"
            name="max"
            placeholder="to"
            onChange={maxHandler}
            value={priceTo}
          />
          <button className={styles.btn_price} onClick={() => setPriceTo("")}>
            X
          </button>
        </form>

        <label className={styles.label_select} htmlFor="priceValue">
          Sort by:
          <select className={styles.option} onChange={sortSelectValue}>
            <option value="0">Default</option>
            <option value="1">Min price</option>
            <option value="-1">Max price</option>
          </select>
        </label>

        <input
          className={styles.input_search}
          onChange={searchInput}
          type="text"
          placeholder="Search"
          name="title"
        />
      </div>
    </>
  );
}
