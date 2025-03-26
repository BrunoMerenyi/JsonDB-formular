import { useEffect, useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/NavBar";

function App() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [first_name, setFirst_name] = useState<string>();
  const [last_name, setlast_name] = useState<string>();
  const [date_of_birth, setDate_of_birth] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [phone, setPhone] = useState<string>();

  async function saveData(body: string) {
    return fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = JSON.stringify({
      email,
      password,
      first_name,
      last_name,
      phone,
      date_of_birth,
      gender,
    });
    await saveData(body);
  };
  const style = {
    backgroundImage: `url(/gym.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="flex justify-around gap-52 top-0 sticky bg-background h-[50px]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="link">
                <a href="/">Home</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link">
                <a href="/users">Benutzer</a>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <main style={style} className="flex flex-col justify-center">
        <h1 className="text-6xl mb-10 text-green-500 font-bold ">
          Technologym
        </h1>

        <div className="flex justify-center ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-transparent  rounded-lg backdrop-blur-md w-full max-w-3xl justify-center"
          >
            <div className="bg-white/50 flex flex-col rounded-xl">
              <input
                className="p-5 "
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
              ></input>
              <input
                className="p-5"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="passwort"
                required
              ></input>
              <input
                className="p-5"
                value={first_name}
                type="text"
                onChange={(e) => setFirst_name(e.target.value)}
                placeholder="vorname"
                required
              ></input>
              <input
                className="p-5"
                value={last_name}
                type="text"
                onChange={(e) => setlast_name(e.target.value)}
                placeholder="name"
                required
              ></input>
              <input
                className="p-5"
                type="tel"
                value={phone}
                name="phone"
                placeholder="handy nummer"
                pattern="^(?:\+41|0|0041)\s?(\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|\d{3}\s?\d{3}\s?\d{3})$"
                title="Swiss format: +41 XX XXX XX XX, 0XX XXX XX XX, or 07X XXX XX XX"
                required
                onChange={(e) => setPhone(e.target.value)}
              ></input>

              <input
                type="date"
                placeholder="geburtsdatum"
                className="p-5"
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
                required
              ></input>
              <div className="flex flex-row justify-center gap-3">
                <div>
                  <input
                    type="radio"
                    id="männlich"
                    name="gender"
                    value="männlich"
                    checked={gender === "männlich"}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                  <label htmlFor="männlich">männlich</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="weiblich"
                    name="gender"
                    value="weiblich"
                    checked={gender === "weiblich"}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                  <label htmlFor="weiblich">weiblich</label>
                </div>
              </div>
              <Button
                variant="outline"
                className="hover:cursor-pointer rounded-xl  hover:bg-white/50 hover:rounded-lg text-3xl"
                type="submit"
              >
                save
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
