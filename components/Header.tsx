import Image from "next/image"
import styles from '@/components/Header.module.css'

const Header = () => {
    return (
        <>
            <h1 className={styles.h1}>Cuppa Text</h1>
            <Image
                className={styles.image}
                src='/images/Beetlejuice_onstage.jpg'
                width={144}
                height={144}
                alt="Betle Juice"
            />
        </>

    )
}

export default Header
