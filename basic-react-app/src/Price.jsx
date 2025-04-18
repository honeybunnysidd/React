export default function ({ oldPrice, newPrice }) {
  let styles = {
    textDecorationLine: "line-through",
  };
  let priceStyle = {
    backgroundColor: "#e0c367",
    // borderRadius: ".6rem",
    height: "30px",
    color: "black",
    borderBottomLeftRadius: ".8rem",
    borderBottomRightRadius: ".8rem",
    width: "222px !important",
  };
  let newStyles = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };
  return (
    <div className="price" style={priceStyle}>
      <p onClick={Buy}>
        <span style={styles}> ₹{oldPrice} </span> &nbsp;&nbsp;&nbsp;
        <span style={newStyles}>₹{newPrice}</span>
      </p>
    </div>
  );
}

function Buy() {
  console.log("Buy");
}
