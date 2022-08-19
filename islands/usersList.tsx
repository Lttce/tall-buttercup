/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

export default function UsersList() {
  interface User {
    id: string;
    name: string;
    bio: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  const UsersList = users.map((user) => {
    return (
      <div class={tw`bg-gray-100 my-2 p-2`}>
        <p class={tw`text-lg`}>{user.name}</p>
        <p>@{user.id}</p>
        <p>{user.bio}</p>
      </div>
    );
  });

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://127.0.0.1:1323/");
      const json = await response.json();
      setUsers(json);
    };
    getUsers();
  }, []);

  return (
    <div>
      {UsersList}
    </div>
  );
}
