import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li><Link href="/products">
        <a>Products</a>
      </Link></li>
        <li><Link href="/news">
          <a>News</a>
        </Link></li>
        <li><Link href="/dashboard-swr">
          <a>client side data fetching</a>
        </Link></li>
        <li></li>
      </ul>
      
      <p>
        
      </p>
      <p>
        
      </p>
      <p>
        
      </p>
    </>
  );
}

export default Home;
