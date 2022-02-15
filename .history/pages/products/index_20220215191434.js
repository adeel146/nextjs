import Link from "next/link";

export default function Products({ posts }) {
  return (
    <div>
      <h1>Products Page</h1>
      {posts.map((e) => {
        return (
          <ul key={e.id}>
            <Link href={`/products/${e.id}`}>
              <a>{e.name} {e.price}</a>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  const 
  const res = await fetch("http://localhost:4000/users");
  const posts = await res.json();
  return {
    props: {
      posts
    },
    revalidate:5,
  };
}
