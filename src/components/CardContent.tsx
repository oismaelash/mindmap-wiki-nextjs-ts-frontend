import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function CardContent({ title, description, url }: any) {
    return (
        <>
            <a
            style={{marginTop: 50}}
                href={url}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    {title} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    {description}
                </p>
            </a>
        </>
    )
}

export default CardContent