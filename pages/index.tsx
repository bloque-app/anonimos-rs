import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>anonimos.rs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/styles.css" rel="stylesheet" />
      </Head>
      <main>
        <h1>anonimos.rs</h1>
        <h2>El primer grupo de apoyo para creadores en Rust</h2>
        <a className="btn" href="https://forms.gle/2CnMrQJLKGms2ehA8" target="_blank">
          Únete a la lista de espera
        </a>
      </main>
    </>
  );
}
