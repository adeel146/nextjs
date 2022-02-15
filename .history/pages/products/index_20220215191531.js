import Link from "next/link";
import { getSession } from "next-auth/client";

export default function Products({ posts,session }) {
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

export async function getStaticProps(Context) {
  const session = await getSession(Context);
  const res = await fetch("http://localhost:4000/users");
  const posts = await res.json();
  return {
    props: {
      session,
      posts
    },
    revalidate:5,
  };
}
