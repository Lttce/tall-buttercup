/** @jsx h **/
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header class={tw`bg-gray-100 mb-2`}>
      <div class={tw`text-2xl m-2`}>Tall Buttercup</div>
    </header>
  );
}
