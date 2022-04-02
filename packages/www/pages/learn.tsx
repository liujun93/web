import Head from 'next/head';
import NpmModule from '../components/NpmModule';
import Header from '../components/Header';
import Learn from '../components/Learn';
import LearnHeader from '../components/LearnHeader';
import Footer from '../components/Footer';

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Head>
                <title>Learn Cosmology</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <LearnHeader />
            <Learn />
            <NpmModule />
            <Footer />
        </>
    );
}
