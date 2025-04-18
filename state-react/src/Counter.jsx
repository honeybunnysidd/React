import { useState } from "react";

function init() {
  console.log("init executed");
  return Math.floor(Math.random() * 10) + 1;
}
export default function Counter() {
  let [count, setCount] = useState(init);
  console.log("component render", count);

  function incCount() {
    // console.log("component re-render", count);
    setCount((curValue) => {
      return curValue + 1;
    });

    // setCount(27);
  }
  return (
    <div>
      <button onClick={incCount}>Count : {count}</button>
    </div>
  );
}
