import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let incCountx = () => {
    setCountx((preValue) => {
      return ++preValue;
    });
  };
  let incCounty = () => {
    setCounty((preValue) => {
      return ++preValue;
    });
  };

  useEffect(
    function print() {
      console.log("this is use Effect");
    },
    [countx]
  );

  return (
    <div>
      <h2>Counter {countx}</h2>
      <button onClick={incCountx}>Count++</button>

      <br />
      <br />
      <h2>Counter {county}</h2>
      <button onClick={incCounty}>Count++</button>
    </div>
  );
}
