/** @jsx h **/
import { h } from "preact";
import { tw } from "@twind";

export function Footer() {
  return (
    <footer class={tw`mt-auto border-t-1 border-black`}>
      <div class={tw`flex justify-center items-center`}>
        <span class={tw`text-xs`}>
          Built with Fresh
        </span>
        <img src="/logo.svg" class={tw`h-6 w-6 ml-1`} />
      </div>
    </footer>
  );
}
