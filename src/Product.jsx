import "./Product.css";

function Product({ title, price, feature, extraFeature }) {
  let isDiscount = price > 30000;
  let design = { backgroundColor: isDiscount ? "skyblue" : "" };
  return (
    <div className="Product" style={design}>
      <h2>Title: {title}</h2>
      <h4>Price: {price}</h4>
      {isDiscount ? (
        <p>Discount 5%</p>
      ) : (
        <a href="/">Get Discount</a>
      )}
      <h5>
        Features:{" "}
        {feature.map((el) => (
          <li>{el}</li>
        ))}
      </h5>
      <p>Extra: {extraFeature.os}</p>
    </div>
  );
}

export default Product;
