import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <>
            <section className={styles.section_footer}>
                <ul className={styles.main_content}>
                    <div className={styles.content}>
                        <span> Contato </span>
                        <li>
                            <Link href={'https://github.com/NatanBatista/encilolpedia'} target='_blank' rel='noopener noreferrer'> 
                                Github
                            </Link>
                        </li>
                        <li> 
                            <Link href={'https://www.google.com'} target='_blank' rel='noopener noreferrer'> 
                                Email
                            </Link>
                        </li>
                    </div>

                    <div className={styles.content}>
                        <span > Tecnologias </span>
                        <li>
                            <Link href={'https://nextjs.org'} target='_blank' rel='noopener noreferrer'> 
                                Nextjs 13
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://rubyonrails.org'} target='_blank' rel='noopener noreferrer'> 
                                Ruby on Rails
                            </Link>
                        </li>
                    </div>
                </ul>
                <div className={styles.copyright}> 
                    <span> Copyright © 2023 Encilolpédia. All Rights Reserved. </span> 
                </div>
            </section>
        </>
    )
}
