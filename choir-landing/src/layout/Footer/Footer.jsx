import React from "react";

import Icons from "../../common/icons";
import { Logo } from "../../components/Logo";
import styles from './Footer.module.scss';

export const Footer = () => {

    const openVk = () => {
        window.open("https://vk.com/fareastchoirolympic", "_blank");
    };

    const openYoutube = () => {
        window.open("https://www.youtube.com/channel/UCEPYTlA03JIdsYQmwMdAhbQ/featured", "_blank");
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.title}>
                        контакты
                    </div>
                    <div className={styles.links}>
                        <div className={styles.doubleRow}>
                            <div className={styles.contact}>
                                <div className={styles.contactTitle}>
                                    Художественный руководитель
                                </div>
                                <div className={styles.info}>
                                    Елена Петухова
                                    <br />
                                    +7 (924) 236 67 03
                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div className={styles.contactTitle}>
                                    Электронная почта
                                </div>
                                <div className={styles.info}>
                                    fareastchoir@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.contactTitle}>
                                Социальные сети
                            </div>
                            <div className={styles.info}>
                                <Icons type='vk' className={styles.vk} width={24} height={24} onClick={() => openVk()}/>
                                <Icons type='youtube' className={styles.youtube} width={24} height={24} onClick={() => openYoutube()}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <Logo className={styles.choir} />
                    <Icons type='rf' className={styles.rf} width={204} height={71}/>
                    <Icons type='sponsor1' className={styles.rf} width={204} height={71}/>
                    <Icons type='sponsor2' className={styles.rf} width={204} height={71}/>
                    <Icons type='sponsor3' className={styles.rf} width={204} height={71}/>
                    <Icons type='sponsor4' className={styles.rf} width={204} height={71}/>
                </div>
                <div className={styles.copyright}>
                © Дальневосточная хоровая олимпиада, 2023
                </div>
            </div>
        </footer>
    )
};