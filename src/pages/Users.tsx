import React, { useEffect, useState } from "react";
import { Link } from "react-router";
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

type Users = {
  date_of_birth: string;
  email: string;
  first_name: string;
  id: string;
  gender: string;
  last_name: string;
  password: string;
  phone: string;
};

const Users = () => {
  const [data, setData] = useState<Users[]>();

  const testFetch = async () => {
    await fetch("http://localhost:3001/users")
      .then((response) =>
        response.json().then((data) => {
          setData(data);
        })
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    testFetch();
  }, []);

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
              <Button variant="link">
                <a href="/users">Benutzer</a>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <main
        style={style}
        className="flex flex-col justify-center items-center p-4"
      >
        <div className="w-full max-w-6xl bg-white/80 rounded-lg shadow-lg overflow-x-auto">
          <table className="table-auto w-full border-collapse text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Vorname</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Geschlecht</th>
                <th className="px-4 py-2">Geburtsdatum</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2 truncate">{user.id}</td>
                  <td className="border px-4 py-2 truncate">
                    {user.first_name}
                  </td>
                  <td className="border px-4 py-2 truncate">
                    {user.last_name}
                  </td>
                  <td className="border px-4 py-2 truncate">{user.email}</td>
                  <td className="border px-4 py-2 truncate">{user.phone}</td>
                  <td className="border px-4 py-2 truncate">{user.gender}</td>
                  <td className="border px-4 py-2 truncate">
                    {user.date_of_birth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Users;
