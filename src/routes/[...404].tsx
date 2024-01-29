import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import DefaultLayout from "~/layouts/default";

export default function NotFound() {
  return (
    <DefaultLayout>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </DefaultLayout>
  );
}
