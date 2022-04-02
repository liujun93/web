import Head from 'next/head';
import Features from '../components/Features';
import Cta from '../components/Cta';
import Header from '../components/Header';
import AboutHeader from '../components/AboutHeader';
import Footer from '../components/Footer';

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Head>
                <title>Cosmology Overview</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <AboutHeader />
            <Features />
            <Cta />
            <Footer />
        </>
    );
}
