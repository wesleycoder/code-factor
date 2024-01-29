import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { Button } from "~/components/ui/button";
import DefaultLayout from "~/layouts/default";
import { clerk } from "~/lib/auth";

export default function Home() {
  return (
    <DefaultLayout>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <Button
        onClick={() => {
          clerk.openSignIn();
        }}
      >
        Sign In
      </Button>
    </DefaultLayout>
  );
}
