import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <>
      <Head>
        <title>T2</title>
        <meta name="description" content="T2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-3xl font-bold underline">
          <h1>Welcome to the T2 template</h1>
          <ConnectButton />
        </div>
      </main>
    </>
  );
}
