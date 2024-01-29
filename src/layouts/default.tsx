import { ParentProps } from "solid-js";
import { A } from "solid-start";

export default function DefaultLayout({ children }: ParentProps) {
  return (
    <main>
      <nav>
        <A href="/">Index</A>
        <A href="/about">About</A>
      </nav>
      {children}
    </main>
  );
}
