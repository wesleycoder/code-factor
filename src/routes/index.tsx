import { Title } from "solid-start";
import { clientOnly } from "solid-start/islands";
import Counter from "~/components/Counter";
import { Button } from "~/components/ui/button";
import DefaultLayout from "~/layouts/default";

const SignInButton = clientOnly(() => import("../components/auth/SignIn"));

export default function Home() {
  return (
    <DefaultLayout>
      <Title>Home</Title>
      <h1>Home</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build <code>SolidStart</code> apps.
      </p>
      <SignInButton fallback={<Button disabled>Sign In</Button>} />
    </DefaultLayout>
  );
}
