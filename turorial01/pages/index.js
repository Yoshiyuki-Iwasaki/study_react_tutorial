import Link from "next/link";
const products = [{ name: "bag" }, { name: "shoes" }, { name: "socks" }];

export default function Home() {
  return (
    <div>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link as={`/products/${product.name}`} href="/products/[name]">
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
}
