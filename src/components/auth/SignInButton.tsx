import { clerk } from "~/lib/auth";
import { Button } from "../ui/button";

const SignInButton = () => {
  return (
    <Button
      onClick={() => {
        clerk.openSignIn();
      }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
