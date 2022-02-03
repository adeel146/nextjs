import { useRouter } from "next/router";

function Productid({ post }) {
  const router = useRouter();
  const product = router.query.productid;
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h1>detail of {product}</h1>;
      <ul key={post.id}>
        <li>{post.name}</li>
        <li>{post.email}</li>
        <li>{post.price}</li>
      </ul>
    </>
  );
}

export default Productid;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productid: "1",
        },
      },
      {
        params: {
          productid: "2",
        },
      },
      {
        params: {
          productid: "3",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/users/${params.productid}`
  );
  const post = await res.json();
  if (!post.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate:5,
  };
}
