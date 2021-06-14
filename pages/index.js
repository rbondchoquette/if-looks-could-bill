import DrSearchForm from '../components/DrSearchForm'
import Footer from '../components/Footer';
import OrgSearchForm from '../components/OrgSearchForm'
import styles from '../styles/Home.module.css';

export default function Home({}) {

  return (
    <div className="container">

      <main>
        <h1 className={styles.title}>GT <span className={styles.titleEmphasis}>lab coat</span> {/*<img src='/Untitled-2.png' className={styles.lbLogo}/> */}</h1>
        <div className={styles.container}>
          <div className={styles.searchDoctors}>
            <h2>search doctors <br /> &darr;</h2>
            <DrSearchForm />
          </div>
          <div className={styles.searchOrganizations}>
            <h2>search organizations <br /> &darr;</h2>
            <OrgSearchForm />
          </div>
        </div>
        <Footer />
      </main>

    </div>
  )
}