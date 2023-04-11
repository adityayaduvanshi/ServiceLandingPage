import Head from "next/head";

import { Header, FeatureSection, Footer } from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <title>Hourglass</title>
      </Head>
      <div>
        <Header />
        <FeatureSection />
        <Footer />
      </div>
    </>
  );
}
