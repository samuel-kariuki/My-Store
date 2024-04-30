"use client";
import Link from "next/link";
import { SearchInput } from "../search-input/search-input";
import styles from "./header.module.scss";
import { Cart } from "../cart/cart";

export const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <Link href={"/"} className={styles["title"]}>
        Sam-store
      </Link>

        {/* Navigation Tabs */}
        <nav className={styles["nav"]}>

        <Link href={"/"} className={styles["nav-link"]}>
        Home
      </Link>

      <Link href={"/"} className={styles["nav-link"]}>
        Category
      </Link>
        
      <Link href={"/contact"} className={styles["nav-link"]}>
        Contact
      </Link>

      </nav>

      <div className={styles["top-right"]}>
        <Cart />
        <SearchInput />
      </div>
    </header>
  );
};
