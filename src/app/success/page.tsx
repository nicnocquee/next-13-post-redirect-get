import Link from "next/link";

export default function Success({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { message, form } = searchParams;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-bold text-xl">Success page</h1>
      <div>
        <p className="text-2xl">Message:</p>
        <p>{message || "No message"}</p>
      </div>
      <div>
        <p className="text-2xl">Form:</p>
        <p>{form || "No form"}</p>
      </div>
      <Link className="underline" href={`/`}>
        Back to root
      </Link>
    </main>
  );
}
