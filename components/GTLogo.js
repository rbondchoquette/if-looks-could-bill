import styles from '../styles/Layout.module.css'

const url = '/'

//const url = 'http://if-looks-could-bill.vercel.app'

const GTLogo = () => {

    return (
        <div>
            <a href={url}><img src='/gt_logo.jpg' className={styles.gtLogo} /></a>

        </div>
    )
}

export default GTLogo