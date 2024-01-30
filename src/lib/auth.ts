import Clerk from "@clerk/clerk-js";
import { dark } from "@clerk/themes";
import { createSignal } from "solid-js";
import { env } from "~/env";

export const clerk = new Clerk(env.VITE_CLERK_PUBLISHABLE_KEY);

export const [isReady, setIsReady] = createSignal(false);

if (typeof window !== "undefined") {
  clerk
    .load({
      appearance: {
        baseTheme: dark,
      },
    })
    .then(() => setIsReady(true));
}
