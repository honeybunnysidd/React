import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import { CardTab } from "./CardTab.jsx";
import { Button } from "./Button.jsx";
import Form from "./Form.jsx";
function App() {
  return (
    <>
      {/* <Hello userName="Siddhartha" textColor="orange"/> */}
      {/* <ProductTab /> */}

      {/* Activity */}
      <h2>Blockbuster Deals | Shop Now</h2>

      <CardTab />
      {/* Events in React */}
      <Button />

      {/* Form events */}
      <Form />
    </>
  );
}
export default App;
