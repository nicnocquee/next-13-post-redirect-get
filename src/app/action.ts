"use server";

import { redirect } from "next/navigation";

export default async function submit(formData: FormData) {
  console.log(`in submit function`);
  const name = formData.get("name");

  const url = new URL("/success", "http://localhost");
  url.searchParams.set("message", `Hello ${name}`);
  url.searchParams.set("form", "server-action-form");

  redirect(url.toString().replace("http://localhost", "")); // Navigate to new route
}
