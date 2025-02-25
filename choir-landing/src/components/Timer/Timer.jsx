import React from "react";
import { ms } from "../../common/ms";
import styles from './Timer.module.scss';

// TODO: i18n
const Timer = ({ time }) => {

    const { day, hour, minute, second } = ms(time);

    return (
        <div className={styles.timer}>
            <div className={styles.day}>
                <span className={styles.time}>
                    {day}
                </span>
                <span className={styles.text}>
                    ДНЕЙ
                </span>
            </div>
            <div className={styles.hour}>
            <span className={styles.time}>
            {hour}
                </span>
                <span className={styles.text}>
                    ЧАСОВ
                </span>
            </div>
            <div className={styles.minute}>
            <span className={styles.time}>
            {minute}
                </span>
                <span className={styles.text}>
                    МИНУТ
                </span>
            </div>
            <div className={styles.second}>
            <span className={styles.time}>
            {second}
                </span>
                <span className={styles.text}>
                    СЕКУНД
                </span>
            </div>
               
        </div>
    )
};

export default Timer;