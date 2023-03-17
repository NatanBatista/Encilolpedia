import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <> 
        <ul className={styles.navbar}>
            <div >
                <Link href={'/'}><Image src="/lol_icon.png" alt="Lol Logo" width={35} height={35} priority /></Link> 
                <Link className={styles.select_itens_bar} href={'/campeoes'}> Campeões</Link>
                <Link className={styles.select_itens_bar} href={'/itens'}> Itens</Link>
                <Link className={styles.select_itens_bar}href={'/runas'}> Runas </Link>
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