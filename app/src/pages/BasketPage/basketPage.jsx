import React, { useEffect } from "react";
import styles from "./basketpage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Basket from "../../components/Basket/basket";

export default function BasketPage() {
  // const { products, basket } = useSelector((state) => state);
  const products = useSelector((state) => state.products.list);
  const basket = useSelector((state) => state.basket.list);

  const element = basket.map((elem) => {
    const product = products.find(({ id }) => id === elem.id);
    return { ...elem, ...product };
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const dispatch = useDispatch();

  function render() {
    if (products.length === 0) {
      return <p className={styles.loadPage}>Waiting Load Page ...</p>;
    } else if (basket.length === 0) {
      return <p className={styles.loadPage}>Cart is`t empty</p>;
    } else {
      return (
        <>
          <div className={styles.container}>
            {element.map((elem) => (
              <Basket key={elem.id} {...elem} />
            ))}
          </div>
        </>
      );
    }
  }

  // return (
  //   <div>
  //     {element.map((elem) => (
  //       <Basket key={elem.id} {...elem} />
  //     ))}
  //   </div>
  // );

  return render();
}
