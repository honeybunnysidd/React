function handleClick(event) {
  console.log(event);
  console.log("Hello DevX");
}
function handleHover() {
  console.log("Button hover");
}
function handleDoubleClick() {
  console.log("Double click");
}
export function Button() {
  return (
    <div>
      <button onClick={handleClick} onMouseOver={handleHover}>
        Submit
      </button>
      <button onDoubleClick={handleDoubleClick}>Double Click</button>
    </div>
  );
}
