import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 5,
  });
  let handleInputChange = (event) => {
    setFormData((curValue) => {
      return { ...curValue, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({ username: "", comment: "", rating: 5 });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h3>Give a comment!</h3>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="comment">Comment: </label>
      <textarea
        name="comment"
        id="comment"
        placeholder="write comment"
        value={formData.comment}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <br />
      <label htmlFor="rating">Rating: </label>
      <input
        type="number"
        placeholder="rating"
        id="rating"
        min={1}
        max={5}
        name="rating"
        value={formData.rating}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Add Comment</button>
    </form>
  );
}
