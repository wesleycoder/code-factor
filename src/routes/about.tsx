import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import DefaultLayout from "~/layouts/default";

export default function About() {
  return (
    <DefaultLayout>
      <Title>About</Title>
      <h1>About</h1>
    </DefaultLayout>
  );
}
