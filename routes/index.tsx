/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import UsersList from "../islands/usersList.tsx";

export default function Home() {
  return (
    <div class={tw`mx-4`}>
      <p class={tw`text-2xl`}>Tall buttercap</p>
      <p class={tw`text-xl`}>User list</p>
      <div>
        <UsersList />
      </div>
    </div>
  );
}
