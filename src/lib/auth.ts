import Clerk from "@clerk/clerk-js";
import { dark } from "@clerk/themes";
import { env } from "~/env";

export const clerk = new Clerk(env.VITE_CLERK_PUBLISHABLE_KEY);

if (typeof window !== "undefined") {
  clerk.load({
    appearance: {
      baseTheme: dark,
    },
  });
}
