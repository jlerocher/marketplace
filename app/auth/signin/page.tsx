import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Lock, ShieldCheck } from "lucide-react";

export default function SignInComponent() {
    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-background">
            <Card className="border-2 border-primary/10">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <ShieldCheck className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                        Secure Sign In
                    </CardTitle>
                    <CardDescription className="text-center">
                        Access your Marketplace account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Alert className="mb-6 bg-secondary">
                        <Lock className="h-4 w-4" />
                        <AlertDescription>
                            We use industry-standard encryption to protect your
                            data
                        </AlertDescription>
                    </Alert>
                    <GoogleLoginButton label="Sign in with Google" />
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <p className="text-xs text-center text-muted-foreground mt-4">
                        By signing in, you agree to our{" "}
                        <a href="#" className="underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline">
                            Privacy Policy
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
