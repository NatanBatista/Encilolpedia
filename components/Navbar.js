import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <> 
        <ul className={styles.navbar}>
            <div className={styles.select_itens_bar}>
                <Link href={'/campeoes'}><Image src="/lol_icon.png" alt="Lol Logo" width={35} height={35} priority /></Link> 
                <Link href={'/'}> Campeões</Link>
                <Link href={'/'}> Itens</Link>
                <Link href={'/'}> Runas </Link>
            </div>
            <div>
                <a className={styles.button_login}> Entrar</a>
                <a className={styles.button_signup}> Cadastra-se</a>
            </div>
      </ul>
      <div className={styles.divider_navbar}> </div>
        </>
    )
}