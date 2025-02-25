import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useCycle } from "framer-motion";

import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "../../common/useDimensions";
import { MenuItem } from "../MenuItem";
import classNames from "classnames";
import { useWindowSize } from "../../common/useWindowSize";
import viewportCheckerUmd from "viewport-checker";
import { Logo } from "../../components/Logo";
import vkLogo from "../../assets/icons/vk-logo.svg";
import youtubeLogo from "../../assets/icons/youtube.svg";
import Icons from "../../common/icons";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 95% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 95% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};

const menu = [
  {
    name: "Документы",
    link: "#documents",
  },
  {
    name: "Участники",
    link: "#participants",
  },
  {
    name: "Жюри",
    link: "#jury",
  },
  {
    name: "Галерея",
    link: "#gallery",
  },
  {
    name: "Результаты",
    link: "#results",
  },
];

const Navigation = ({ toggleOpen, open }) => (
  <motion.ul variants={variants} className={classNames(styles.mobileUl, {
    [styles.under]: !open
  })}>
    {menu.map(i => (
      <div onClick={() => toggleOpen()} key={i.link}>
        <MenuItem i={i} key={i.link} />
      </div>
    ))}
  </motion.ul>
);


export const Header = () => {
  const { t } = useTranslation();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const width = useWindowSize().width;

  const handleAnchorClick = (hash) => {

    const elementToScroll = document.getElementById(hash?.replace("#", ""));

    if (!elementToScroll) {
      return;
    }

    elementToScroll.parentNode.classList.add('is-visible');
    setActiveHash(hash);

    window.scrollTo({
      top: elementToScroll.parentNode.offsetTop - 120,
      behavior: "smooth"
    });
    window.addEventListener("hashchange", handleAnchorClick);
  }

  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [activeHash, setActiveHash] = useState('intro');

  const hashMap = {
    'documents': "Документы",
    'participants': 'Участники',
    'jury': 'Жюри',
    'gallery': 'Галерея',
    'results': 'Результаты'
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }

  new viewportCheckerUmd('rules', {
    classToAdd: 'visible',
  });

  useEffect(() => {
    const handleScroll = () => {
      const documents = document.getElementById('documents');
      const participants = document.getElementById('participants');
      const jury = document.getElementById('jury');
      const galery = document.getElementById('gallery');
      const results = document.getElementById('results');

      const sections = [
        documents, participants, jury, galery, results
      ];
      const currentScrollY = window.scrollY;

      for (let i = 0; i < 10; i += 1) {
        if (isInViewport(sections[i])) {
          setActiveHash(sections[i].id);
          break;
        }
      }

      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const openVk = () => {
    window.open("https://vk.com/fareastchoirolympic", "_blank");
  };

  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCEPYTlA03JIdsYQmwMdAhbQ/featured",
      "_blank"
    );
  };

  return (
    <div className={styles.full}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.logo} style={{ display: width < 1300 && activeHash !== 'intro' ? 'none' : 'flex' }}>
            <Logo className={styles.logotype} />
          </div>

          <div className={styles.activeHash} style={{ display: width < 1300 && activeHash !== 'intro' ? 'block' : 'none' }}>
            {hashMap[activeHash]}
          </div>

          <menu className={styles.menuWrapper}>
            <ul className={styles.menu}>
              {menu.map((menuItem) => (
                <li key={menuItem.link} className={styles.menuItem}>
                  <Link onClick={() => handleAnchorClick(menuItem.link)} to={menuItem.link} className={classNames({
                    [styles.activeLink]: activeHash === menuItem.link.slice(1)
                  })}>{menuItem.name}</Link>
                </li>
              ))}
            </ul>
            <motion.nav
              initial={false}
              className={styles.mobileNav}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
            >
              <motion.div className={classNames("background", {
                [styles.over]: isOpen
              })} variants={sidebar} />
              <Navigation toggleOpen={toggleOpen} open={isOpen} active={activeHash} />
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
          </menu>

          <div className={styles.networks}>
            <Icons type='vk' className={styles.vk} width={24} height={24} onClick={() => openVk()} />
            <Icons type='youtube' className={styles.youtube} width={24} height={24} onClick={() => openYoutube()} />
          </div>
        </header>
      </div>
    </div>
  );
};
