import { Card } from "./card";

export function CardTab() {
  let styles = {
    display: "flex",
    flexWrap:"wrap",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={styles}>
      <Card title="Logitech MX Master" idx={0} />
      <Card title="Apple Pencil (2nd Gen)" idx={1} />
      <Card title="Zebronics Zeb-transformer" idx={2} />
      <Card title="Petronics Headphone 23" idx={3} />
    </div>
  );
}
