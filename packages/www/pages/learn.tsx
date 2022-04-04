import Head from 'next/head';
import NpmModule from '../components/NpmModule';
import Header from '../components/Header';
import LearnBasics from '../components/LearnBasics';
import LearnHeader from '../components/LearnHeader';
import LearnSecurity from '../components/LearnSecurity';
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
            <NpmModule />
            <LearnSecurity />
            <LearnBasics />
            <Footer />
        </>
    );
}
