import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [first_name, setFirst_name] = useState<string>();
  const [last_name, setlast_name] = useState<string>();
  const [date_of_birth, setDate_of_birth] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const [data, setData] = useState<
    Array<{ id: string; title: string; views: string }>
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
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      date_of_birth: date_of_birth,
      gender: gender,
    });
    console.log(body);
    saveData(body);
    testFetch();
  };

  return (
    <>
      <h1 className="text-red-600 font-bold">PURE TATELESS</h1>
      <main className="p-23 w-full flex justfiy-center ">
        <form className="flex flex-col bg-white/80 rounded-lg backdrop-blur-3xl w-full">
          <input
            className="p-5"
            type="number"
            value={id}
            placeholder="ID"
            onChange={(e) => setId(Number(e.target.value))}
            required
          ></input>
          <input
            className="p-5 "
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Views"
            required
          ></input>
          <input
            className="p-5"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Title"
            required
          ></input>
          <input
            className="p-5"
            value={first_name}
            type="text"
            onChange={(e) => setFirst_name(e.target.value)}
            placeholder="Title"
            required
          ></input>
          <input
            className="p-5"
            value={last_name}
            type="text"
            onChange={(e) => setlast_name(e.target.value)}
            placeholder="Title"
            required
          ></input>
          <input
            type="tel"
            id="phone"
            value={phone}
            name="phone"
            placeholder="handy nummer "
            pattern="^(?:\+41|0|0041)\s?(\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|\d{3}\s?\d{3}\s?\d{3})$"
            title="Swiss format: +41 XX XXX XX XX, 0XX XXX XX XX, or 07X XXX XX XX"
            required
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            type="radio"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <button type="submit" onClick={handleClick}>
            save
          </button>
        </form>

        {/* {data.map((d, index) => (
          <div key={index}>
            <div className="flex flex-row gap-3.5">
              <div>{d.id}</div>
              <div>{d.title}</div>
              <div>{d.views}</div>
            </div>
          </div>
        ))} */}
      </main>
    </>
  );
}

export default App;
