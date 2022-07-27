import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nae raste</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </Head>

      <main className={styles.mainDiksha}>
        <h1 className={styles.title}>
         nae raste │
         ujjwal
        
        </h1>
        <div className={styles.grid}>
          <Link href= "/resources" >
            <a className={styles.card}>
            <Image src="/orbit.svg" alt="Learning resources" width={100} height={100}  priority/>

            <h3 >Learning resources</h3>
            </a>
          </Link>
          <Link href= "http://hyperphysics.phy-astr.gsu.edu/hbase/index.html" >
            <a className={styles.card}>

            <h3 style={{
              textAlign: "center"
            }} >HyperPhysics: Everything Physics</h3>
            </a>
          </Link>
         
          
        </div>
      </main>

    </div>
  )
}

export default Home
