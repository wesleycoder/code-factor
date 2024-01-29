import { Title } from "solid-start";
import { clientOnly } from "solid-start/islands";
import Counter from "~/components/Counter";
import DefaultLayout from "~/layouts/default";

const ClientSignInButton = clientOnly(
  () => import("../components/auth/SignInButton")
);

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
      <ClientSignInButton />
    </DefaultLayout>
  );
}
