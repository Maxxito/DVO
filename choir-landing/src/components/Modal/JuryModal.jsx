import React, {useRef} from 'react';
import Popup from 'reactjs-popup';
import styles from "../../pages/Home/Home.module.scss";

export const ControlledRefModalJury = ({ trigger, image, bio }) => {
    const ref = useRef();
    const openTooltip = () => ref.current.open();
    const closeTooltip = () => ref.current.close();
    const toggleTooltip = () => ref.current.toggle();

    return (
        <Popup ref={ref} trigger={
            trigger
        } modal>
            <div className={styles.participantModal}>
                <button className={styles.closeButton} onClick={closeTooltip}>
                    X
                </button>
                <img
                    src={image}
                    className={styles.participantModalImage}
                    height={500}
                />
                <div className={styles.participantModalDesc} dangerouslySetInnerHTML={{ __html: bio}}>

                </div>
            </div>
        </Popup>
    );
};