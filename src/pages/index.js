import Image from "next/image";
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
    <section className={styles.home_page_session_image}>
      <div className={styles.home_page_image_container}>
        <Image className={styles.home_page_image} src='/images/home_page.png' width={960} height={544.5}  alt='home_page_image'/>
        <Image className={styles.home_page_logo} src='/images/leagueoflegends.png' height={207.7} width={320}/>

      </div>
    </section>
    <div className={styles.text_about}>
      <p> Uma enciclopédia que busca trazer 
        informações sobre campeões, builds e runas e 
        lore de cada campeão de runeterra.
        </p>
        <p> Uma enciclopédia que busca trazer 
        informações sobre campeões, builds e runas e 
        lore de cada campeão de runeterra.
        </p>
        <p> Uma enciclopédia que busca trazer 
        informações sobre campeões, builds e runas e 
        lore de cada campeão de runeterra.
        </p>
        <p> Uma enciclopédia que busca trazer 
        informações sobre campeões, builds e runas e 
        lore de cada campeão de runeterra.
        </p>
        <p> Uma enciclopédia que busca trazer 
        informações sobre campeões, builds e runas e 
        lore de cada campeão de runeterra.
        </p>
    </div>
    </>
  )
}