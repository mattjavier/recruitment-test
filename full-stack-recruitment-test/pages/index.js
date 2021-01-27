import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../src/components/Header';
import Flights from '../src/components/Flights';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skyscanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Flights />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
