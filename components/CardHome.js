import styles from "@/styles/CardHome.module.css";
import React from "react";
import PropTypes from "prop-types";


CardHome.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
  

export default function CardHome({ imageUrl, title, content }) {
	return (
		<>
			<div className={styles.card_body}>
				<div className={styles.card_body_background} style={{ backgroundImage: `url(${imageUrl})` }}> 
                    
					<div className={styles.card_mov}>

						<div className={styles.push_card}>

							<i className='material-icons'>expand_less</i>

						</div>

						<div className={styles.card_title}>
                            
							{title}

						</div>
                        
						<p className={styles.card_content}> { content } </p>
					</div>
				</div>
			</div>
		</>
	);
}
