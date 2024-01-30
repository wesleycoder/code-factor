// @refresh reload
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core";
import { Suspense, useContext } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  ServerContext,
  Title,
} from "solid-start";
import "./root.css";
import { isServer } from "solid-js/web";

export default function Root() {
  const event = useContext(ServerContext);

  const storageManager = cookieStorageManagerSSR(
    isServer ? event?.request.headers.get("cookie") ?? "" : document.cookie
  );
  return (
    <Html lang="en" class="font-sans text-primary">
      <Head>
        <Title>Code factor | A game about coding and automation</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <ColorModeProvider storageManager={storageManager}>
              <Routes>
                <FileRoutes />
              </Routes>
            </ColorModeProvider>
          </Suspense>
          <ColorModeScript storageType={storageManager.type} />
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
