import React, { useEffect, useRef, useState } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { useAnimation, motion } from "framer-motion";
import Icons from "../common/icons";
import styles from './Layout.module.scss';

const Layout = ({ children }) => {

    const contentRef = useRef(null);
    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        if (contentRef.current) {
            const currentScrollY = contentRef.current.scrollTop
            setScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        if (contentRef.current) {
            controls.start({ opacity: scrollY / contentRef.current.scrollHeight });
        }
    }, [scrollY, controls]);

    const scrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            style={{ position: 'relative', height: '100%', overflow: 'auto' }}
            ref={contentRef}
            onScroll={handleScroll}
        >
            <Header />
            {children}
            <Footer />
            <motion.div animate={controls} initial={{ opacity: 0 }}>
                <button className={styles.upButton} onClick={scrollToTop}>
                    <Icons type='top' /> <br />
                    НАВЕРХ
                </button>
            </motion.div>
        </div>
    )
}

export const withLayout = (Component) => {

    return function withLayoutComponent() {
        return (
            <Layout>
                <Component />
            </Layout>
        );
    };
};