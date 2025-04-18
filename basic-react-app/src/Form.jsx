function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form Submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="" id="" placeholder="Write something" />
      <button>Form Submit</button>
    </form>
  );
}
