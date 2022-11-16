import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andrés Sanhueza</title>
        <meta name="description" content="FrontEnd Developer" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Andrés Sanhueza
        </h1>
        <p>
          FrontEnd Developer
        </p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
