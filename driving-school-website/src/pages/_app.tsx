import "@/styles/globals.css";
import Head from 'next/head'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bobby & Sons Driving School | Learn to Drive in Surrey</title>
        <meta name="description" content="Bobby & Sons Driving School offers certified instructors, flexible lesson packages, and expert guidance to help you pass your ICBC road test." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bobby & Sons Driving School" />
        <meta name="keywords" content="driving school Surrey, ICBC road test, driving lessons, driving instructor, learn to drive" />
        
        <meta property="og:title" content="Bobby & Sons Driving School | Learn to Drive in Surrey" />
        <meta property="og:description" content="Certified instructors, flexible lesson packages, and expert guidance for new drivers in Surrey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bnsdrivingschool.com/" />
        <meta property="og:image" content="https://bnsdrivingschool.com/sideView.jpeg" />

        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
