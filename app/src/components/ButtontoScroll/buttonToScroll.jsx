import { BsArrowUpCircle } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import styles from "./buttontoScroll.module.css";

export default function ButtonToScroll() {
  

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {setScroll && (
        <BsArrowUpCircle
          style={{ opacity: scroll ? "1" : "0" }}
          onClick={scrollTop}
          className={styles.button}
        />
      )}
    </div>
  );
}
