import "./Card.css";
import Price from "./Price";

export function Card({ title, idx }) {
  let oldPrice = ["12,498", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro0", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];

  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
