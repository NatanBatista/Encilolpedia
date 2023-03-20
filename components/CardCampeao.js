import React from "react";
import styles from "@/styles/CardCampeao.module.css";
import PropTypes from "prop-types";

CardCampeao.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	champName: PropTypes.string.isRequired,
};

export default function CardCampeao( { imageUrl, champName} ) {
	return (
		<>
			<div className={styles.card_champs} style={{ backgroundImage: `url(${imageUrl})` }}>
				<span className={styles.card_title}> 
					{champName} 
				</span>
			</div>
		</>
	);
}