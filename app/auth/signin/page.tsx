'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { signIn } from '@/lib/actions'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  rememberMe: z.boolean().default(false)
})

type FormValues = z.infer<typeof formSchema>

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
  })

  async function onSubmit(values: FormValues) {
    setIsLoading(true)
    setServerError(null)
    
    try {
      const formData = new FormData()
      formData.append('email', values.email)
      formData.append('password', values.password)
      formData.append('rememberMe', values.rememberMe.toString())
      
      const result = await signIn(formData)
      if ('error' in result) {
        setServerError(result.error || "An unexpected error occurred. Please try again.")
      } else if ('success' in result) {
        // Handle successful sign-in
        console.log(result.success)
      }
    } catch (error) {
      setServerError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background" role="main" aria-labelledby="sign-in-title">
      <Card className="w-full max-w-4xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Branding Section */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 z-10 rounded-l-lg" />
            <Image
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920&h=1080&fit=crop&q=80"
              alt="Marketplace shopping"
              className="absolute inset-0 object-cover rounded-l-lg"
              fill
              priority
            />
          </div>

          {/* Form Section */}
          <CardContent className="flex items-center justify-center p-6">
            <div className="w-full max-w-sm space-y-6">
              <CardHeader className="space-y-1 p-0">
                <CardTitle id="sign-in-title" className="text-2xl font-bold text-center">Sign in</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                            disabled={isLoading}
                            aria-describedby="email-error"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage id="email-error" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              autoComplete="current-password"
                              placeholder="******************"
                              disabled={isLoading}
                              aria-describedby="password-error"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                              disabled={isLoading}
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                              ) : (
                                <Eye className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage id="password-error" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-medium leading-none cursor-pointer">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  {serverError && (
                    <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md" role="alert">
                      {serverError}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </form>
              </Form>

              <div className="flex items-center justify-between text-sm">
                <Link
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                  href="/auth/signup"
                >
                  Don't have an account? Sign up
                </Link>
                <Link
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                  href="/auth/reset-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}