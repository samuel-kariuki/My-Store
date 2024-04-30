import { FakeAPIProduct } from "core/types/product";
import styles from "./page.module.scss";
import { ProductList } from "core/components/product-list/product-list";
import { OrderBy } from "core/components/order-by/order-by";

export default async function Home() {
  const data = await fetch(`https://fakestoreapi.com/products`);
  const products: FakeAPIProduct[] = await data.json();

  
  const firstThreeProducts = products.slice(0, 3);

  return (
    <main className={styles.main}>
    <h1>Top Products </h1>
      
      <section className={styles['products-grid']}>
        <ProductList products={firstThreeProducts} showPagination={false} />
      </section>

      <h1>All Products </h1>
      <ProductList products={products} />
    </main>
  );
}


