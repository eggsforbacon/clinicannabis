import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Clinicannabis</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar selection={"home"}/>
            <main className="w-full">
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">

            </footer>
        </div>
    )
}

export default Home
