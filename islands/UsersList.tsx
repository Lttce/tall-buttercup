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

  interface UserProps {
    userName: string;
    userId: string;
    userBio: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  const UserRow = (props: UserProps) => {
    return (
      <div class={tw`bg-gray-100 my-2 p-2`}>
        <p class={tw`text-lg`}>{props.userName}</p>
        <p>{props.userId}</p>
        <p>{props.userBio}</p>
      </div>
    );
  };

  const UsersList = users.map((user) => {
    return (
      <UserRow
        userName={user.name}
        userId={user.id}
        userBio={user.bio}
      />
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
