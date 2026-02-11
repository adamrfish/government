"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "./auth";

export type LoginState = { error?: string } | undefined;

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (
    email !== process.env.AUTH_EMAIL ||
    password !== process.env.AUTH_PASSWORD
  ) {
    return { error: "Invalid email or password" };
  }

  await createSession(email);
  redirect("/start-here");
}

export async function logout() {
  await deleteSession();
  redirect("/");
}
