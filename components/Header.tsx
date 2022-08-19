/** @jsx h **/
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header class={tw`mb-2 border-b-1 border-black`}>
      <div class={tw`text-2xl m-2`}>Tall Buttercup</div>
    </header>
  );
}
