import { useRouter } from "next/router";

function Product({ post }) {
  const router = useRouter();
  const product = router.query.product;
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

export default Product;
