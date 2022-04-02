import Head from 'next/head';
import Hero from '../components/Hero';
import Learn from '../components/Learn';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Head>
        <title>Cosmology</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <Learn />
      <Footer />
    </>
  );
}
