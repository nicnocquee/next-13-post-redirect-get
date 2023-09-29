import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(`in GET api/redirect`);

  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  url.pathname = "success";
  url.searchParams.delete("name");
  url.searchParams.set("message", `Hello ${name}`);
  url.searchParams.set("form", "get-form");

  console.dir(url.toString());

  redirect(url.toString());
}

export async function POST(request: Request) {
  console.log(`in POST api/redirect`);
  const url = new URL("/success", request.url);

  const name = (await request.formData()).get("name");

  url.searchParams.set("message", `Hello ${name}`);
  url.searchParams.set("form", "post-form");

  console.dir(url.toString());

  return NextResponse.redirect(url, 303); // default is 307
}
