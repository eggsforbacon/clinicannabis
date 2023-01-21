import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Clinicannabis</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar selection={"home"}/>
            <main className="w-full min-h-screen">

            </main>

            <Footer/>
        </div>
    )
}

export default Home
