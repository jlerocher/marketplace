"use server";
import { signIn, signOut } from "@/auth";

/**
 * Asynchronously initiates authentication via Google.
 *
 * This function triggers a sign-in process using Google as the
 * authentication provider. It utilizes an external `signIn` function
 * and passes "google" as the provider parameter.
 *
 * @returns {Promise<void>} A promise that resolves when the authentication process is complete.
 */
export const googleAuth = async (): Promise<void> => {
    await signIn("google");
};

/**
 * Asynchronous function to sign out the current user.
 *
 * This function calls the `signOut` method to log the user out of their account.
 * It does not take any parameters and does not return a value.
 * Any errors during the sign-out process need to be handled by the caller.
 *
 * @returns {Promise<void>} A promise that resolves when the sign-out process is complete.
 */
export const signUserOut = async (): Promise<void> => {
    await signOut();
};
