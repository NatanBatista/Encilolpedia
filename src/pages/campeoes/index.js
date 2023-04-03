import styles from "@/styles/Campeao.module.css";
import React from "react";
import CardCampeao from "../../../components/CardCampeao";

export default function Campeaos() {
	return (
		<>
			<section className={styles.section_up}>
				<div className={styles.container_title}> 
					<div className={styles.title}>
						<span> ESCOLHA SEU </span>
						<strong> CAMPEÃO </strong>
					</div>
					<div className={styles.title_content}>
						<span> 
                            Com mais de 140 Campeões, você 
                            encontrará a combinação perfeita para seu estilo de jogo. 
                            Especialize-se em um estilo ou em todos. 
						</span>
					</div>
				</div>

				<div className={styles.searchBar}>
					<div className={styles.search_by_name}>
						<i className='material-icons'>search</i>
						<p>Buscas</p>
					</div>
					<div className={styles.search_by_class}>
						<ul>
                            TODOS
						</ul>
						<ul>
                            ASSASSINO
						</ul>
						<ul>
                            LUTADORES
						</ul>
						<ul>
                            MAGO
						</ul>
						<ul>
                            ATIRADORES
						</ul>
						<ul>
                            SUPORTES
						</ul>
						<ul>
                            TANQUES
						</ul>
					</div>
					<div className={styles.search_by_select_class}>
						<span>
							TODAS AS FUNÇÕES
						</span>
						<i className='material-icons'>expand_more</i>
					</div>
					<div className={styles.search_by_rank} >
						<span>Dificuldade</span>
						<i className='material-icons'>expand_more</i>
					</div>
				</div>
			</section>

			<section className={styles.section_card_champs}>
				<CardCampeao imageUrl="/images/aatrox.jpg" champName="Aatrox"/>
				<CardCampeao imageUrl="/images/ahri.jpg" champName="Ahri"/>
				<CardCampeao imageUrl="/images/akali.jpg" champName="Akali"/>
				<CardCampeao imageUrl="/images/akshan.jpg" champName="Akshan"/>
				<CardCampeao imageUrl="/images/alistar.jpg" champName="Alistar"/>
				<CardCampeao imageUrl="/images/amumu.jpg" champName="Amumu"/>		
			</section>
		</>
	);
}
