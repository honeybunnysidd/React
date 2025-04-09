import "./Product.css";

function Product({ title, price, feature, extraFeature }) {
  return (
    <div className="Product">
      <h2>Title: {title}</h2>
      <h4>Price: {price}</h4>
      <h5>Features: {feature}</h5>
      <p>Extra: {extraFeature}</p>
    </div>
  );
}

export default Product;
