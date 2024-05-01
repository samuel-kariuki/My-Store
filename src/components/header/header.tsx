"use client";
import Link from "next/link";
import { SearchInput } from "../search-input/search-input";
import styles from "./header.module.scss";
import { Cart } from "../cart/cart";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-left"]}>
        <Link href={"/"} className={styles["title"]}>
          Sam-store
        </Link>
        <nav
          className={`${styles["nav"]} ${isMenuOpen ? styles["nav--open"] : ""}`}
        >
          <div className={styles["nav__links"]}>
            <Link href={"/"} className={styles["nav-link"]}>
              Home
            </Link>
            <Link href={"/category"} className={styles["nav-link"]}>
              Category
            </Link>
            <Link href={"/ContactForm"} className={styles["nav-link"]}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
      <div className={styles["top-right"]}>
        <Cart />
        <div className={styles["search-toggle"]}>
          <button
            className={styles["nav-toggle"]}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <span className={styles["nav-toggle__close"]}>&times;</span>
            ) : (
              <span className={styles["nav-toggle__hamburger"]}>&#9776;</span>
            )}
          </button>
          <SearchInput className={styles["search-input"]} />
        </div>
      </div>
    </header>
  );
};