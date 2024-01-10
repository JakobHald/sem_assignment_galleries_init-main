import styles from './page.module.css'
import DevIcons from '@/components/devicons/devIcons'

export default async function Page() {

    return (
        <main className={styles.page}>
            Icons
            <DevIcons ></DevIcons>
            <DevIcons ></DevIcons>
            <DevIcons ></DevIcons>
        </main>
    )
}