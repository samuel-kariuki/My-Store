import React, { useEffect, useState } from 'react';
import { FakeAPIProduct } from "core/types/product";
import styles from "./category.module.scss";
import { ProductList } from "core/components/product-list/product-list";
import { Header } from "core/components/header/header";
import Footer from "core/components/footer/Footer";
import { OrderBy } from "core/components/order-by/order-by";
import "core/app/globals.scss";



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocalContextProvider } from "core/contexts/local-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export default function Category() {
  const [products, setProducts] = useState<FakeAPIProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const firstThreeProducts = products.slice(0, 3);

  return (
    <div>
      <Header /> 
      <main className={styles.main}>
  
       <OrderBy />
        <h1>All Products</h1>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}
