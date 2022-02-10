import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <p>
      <Link href="/news">
        <a>News</a>
      </Link>
      </p>
    </>
  );
}

export default Home;
