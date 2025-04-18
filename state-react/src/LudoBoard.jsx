import { useState } from "react";

export default function LudoBoard() {

  //Object and State
  let [moves, setMoves] = useState({
    blue: 0,
    green: 0,
    yellow: 0,
    red: 0,
  });

  let updateBlue = () => {
    setMoves((preMoves) => {

      return { ...preMoves, blue: preMoves.blue + 1 };
    });
    //Array and state
    setArr((preArr) => {
      return [...preArr, "blue moves"]
    })
    // -------------------
  };
  let updateYellow = () => {
    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  };

  // Array and State
  let [arr, setArr] = useState(["no moves"])


  return (
    <div>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue moves ={moves.blue}  and {arr}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "orange" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}
