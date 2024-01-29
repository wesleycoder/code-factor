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
    <Html lang="en">
      <Head>
        <Title>Code factor | A game about coding and automation</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
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
