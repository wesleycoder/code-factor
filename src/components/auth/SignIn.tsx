import { clerk, isReady } from "~/lib/auth";
import { Button } from "../ui/button";

const SignInButton = () => {
  return (
    <>
      {isReady() ? (
        <Button
          onClick={() => {
            clerk.openSignIn();
          }}
        >
          Sign In
        </Button>
      ) : (
        <Button disabled>Sign In</Button>
      )}
    </>
  );
};

export default SignInButton;
