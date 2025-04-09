import Product from "./Product";

function ProductTab() {
  let option = ["hi-tech", "durable", "fast"];
  let option2 = { os: "Free window", camera: "48MP" };
  return (
    <>
      <Product
        title="Phone"
        price={20000}
        feature={option}
        extraFeature={option2.camera}
      />
      <Product
        title="Laptop"
        price={50000}
        feature={option}
        extraFeature={option2.os}
      />
      <Product
        title="PC"
        price={80000}
        feature={option}
        extraFeature={option2.os}
      />
    </>
  );
}

export default ProductTab;
