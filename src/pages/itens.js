import React from "react";
import styles from "@/styles/Itens.module.css";
import Image from "next/image";
import SearchBar from "../../components/searchBar";

export default function Itens() {
	const images = [
		{source : "/images/DançaMorte.jpeg", Name: "Dança da Morte"},
		{source : "/images/luden.png", Name: "Eco de luden"},
		{source : "/images/dancarinaFantasma.jpeg", Name: "Dançarina Fantasma"},
		{source : "/images/Rabadon.jpeg", Name: "Rabadon"},
		{source : "/images/navori.jpeg", Name: "Navori"},
		{source : "/images/quimiotank.jpeg", Name: "Quimiotanque"},
	];

	const items_search_bar = [
		"TODOS",
		"AP",
		"AD",
		"TANQUE",
		"ASSASSINO"
	];
	return (
		<>
			<section className={styles.section_title}>
				<div className={styles.itens_title}>
					<span>
						<strong>Itens em League of Legends:</strong> <br/>
					Como escolher sabiamente para melhorar <br/>
					seu personagem e vencer a partida.
					</span>
				</div>

				<div className={styles.itens_description}>
					<p>
						Em League of Legends, os itens são elementos fundamentais que os jogadores podem comprar e equipar para melhorar as habilidades e atributos de seus personagens durante uma partida. Existem vários tipos de itens, incluindo itens básicos, itens avançados, itens lendários e itens míticos.
					</p>
					<p>
						Os itens básicos são os mais simples e geralmente são comprados no início da partida. Eles oferecem atributos básicos como dano, velocidade de ataque, poder de habilidade, defesa e regeneração de mana e vida. Esses itens podem ser combinados para formar itens mais poderosos e complexos.
					</p>
					<p>
						Os itens avançados são uma evolução dos itens básicos e são geralmente comprados no meio do jogo. Eles oferecem atributos mais avançados e específicos, como redução de tempo de recarga, penetração de armadura e resistência mágica. Esses itens também podem ser combinados para formar itens ainda mais poderosos.
					</p>
					<p>
						Os itens lendários são itens muito poderosos que geralmente são comprados no final do jogo. Eles oferecem atributos poderosos que podem mudar o curso da partida, como habilidades ativas que podem causar dano em área ou conceder buffs temporários.
					</p>
					<p>
						Os itens míticos são os mais raros e poderosos de todos os itens em League of Legends. Eles oferecem um grande bônus de atributos, bem como uma habilidade única e poderosa que só pode ser usada por personagens que possuem esse item. Além disso, cada personagem pode comprar apenas um item mítico por partida.
					</p>
					<p>
						Existem também itens específicos para cada papel de personagem, como itens de suporte para personagens de suporte, itens de ataque crítico para atiradores e itens de resistência para tanques. A escolha de itens é fundamental para o sucesso em League of Legends, e é importante que os jogadores escolham sabiamente com base nas necessidades de seu personagem e na situação atual da partida.
					</p>
				</div>
				<div className={styles.items}>
					{
						images.map(
							(items, index) => <Image key={index} src={items.source} width={121} height={121} alt={items.Name}/>
						)
					}
				</div>
			</section>
		</>
	);
}