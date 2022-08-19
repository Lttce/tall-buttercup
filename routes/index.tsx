/** @jsx h **/
/** @jsxFrag Fragment **/
import { Fragment, h } from "preact";
import { tw } from "@twind";
import UsersList from "../islands/UsersList.tsx";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <div class={tw`flex flex-col min-h-screen`}>
        <Header />
        <div class={tw`mx-2`}>
          <p class={tw`text-xl`}>User list</p>
          <UsersList />
        </div>
        <Footer />
      </div>
    </>
  );
}
