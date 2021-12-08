import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | NFT preview card component</title>
      </Head>

      <section className="h-screen bg-maingbg flex items-center justify-center font-outfit font-light text-lg">
        <Layout />
      </section>
    </>
  )
}
