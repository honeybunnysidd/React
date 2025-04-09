import Product from "./Product";

function ProductTab() {
  return (
    <>
      <Product title="phone" price={30000} />
      <Product title="laptop" price="50k" />
      <Product title="Pen" />
    </>
  );
}

export default ProductTab;
