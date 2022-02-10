import { useRouter } from "next/router";

function Product({ post }) {
  const router = useRouter();
  const product = router.query.product;
 
  return (
    <>
      <h1>detail of {product}</h1>;
    </>
  );
}

export default Product;
