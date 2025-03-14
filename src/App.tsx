import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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

  return (
    <>
      <div>TTES {data[0]?.title}</div>
    </>
  );
}

export default App;
