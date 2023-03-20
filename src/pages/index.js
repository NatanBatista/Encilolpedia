import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import CardHome from '../../components/CardHome';

export default function Home() {
  return (
    <>
    <section className={styles.home_page_image_container}>
      <Image className={styles.home_page_image} src='/images/home_page.png' width={960} height={544.5}  alt='home_page_image'/>
      <Image className={styles.home_page_logo} src='/images/leagueoflegends.png' height={207.7} width={320} alt='League of legends'/>
    </section>


    <section className={styles.home_section_conteudo}>
      <CardHome imageUrl='/images/champs.png' title={'Campeões'} content='Os campeões de League of Legends (LoL) são personagens jogáveis do jogo. 
        Cada campeão possui habilidades únicas, um papel específico dentro de uma equipe e um estilo de jogo próprio. Atualmente, existem mais de 150 campeões 
        disponíveis no jogo.'/>
      <CardHome imageUrl='/images/runaFeit.png' title={'Runas'} content='As runas em League of Legends são uma das principais formas de personalizar o seu campeão, 
      permitindo que os jogadores escolham habilidades e bônus que se adequem ao seu estilo de jogo e às necessidades da partida.'/>
      <CardHome imageUrl='/images/itens.png' title={'Itens'} content='Os itens em League of Legends (LoL) são equipamentos que podem ser comprados pelos jogadores 
        durante uma partida para melhorar as habilidades do seu campeão. Existem diversos tipos de itens em LoL, cada um com uma função específica e que pode ser comprado 
        com diferentes combinações de ouro.'/>
    </section>
    </>
  )
}
