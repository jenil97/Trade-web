import Head from "next/head";
import About from "../components/About";
import Developers from "../components/Developers";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trade-Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}
