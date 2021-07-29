import Head from "next/head";

export default function Home() {
  return (
    <div
      data-theme="luxury"
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Kokoa</title>
        <link rel="icon" href="/kokoa-favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"></main>

      <footer className="flex items-center justify-center w-full h-8 ">© Caramel Lyth</footer>
    </div>
  );
}
