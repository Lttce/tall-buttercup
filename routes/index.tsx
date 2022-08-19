/** @jsx h **/
/** @jsxFrag Fragment **/
import { Fragment, h } from "preact";
import { tw } from "@twind";
import UsersList from "../islands/usersList.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <div class={tw`flex flex-col min-h-screen`}>
        <div class={tw`mx-2`}>
          <p class={tw`text-2xl`}>Tall buttercap</p>
          <p class={tw`text-xl`}>User list</p>
          <div>
            <UsersList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
