import React from "react";

import styles from './VenueCard.module.scss';

export const VenueCard = ({ img, place }) => {

    return (
        <div className={styles.card}>
            <img className={styles.img} src={img} alt='' />

            <div className={styles.place} dangerouslySetInnerHTML={{ __html: place }} />
        </div>
    )
}