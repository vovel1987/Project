import React from "react";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.info_block}>
        <div className={styles.contact_block}>
          <p className={styles.contact}>Contact :</p>
          <a href="tel:+4911112223344" className={styles.div_phone}>
            <TbDeviceLandlinePhone className={styles.icon} />
            <p className={styles.number}>+49 177 568 8888</p>
          </a>
          <a
            href="mailto:https://mail.google.com/"
            className={styles.div_phone}
          >
            <TfiEmail className={styles.icon} />

            <p className={styles.number}>garden@gmail.com</p>
          </a>
          <div className={styles.links_block}>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className={styles.icon}
                src="/images/instagram.png"
                alt="instagram"
              />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <img
                className={styles.icon}
                src="/images/whatsapp.png"
                alt="whatsapp"
              />
            </a>
          </div>
        </div>
        <div className={styles.address_block}>
          <p className={styles.address}>Address :</p>

          <a href="https://www.google.com/search?q=telranDE" target="_blank">
            <p className={styles.street}>
              Linkstraße 2, 8 OG, 10785,Berlin, Deutschland
            </p>
          </a>

          <p className={styles.hours}>Working Hours:</p>
          <p className={styles.day}>09.00-18.00</p>
        </div>
      </div>
    </div>
  );
}
