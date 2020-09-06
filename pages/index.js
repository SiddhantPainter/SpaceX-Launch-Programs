import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

export default function Index({ launchData }) {
    return (
        <div>
            <Head>
                <title>SpaceX Launch Programs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Header />
            <Main launchData={launchData || []} />
            <Footer />
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await fetch('https://api.spaceXdata.com/v3/launches?limit=100');
    const jsonResponse = await response.json();
    
    return {
        props: {
            launchData: jsonResponse
        },
    }
}