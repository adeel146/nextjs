import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li><Link href="/products">
        <a>Products</a>
      </Link></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      
      <p>
        
      </p>
      <p>
        <Link href="/dashboard-swr">
          <a>client side data fetching</a>
        </Link>
      </p>
      <p>
        <Link href="/dashboard-swr">
          <a>client side data fetching and CRUD operations</a>
        </Link>
      </p>
    </>
  );
}

export default Home;
