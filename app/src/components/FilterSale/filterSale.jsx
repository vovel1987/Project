import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  filterCheck,
  filterPrice,
  inputFilter,
  sortSelect,
} from "../../store/productsReducer/productsReducer";

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
    <div>
      <form onChange={filterByPrices}>
        <p>Price</p>
        <input
          name="min"
          type="number"
          placeholder="Von"
          // onChange={(event) => setMinValue(+event.target.value)}
        />
        <input
          type="number"
          name="max"
          placeholder="Bis"
          // onChange={(event) => setMaxValue(+event.target.value)}
        />
      </form>

      {/* <div>
        <p>Discounted items</p>
        <input type="checkbox" onClick={salesHandler} />
      </div> */}
      <label htmlFor="priceValue">
        Change price:
        <select onChange={sortSelectValue}>
          <option value="">Price</option>
          <option value="1">Min price</option>
          <option value="-1">Max price</option>
        </select>
      </label>

      <input
        onChange={searchInput}
        type="text"
        placeholder="Search"
        name="title"
      />
    </div>
  );
}
