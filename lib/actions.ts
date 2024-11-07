'use server'

import { cookies } from 'next/headers';
import { createHash } from 'crypto';
import { z } from 'zod'

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export async function signIn(formData: FormData) {
  const validatedFields = SignInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid email or password' }
  }

  // Here you would typically verify the user's credentials
  // For demo purposes, we'll just simulate a successful login
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: 'Signed in successfully' }
}

// @/lib/actions/auth.ts

export async function signUp(formData: { email: string; password: string }) {
  // Hash password before storing
  const hashedPassword = createHash('sha256')
    .update(formData.password)
    .digest('hex');

  try {
    // TODO: Add your database logic here
    // const user = await db.user.create({
    //   data: {
    //     email: formData.email,
    //     password: hashedPassword
    //   }
    // });

    // Return success with non-sensitive data
    return {
      success: true,
      data: {
        email: formData.email,
        createdAt: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('Signup failed:', error);
    return { success: false, error: 'Failed to create account' };
  }
}

export async function requestPasswordReset(email: string) {
  try {
    // Generate a unique reset token
    const resetToken = createHash('sha256')
      .update(Math.random().toString())
      .digest('hex');
    
    // TODO: Add your database logic here
    // await db.user.update({
    //   where: { email },
    //   data: {
    //     resetToken,
    //     resetTokenExpires: new Date(Date.now() + 3600000) // 1 hour
    //   }
    // });

    // TODO: Send email with reset link
    // await sendEmail({
    //   to: email,
    //   subject: 'Password Reset',
    //   text: `Reset your password: /reset-password?token=${resetToken}`
    // });

    return { success: true };
  } catch (error) {
    console.error('Password reset request failed:', error);
    return { success: false, error: 'Failed to process reset request' };
  }
}

export async function resetPassword(token: string, newPassword: string) {
  const hashedPassword = createHash('sha256')
    .update(newPassword)
    .digest('hex');

  try {
    // TODO: Add your database logic here
    // const user = await db.user.findFirst({
    //   where: {
    //     resetToken: token,
    //     resetTokenExpires: { gt: new Date() }
    //   }
    // });
    
    // if (!user) {
    //   return { success: false, error: 'Invalid or expired reset token' };
    // }

    // await db.user.update({
    //   where: { id: user.id },
    //   data: {
    //     password: hashedPassword,
    //     resetToken: null,
    //     resetTokenExpires: null
    //   }
    // });

    return { success: true };
  } catch (error) {
    console.error('Password reset failed:', error);
    return { success: false, error: 'Failed to reset password' };
  }
}