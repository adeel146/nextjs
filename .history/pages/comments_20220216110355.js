import { useState } from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("/api/comments");
  const data = await response.json();
  return data;
};
function DashboardSWR() {
  const [inputcomment, setinputcomment] = useState("");
  const { data, error } = useSWR("comments", fetcher);
  if (error) {
    return <h1>an error occured</h1>;
  }

  if (!data) {
    return <h1>Data is not available</h1>;
  }

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ inputcomment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  };
  const editComment = async (commentId) => {
    const text = prompt("enter Edit message");
    const response = await fetch(`/api/comments/`, {
      method: "PATCH",
      body: JSON.stringify({ text, id: commentId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>List of Comments</h1>
      <input
        value={inputcomment}
        onChange={(event) => {
          setinputcomment(event.target.value);
        }}
      ></input>
      <button onClick={submitComment}>Submit-Comment</button>
      {data.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>
              ID-{comment.id} | {comment.text}
            </h1>
            <button onClick={() => deleteComment(comment.id)}>DELETE</button>
            <button onClick={() => editComment(comment.id)}>Edit</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default DashboardSWR;
