import React, { useEffect, useState } from "react";
import styles from "./filterBar.module.css";
import { useDispatch } from "react-redux";
import { CgMenuGridO } from "react-icons/cg";
import {
  filterCheck,
  filterPrice,
  inputFilter,

  sortSelect,
} from "../../store/productSlice/productSliceN";
import { useRef } from "react";

export default function FilterBar({ price, discont_price, id }) {
  const dispatch = useDispatch();
  const useRefFilter = useRef();
  const filterHandler = () => {
    useRefFilter.current.classList.toggle(styles.filter_open);
  };

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  useEffect(() => {
    const target = { min: priceFrom, max: priceTo };
    dispatch(filterPrice(target));
  }, [dispatch, priceFrom, priceTo]);

  const minHandle = (event) => {
    const value = event.target.value;
    setPriceFrom(value);
  };

  const maxHandler = (event) => {
    const value = event.target.value === "" ? Infinity : +event.target.value;
    setPriceTo(value);
  };

  function salesHandler(event) {
    dispatch(filterCheck(event.target.checked));
  }

  const sortSelectValue = (event) => dispatch(sortSelect(+event.target.value));
  const searchInput = (event) => dispatch(inputFilter(event.target.value));
  return (
    <div>
      <p className={styles.filter_text}>
        <CgMenuGridO className={styles.burgerButton} onClick={filterHandler} />
        Filter
      </p>
      <div className={styles.container} ref={useRefFilter}>
        <div className={styles.div_btn}>
          <button className={styles.btn_close} onClick={filterHandler}>
            X
          </button>
        </div>

        <form onSubmit={(event) => event.preventDefault()}>
          <p className={styles.form_p}>Price :</p>
          <div className={styles.preis_container}>
            <div className={styles.box_input}>
              <input
                className={styles.form_input}
                name="min"
                type="number"
                placeholder="from"
                onChange={minHandle}
                value={priceFrom}
              />
              <button
                className={styles.btn_price}
                onClick={() => setPriceFrom("")}
              >
                X
              </button>
            </div>
            <div className={styles.box_input}>
              <input
                className={styles.form_input}
                type="number"
                name="max"
                placeholder="to"
                onChange={maxHandler}
                value={priceTo}
              />
              <button
                className={styles.btn_price}
                onClick={() => setPriceTo("")}
              >
                X
              </button>
            </div>
          </div>
        </form>

        <div className={styles.checkbox}>
          <label htmlFor="check" className={styles.form_p}>
            Discount{" "}
          </label>
          <input
            style={{ cursor: "pointer" }}
            id="check"
            type="checkbox"
            onClick={salesHandler}
          />
        </div>
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
    </div>
  );
}
