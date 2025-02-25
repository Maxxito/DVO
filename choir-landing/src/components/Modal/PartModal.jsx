import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import styles from "../../pages/Home/Home.module.scss";
import { LazyImage } from "../LazyImage/LazyImage";

export const ControlledRefModalPart = ({ item }) => {
    const ref = useRef();
    // const openTooltip = () => ref.current.open();
    const closeTooltip = () => ref.current.close();
    // const toggleTooltip = () => ref.current.toggle();

    const Circle = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" fill="#7B7B83" fill-opacity="0.5" />
            </svg>
        )
    }

    return (
        <div className={styles.participantCard}>
            <LazyImage src={item.image}
                alt={item.short}
                className={styles.participantImage}
            />

            <div className={styles.participantTitle}>
                {item.short}
                <br />
                <span className={styles.participantType}><Circle/> {item.type}</span>
            </div>
        </div>
    )
    // return (
    //     <Popup key={item.long} trigger={
    //         <div  className={styles.participantCard}>
    //             <LazyImage src={item.image}
    //                        alt={item.short}
    //                        className={styles.participantImage}
    //                        width={380}
    //                        height={300} />

    //             <div className={styles.participantTitle}>
    //                 {item.short}
    //             </div>
    //         </div>
    //     } modal>
    //         <div className={styles.participantModal}>
    //             <button className={styles.closeButton} onClick={closeTooltip}>
    //                 X
    //             </button>
    //             <img
    //                 src={item.image}
    //                 alt={item.short}
    //                 className={styles.participantModalImage}
    //                 width={600}
    //                 height={400}
    //             />
    //             <div className={styles.participantModalDesc}>
    //                 {item.bio}
    //             </div>
    //         </div>
    //     </Popup>
    // );
};