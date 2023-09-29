import submit from "./action";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-4 p-24">
      <div className="border border-gray-100 p-2 flex flex-col space-y-2 bg-white text-black">
        <h2>This is GET form</h2>
        <form
          id="get-form"
          className=" flex flex-col space-y-2"
          method="GET"
          action={`/api/redirect`}
        >
          <input
            className="border border-gray-100 p-2"
            placeholder="Put your name here"
            type="text"
            name="name"
          />
          <button
            form="get-form"
            className="bg-blue-500 text-white py-2 px-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="border border-gray-100 p-2 flex flex-col space-y-2 bg-white text-black">
        <h2>This is POST form</h2>
        <form
          id="post-form"
          className=" flex flex-col space-y-2"
          method="POST"
          action={`/api/redirect`}
        >
          <input
            className="border border-gray-100 p-2"
            placeholder="Put your name here"
            type="text"
            name="name"
          />
          <button
            form="post-form"
            className="bg-blue-500 text-white py-2 px-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="border border-gray-100 p-2 flex flex-col space-y-2 bg-white text-black">
        <h2>This is Server Action form</h2>
        <form
          id="server-action-form"
          className=" flex flex-col space-y-2"
          action={submit}
        >
          <input
            className="border border-gray-100 p-2"
            placeholder="Put your name here"
            type="text"
            name="name"
          />
          <button
            form="server-action-form"
            className="bg-blue-500 text-white py-2 px-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <a
        className="px-4 py-2 bg-blue-500 text-white"
        href="https://github.com/nicnocquee/next-13-post-redirect-get"
        target="_blank"
      >
        Repo here
      </a>
    </main>
  );
}
