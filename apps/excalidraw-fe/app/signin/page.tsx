"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const isFormValid = email.trim() !== "" && password.trim() !== ""
    const router = useRouter();

    const handleSignin = async () => {
        if (!isFormValid) {
            return;
        }
        setIsLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false
            });

            if (result?.ok) {
                router.push("/canvas");
            } else {
                setError(result?.error || "Invalid email or password");
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred while signing in");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md bg-card border-border">
                <CardHeader className="space-y-1 flex flex-col justify-center items-center">
                    <CardTitle className="text-2xl font-bold text-foreground">Sign In</CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email  </Label>
                        <Input id="email" type="email" placeholder="name@example.com" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-foreground">Password  </Label>
                            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        {/* add show or hide password */}
                        <Input id="password" type="password" placeholder="Password" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && (
                        <p className="text-sm text-red-500 text-center">{error}</p>
                    )}
                    <Button variant="default" className="w-full bg-blue-600 text-white hover:bg-blue-500 cursor-pointer " size="lg" onClick={handleSignin} disabled={!isFormValid || isLoading}>
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Signing in...</span>
                            </div>
                        ) : (
                            "Sign in"
                        )}
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full border-border text-foreground hover:bg-secondary cursor-pointer" onClick={() => signIn("google", { callbackUrl: "/" })}>
                        <Image src={"/google.svg"} width={15} height={15} alt="Google" />
                        Google
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-primary hover:underline font-semibold">
                            Sign up
                        </Link>
                    </p>
                </CardFooter>
            </Card>


        </div>
    );
};

export default SignIn;
