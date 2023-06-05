import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCheck,
  filterPrice,
  inputFilter,
  sortSelect,
} from "../../store/productSlice/productSliceN";
import styles from "./filterSale.module.css";

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

  // const filterByPrices = (event) => {
  //   event.preventDefault();
  //   const data = Object.fromEntries(new FormData(event.target.parentNode));
  //   console.log(data);
  //   data.min = data.min === "" ? 0 : +data.min;
  //   data.max = data.max === "" ? Infinity : +data.max;
  //   setPriceMin(data.min);
  //   dispatch(filterPrice(data));
  // };

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  useEffect(() => {
    const target = { min: priceFrom, max: priceTo };
    dispatch(filterPrice(target));
  }, [dispatch, priceFrom, priceTo]);

  function salesHandler(event) {
    dispatch(filterCheck(event.target.checked));
  }

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
        {/* <form onChange={filterByPrices}> */}
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
          <button className={styles.btn_price} onClick={() => setPriceFrom("")}>X</button>

          <input
            className={styles.form_input}
            type="number"
            name="max"
            placeholder="to"
            onChange={maxHandler}
            value={priceTo}
          />
          <button  className={styles.btn_price} onClick={() => setPriceTo("")}>X</button>
        </form>

        {/* <div>
        <p>Discounted items</p>
        <input type="checkbox" onClick={salesHandler} />
      </div> */}
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
