import { ParentProps } from "solid-js";
import { A } from "solid-start";

export default function DefaultLayout({ children }: ParentProps) {
  return (
    <>
      <nav>
        <A href="/">Index</A>
        <A href="/about">About</A>
      </nav>
      <main class="flex flex-col justify-center items-center">{children}</main>
    </>
  );
}
