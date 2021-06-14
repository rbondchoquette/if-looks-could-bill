import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import GTLogo from '../components/GTLogo'

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>LAB COAT</title>
            <link rel="icon" href="/gt_logo.jpg" />
        </Head>
        <GTLogo />
        <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
        </div>
    </>
  )
}

export default Layout