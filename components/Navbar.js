import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'

export default function NavBar() {
    return (
        <> 
        <ul className={styles.navbar}>
            <div className={styles.select_itens_bar}>
            <a><Image src="/lol_icon.png" alt="Lol Logo" width={35} height={35} priority /></a>
            <a> Campeões</a>
            <a> Itens</a>
            <a> Runas </a>
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