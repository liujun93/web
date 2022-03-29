import Head from 'next/head';
import Code from '../components/Code';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Head>
                <title>Cosmology npm module</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <Code />
            <Footer />
        </>
    );
}
