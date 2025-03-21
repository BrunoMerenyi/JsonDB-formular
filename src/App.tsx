import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const [data, setData] = useState<
    Array<{ id: string; title: string; views: number }>
  >([]);

  const testFetch = async () => {
    const response = await fetch(`http://localhost:3001/posts`);
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    testFetch();
    console.log(data);
  }, []);

  async function saveData(body: string) {
    return fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  }

  const handleClick = () => {
    const body = JSON.stringify({
      id: id,
      title: title,
      views: views,
    });
    console.log(body);
    saveData(body);
  };

  return (
    <>
      <input
        value={id}
        placeholder="ID"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <input
        value={views}
        onChange={(e) => setViews(e.target.value)}
        placeholder="Views"
      ></input>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      ></input>
      <button onClick={handleClick}>save</button>
    </>
  );
}

export default App;
