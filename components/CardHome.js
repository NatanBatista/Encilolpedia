import styles from '@/styles/CardHome.module.css'

export default function CardHome({imageUrl, title, content}) {
    return (
        <>
            <div className={styles.card_body}>
                <div className={styles.card_body_background} style={{ backgroundImage: `url(${imageUrl})` }}> 
                    
                    <div className={styles.card_mov}>

                        <div className={styles.push_card}>

                            <i class='material-icons'>expand_less</i>

                        </div>

                        <div className={styles.card_title}>
                            
                            {title}

                        </div>
                        
                        <p className={styles.card_content}> { content } </p>
                    </div>
                </div>
            </div>
        </>
    )
}
