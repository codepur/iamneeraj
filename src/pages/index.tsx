import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Cursor from '../components/Cursor';
import MainPage from "../components/Mainpage";
import CustomHeader from "../components/CustomHeader";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{"iamneeraj 😎"}</title>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="title" content="iamneeraj" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
       <main className="md:container-fluid  h-screen bg-white dark:bg-slate-900 bg-noise  ">
        <>
          <Cursor />
          <CustomHeader/>
          <MainPage/>
        </>
      </main>
    </>
  )
}
