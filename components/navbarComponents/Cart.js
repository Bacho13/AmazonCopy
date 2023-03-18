import React from "react";
import styles from "../../styles/components/navbarComponents/Cart.module.scss";
import logo from "../../public/cart.png";
import Image from "next/image";

function Cart() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.firstLine}>
          <p className={styles.cartQuant}>0</p>
          <Image src={logo} width="30" alt="cart pic" />
        </div>
        <div className={styles.secondLine}>
          <p>Cart</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
