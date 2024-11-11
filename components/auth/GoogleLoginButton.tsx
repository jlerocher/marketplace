import { googleAuth } from "@/lib/actions";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

type GoogleLoginButtonProps = {
    label?: string;
};

/**
 * Renders a Google login button with a specified label.
 *
 * @param {Object} props - The properties for the GoogleLoginButton component.
 * @param {string} [props.label="Sign in with Google"] - The label to display on the button.
 * @return {JSX.Element} The Google login button component.
 */
export default function GoogleLoginButton({
    label = "Sign in with Google",
}: GoogleLoginButtonProps) {
    return (
        <form action={googleAuth}>
            <Button
                type="submit"
                variant="outline"
                className="flex items-center gap-2 w-full group/google"
            >
                <FcGoogle className="size-6 group-hover/google:motion-preset-shake" />
                <span>{label}</span>
            </Button>
        </form>
    );
}
