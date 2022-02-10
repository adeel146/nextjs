import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard-swr">
            <a>client side data fetching</a>
          </Link>
        </li>
        <li>
          <Link href="/comments">
            <a>client side data fetching and CRUD operations</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>OAuth authentication GitHub </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
