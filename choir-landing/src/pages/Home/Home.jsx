import { useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { withLayout } from "../../layout/Layout";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Slider from "react-slick";
import nextIcon from "../../assets/icons/left.svg";
import pdfLogo from "../../assets/icons/pdf.svg";
import prevIcon from "../../assets/icons/right.svg";
import { useWindowSize } from "../../common/useWindowSize";
import { VenueCard } from "../../components/VenueCard/VenueCard";
import styles from "./Home.module.scss";

import J7 from "../../assets/images/Алешко.jpg";
import J4 from "../../assets/images/Климанов.jpg";
import J8 from "../../assets/images/Сергеевна.jpg";
import J3 from "../../assets/images/Славкин.jpg";
import J1 from "../../assets/images/Соловьев.jpg";
import J5 from "../../assets/images/Тамидарова.jpg";
import J6 from "../../assets/images/Чао.jpg";
import { ControlledRefModalJury, } from "../../components/Modal/JuryModal";
import { ControlledRefModalPart, } from "../../components/Modal/PartModal";


import V5 from "../../assets/images/Евангелическо-Лютеранская церковь.jpg";
import V4 from "../../assets/images/Приморская краевая филармония.jpg";
import V1 from "../../assets/images/Синий зал ДВФУ.jpg";
import V6 from "../../assets/images/Собор.jpg";
import V2 from "../../assets/images/Средний зал.jpg";
import V7 from "../../assets/images/ЦМШ.png";

import A5 from "../../assets/images/BA2A0695-min.jpg";
import A2 from "../../assets/images/BA2A8620-min.jpg";
import A1 from "../../assets/images/IMG_1354.jpg";
import A3 from "../../assets/images/IMG_2010.jpg";
import A6 from "../../assets/images/IMG_2087-min.jpg";
import A8 from "../../assets/images/IMG_3448-min.jpg";
import A7 from "../../assets/images/IMG_5197-min.jpg";
import A4 from "../../assets/images/IMG_5258-min.jpg";

import ReactPlayer from "react-player/youtube";
import { useNavigate } from "react-router-dom";
import S2 from '../../assets/images/S2.jpg';
import S3 from '../../assets/images/S3.jpg';
import S1 from '../../assets/images/Slide1.jpg';

import P103 from '../../assets/images/part/1.jpg';
import P94 from '../../assets/images/part/10.jpg';
import P5 from '../../assets/images/part/100.jpg';
import P4 from '../../assets/images/part/101.jpg';
import P3 from '../../assets/images/part/102.jpg';
import P2 from '../../assets/images/part/103.jpg';
import P1 from '../../assets/images/part/104.jpg';
import P105 from '../../assets/images/part/105.jpg';
import P93 from '../../assets/images/part/11.jpg';
import P92 from '../../assets/images/part/12.jpg';
import P91 from '../../assets/images/part/13.jpg';
import P90 from '../../assets/images/part/14.jpg';
import P89 from '../../assets/images/part/15.jpg';
import P88 from '../../assets/images/part/16.jpg';
import P87 from '../../assets/images/part/17.jpg';
import P86 from '../../assets/images/part/18.jpg';
import P85 from '../../assets/images/part/19.jpg';
import P102 from '../../assets/images/part/2.jpg';
import P84 from '../../assets/images/part/20.jpg';
import P83 from '../../assets/images/part/21.jpg';
import P82 from '../../assets/images/part/22.jpg';
import P81 from '../../assets/images/part/23.jpg';
import P80 from '../../assets/images/part/24.jpg';
import P79 from '../../assets/images/part/25.jpg';
import P78 from '../../assets/images/part/26.jpg';
import P77 from '../../assets/images/part/27.jpg';
import P76 from '../../assets/images/part/28.jpg';
import P75 from '../../assets/images/part/29.jpg';
import P101 from '../../assets/images/part/3.jpg';
import P74 from '../../assets/images/part/30.jpg';
import P73 from '../../assets/images/part/31.jpg';
import P72 from '../../assets/images/part/32.jpg';
import P71 from '../../assets/images/part/33.jpg';
import P70 from '../../assets/images/part/34.jpg';
import P69 from '../../assets/images/part/35.jpg';
import P68 from '../../assets/images/part/36.jpg';
import P67 from '../../assets/images/part/37.jpg';
import P66 from '../../assets/images/part/38.jpg';
import P65 from '../../assets/images/part/39.jpg';
import P100 from '../../assets/images/part/4.jpg';
import P64 from '../../assets/images/part/40.jpg';
import P63 from '../../assets/images/part/41.jpg';
import P62 from '../../assets/images/part/42.jpg';
import P61 from '../../assets/images/part/43.jpg';
import P60 from '../../assets/images/part/44.jpg';
import P59 from '../../assets/images/part/45.jpg';
import P58 from '../../assets/images/part/46.jpg';
import P57 from '../../assets/images/part/47.jpg';
import P56 from '../../assets/images/part/48.jpg';
import P55 from '../../assets/images/part/49.jpg';
import P99 from '../../assets/images/part/5.jpg';
import P54 from '../../assets/images/part/50.jpg';
import P53 from '../../assets/images/part/51.jpg';
import P52 from '../../assets/images/part/52.jpg';
import P51 from '../../assets/images/part/53.jpg';
import P50 from '../../assets/images/part/54.jpg';
import P49 from '../../assets/images/part/55.jpg';
import P48 from '../../assets/images/part/56.jpg';
import P47 from '../../assets/images/part/57.jpg';
import P46 from '../../assets/images/part/58.jpg';
import P45 from '../../assets/images/part/59.jpg';
import P98 from '../../assets/images/part/6.jpg';
import P44 from '../../assets/images/part/60.jpg';
import P43 from '../../assets/images/part/61.jpg';
import P42 from '../../assets/images/part/62.jpg';
import P41 from '../../assets/images/part/63.jpg';
import P40 from '../../assets/images/part/64.jpg';
import P39 from '../../assets/images/part/65.jpg';
import P38 from '../../assets/images/part/66.jpg';
import P37 from '../../assets/images/part/67.jpg';
import P36 from '../../assets/images/part/68.jpg';
import P35 from '../../assets/images/part/69.jpg';
import P97 from '../../assets/images/part/7.jpg';
import P34 from '../../assets/images/part/70.jpg';
import P33 from '../../assets/images/part/71.jpg';
import P32 from '../../assets/images/part/72.jpg';
import P31 from '../../assets/images/part/73.jpg';
import P30 from '../../assets/images/part/74.jpg';
import P28 from '../../assets/images/part/76.jpg';
import P25 from '../../assets/images/part/79.jpg';
import P96 from '../../assets/images/part/8.jpg';
import P24 from '../../assets/images/part/80.jpg';
import P23 from '../../assets/images/part/81.jpg';
import P22 from '../../assets/images/part/82.jpg';
import P21 from '../../assets/images/part/83.jpg';
import P20 from '../../assets/images/part/84.jpg';
import P19 from '../../assets/images/part/85.jpg';
import P18 from '../../assets/images/part/86.jpg';
import P17 from '../../assets/images/part/87.jpg';
import P16 from '../../assets/images/part/88.jpg';
import P15 from '../../assets/images/part/89.jpg';
import P95 from '../../assets/images/part/9.jpg';
import P14 from '../../assets/images/part/90.jpg';
import P13 from '../../assets/images/part/91.jpg';
import P12 from '../../assets/images/part/92.jpg';
import P11 from '../../assets/images/part/93.jpg';
import P10 from '../../assets/images/part/94.jpg';
import P1000 from '../../assets/images/part/95.jpg';
import P9 from '../../assets/images/part/96.jpg';
import P8 from '../../assets/images/part/97.jpg';
import P7 from '../../assets/images/part/98.jpg';
import P6 from '../../assets/images/part/99.jpg';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    observerRefValue = domRef.current;
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

// TODO: connect i18n
const Home = () => {

  const width = useWindowSize().width;
  const [settingsNews, setSettingsNews] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipe: true,
    draggable: true,
    slidesToScroll: 1,
  });

  const [settingsVideos, setSettingsVideos] = useState({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
  });

  const [settingsIntro, setSettingsIntro] = useState({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });


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

  useEffect(() => {
    if (width < 1300 && width > 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 2,
      });
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 2,
      });
      return;
    }

    if (width < 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 1,
      });
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 1,
      });
      return;
    }

    setSettingsNews({
      ...settingsNews,
      slidesToShow: 3,
    });
    setSettingsVideos({
      ...settingsVideos,
      slidesToShow: 3,
    });
  }, [width]);

  const navigate = useNavigate();
  const redirect = (path) => {
    navigate(path);
  };


  const nextSlide = () => {
    const container = document.querySelector(`.${styles.photosAlbums}`);
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      container.scrollLeft += 20;
      scrollAmount += 10;
      if (scrollAmount >= 320) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  const prevSlide = () => {
    const container = document.querySelector(`.${styles.photosAlbums}`);
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      container.scrollLeft -= 20;
      scrollAmount += 10;
      if (scrollAmount >= 320) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  }

  const [fullPart, setFullPart] = useState(false);
  const participants = [
    {
      image: P1,
      short: "Детский хор «Соловушки» (Бикин)",
      type: 'A2',
    },
    {
      image: P2,
      short: "Детско-юношеская хоровая капелла «Школьные годы» (Симферополь)",
      type: 'A2, C1',
    },
    {
      image: P3,
      short: "Камерный хор «Мадригал» (Симферополь)",
      type: 'B3, C1',
    },
    {
      image: P4,
      short: "Детский образцовый фолклорный ансамбль «Хорохоня» (Николаевск-На-Амуре)",
      type: 'C3',
    },
    {
      image: P5,
      short: "Детский хор «Кантилена» им. И.Л. Сарнацкой (Зеленоград)",
      type: 'A2, C1, C2',
    },
    {
      image: P6,
      short: "Вокальный ансамбль «Весёлые нотки» (Ясногорск)",
      type: 'A4',
    },
    {
      image: P7,
      short: "Хор «Brevis» ГБОУ ДО ЦТРиМЭО «Радость» (Москва)",
      type: 'A2, C1, C2',
    },
    {
      image: P8,
      short: "Старший хор ГБОУ ДО ЦТРиМЭО «Радость» (Москва)",
      type: 'A2',
    },

    {
      image: P9,
      short: "«Соловушка» МКУ ДО «ДШИ» (с. Рощино, Приморский край)",
      type: 'A4, C1, C2',
    },
    {
      image: P1000,
      short: "«Кантилена» МБУДО «ЦДМШ» (Южно-Сахалинск)",
      type: 'B1, C1',
    },
    {
      image: P10,
      short: "Специальный хор «Гармония» МБУ ДО «Детская музыкальная школа №1  г. Южно-Сахалинска» (Южно-Сахалинск)",
      type: 'C2',
    },
    {
      image: P11,
      short: "Вокальный ансамбль «Камертон» МБУ ДО «Детская музыкальная школа №1 г. Южно-Сахалинска» (Южно-Сахалинск)",
      type: 'A4',
    },
    {
      image: P12,
      short: "Младший специальный хор «Весёлые нотки» МБУ ДО «Детская музыкальная школа №1 г. Южно-Сахалинска» (Южно-Сахалинск)",
      type: 'A1',
    },
    {
      image: P13,
      short: "Академический народный хор «РОССИЯНЕ» Учебно-методического центра культуры и народного творчества (Чита)",
      type: 'A2',
    },
  
    {
      image: P14,
      short: "Вокальный ансамбль «Элегия» учебно-методического центра культуры и народного творчества (Чита)",
      type: 'B4',
    },

    {
      image: P15,
      short: "Образцовый коллектив хор девушек «Лира»(Санкт-Петербург)",
      type: 'B1, C1',
    },
    {
      image: P16,
      short: "Образцовый академический хор МБУ ДО «Детская музыкальная школа Амурского муниципального района» (Амурск)",
      type: 'A2',
    },
    {
      image: P17,
      short: "Вокальный ансамбль Образцового академического хора МБУ ДО «Детская музыкальная школа Амурского муниципального района» (Амурск)",
      type: 'A4',
    },
    {
      image: P18,
      short: "Амурский камерный хор «Возрождение» (Благовещенск)",
      type: 'B3, C1',
    },
    {
      image: P19,
      short: "Вокальный ансамбль «Fides» КГБПОУ Камчатский колледж искусств (Петропавловск-Камчатский)",
      type: 'B4, C2',
    },
    {
      image: P20,
      short: "Народный коллектив Академический хор «Кредо» (Жуковский)",
      type: 'B2',
    },
    {
      image: P21,
      short: "Вокальный ансамбль «Созвучие» МБУ ДО «ЭДШИ АМР» (пгт. Эльбан, Хабаровский край)",
      type: 'A4',
    },
    {
      image: P22,
      short: "Женский академический хор КГБПОУ «Хабаровский краевой колледж искусств» (Хабаровск)",
      type: 'A4, C1',
    },
    {
      image: P23,
      short: "Студенческий хор «Вместе» ФГБОУ ВО «Забайкальский государственный университет» (Чита)",
      type: 'B2',
    },
    {
      image: P24,
      short: "Хор «Мелодия» МБУДО «Жуковская детская школа искусств №1» (Жуковский)",
      type: 'A2, C2',
    },
    {
      image: P25,
      short: "Образцовый вокальный ансамбль «Светлячок» МКОУ ДО ДШИ (Николаевск-на Амуре)",
      type: 'A4',
    },
    {
      image: P28,
      short: "Образцовый художественный коллектив Министерства образования и науки академический хор «Детство» (Благовещенск)",
      type: 'C3',
    },
    {
      image: P30,
      short: "Фольклорный ансамбль «За реченькой диво» МБУ ДО «Детская школа искусств №3» (Чита)",
      type: 'B4, C1',
    },
    {
      image: P31,
      short: "Архиерейский мужской хор «Знамение» (Иркутск)",
      type: 'B4, C1',
    },
    {
      image: P32,
      short: "Капелла мальчиков и юношей Свердловской государственной детской филармонии (Екатеринбург)",
      type: 'A3, B1, C1, C2',
    },
    {
      image: P33,
      short: "Специальный хор «Капель» МБ ОУ ДО «Детская школа искусств» МО «Холмский городской округ» (Холмск)",
      type: 'A2',
    },
    {
      image: P34,
      short: "Детский народный хор «Златица» МБУДО «Детская школа искусств «Этнос» (Южно=Сахалинск)",
      type: 'C3',
    },
    {
      image: P35,
      short: "Детский народный хор «Цветень» МБУДО «Детская школа искусств «Этнос» (Южно=Сахалинск)",
      type: 'C3',
    },
    {
      image: P36,
      short: "Народный хор «С песней по жизни» (с. Амурзет, Еврейская автономная область)",
      type: 'C4',
    },
    {
      image: P37,
      short: "Народный ансамбль казачьей песни «Гуляй, братки» (с. Амурзет, Еврейская автономная область)",
      type: 'C4',
    },
    {
      image: P38,
      short: "Образцовый вокальный ансамбль «Весёлые нотки» (Хабаровск)",
      type: 'A4',
    },
    {
      image: P39,
      short: "Вокальный ансамбль «Консонанс» МБУ ДО «Детская школа искусств №8» города Иркутска (Иркутск)",
      type: 'A4',
    },
    {
      image: P40,
      short: "Детский академический хор «ЛИРА» МБУ ДО «Детская школа искусств» Вяземского района (Вяземский)",
      type: 'A2',
    },
    {
      image: P41,
      short: "Концертный хор «Крылья» Музыкальная школа имени композитора Евгения Крылатова (Пермь)",
      type: 'A2, C1',
    },
    {
      image: P42,
      short: "«Юные хористы» МБУ ДО «Детская школа искусств р.п.Хор муниципального района имени Лазо» (р.п. Хор, Хабаровский край)",
      type: 'A2',
    },
    {
      image: P43,
      short: "Академический женский хор «Прелюдия» (Хабаровск)",
      type: 'B1',
    },
    {
      image: P44,
      short: "«Живая традиция» МБУ ДО ДШИ Ольгинский МО пгт Ольга (пгт Ольга, Приморский край)",
      type: 'C3',
    },
    {
      image: P45,
      short: "Хор «Montem» Санкт-Петербургский Горный университет императрицы Екатерины II (Санкт-Петербург)",
      type: 'B3, C1, C2',
    },
    {
      image: P46,
      short: "Студенческий хор русской песни «Кросно» КГБПОУ «Хабаровский колледж искусств» (Хабаровск)",
      type: 'C4',
    },
    {
      image: P47,
      short: "Заслуженный творческий коллектив Приморского края Народный студенческий хор «Покров» ДВФУ (Владивосток)",
      type: 'C4',
    },
    {
      image: P48,
      short: "Народный хор «Черемушки» Районный дом культуры пгт Смоляниново (Приморкий край)",
      type: 'B4',
    },
    {
      image: P49,
      short: "Вокальный ансамбль «Музыкальная волна» МКУДО ДШИ №2 (Артём)",
      type: 'A4',
    },
    {
      image: P50,
      short: "Младший хор «Искорки» МБУДО «Детская школа искусств №6 г. Владивостока (Владивосток)",
      type: 'A1',
    },
    {
      image: P51,
      short: "Образцовый хор «Мальчиши» МБУДО «Детская школа искусств №6 г. Владивостока (Владивосток)",
      type: 'A3',
    },
    {
      image: P52,
      short: "Образцовый хор «Радуга» МБУДО «Детская школа искусств №6 г. Владивостока (Владивосток)",
      type: 'A2',
    },
    {
      image: P53,
      short: "Ансамбль русской песни «Белые россы» ГАПОУ «Приморский краевой колледж культуры» (Уссурийск)",
      type: 'C4',
    },
    {
      image: P54,
      short: "Тюнгюлюнский народный хоровой коллектив Республики Саха (Якутия) (с. Тюнгюлю)",
      type: 'B2, B4, C1, C4',
    },
    {
      image: P55,
      short: "Ансамбль народной песни «КАЛИНКА» МКУ ДО «Тернейская ДШИ» (п. Пластун, Приморский край)",
      type: 'C3',
    },
    {
      image: P56,
      short: "Заслуженный коллектив самодеятельного художественного творчества Приморского края Народный хор русской песни (Большой Камень)",
      type: 'C4',
    },
    {
      image: P57,
      short: "Фольклорный ансамбль «Белые росы» (Южно-Сахалинск)",
      type: 'C4',
    },
    {
      image: P58,
      short: "Народный ансамбль русской песни «Берегиня» (Хабаровск)",
      type: 'C4',
    },
    {
      image: P59,
      short: "Хор «Маячок» Детской школы искусств ДВГИИ (Владивосток)",
      type: 'A2',
    },
    {
      image: P60,
      short: "Заслуженный коллектив Приморского края народный хор русской песни «Приморские узоры» (п. Кавалерово)",
      type: 'C4',
    },
    {
      image: P61,
      short: "Народная вокальная группа «Мужской разговор» (п. Кавалерово)",
      type: 'C4',
    },
    {
      image: P62,
      short: "Вокальный ансамбль «Фантазёры «МКУДО «Детская школа искусств № 1» Артемовского городского округа (Артём)",
      type: 'A4',
    },
    {
      image: P63,
      short: "Народный хор «Улыбка» МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'C4',
    },
    {
      image: P64,
      short: "Украинский народный хор им. А. Криля «Горлица» МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'C4',
    },
    {
      image: P65,
      short: "Заслуженный коллектив Приморского края народный хор «Дети войны» МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'C4',
    },
    {
      image: P66,
      short: "Вокальная группа «Русская песня« МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'B4',
    },
    {
      image: P67,
      short: "Народный коллектив любительского художественного творчества «Ансамбль эстрадной песни «Ритмы Ретро»",
      type: 'B4',
    },
    {
      image: P68,
      short: "«Прелестные глазки старший состав» МАУ ДО «Детская музыкальная школа № 6» (Петропавловск-Камчатский)",
      type: 'A4, C1',
    },
    {
      image: P69,
      short: "«Прелестные глазки младший состав» МАУ ДО «Детская музыкальная школа № 6» (Петропавловск-Камчатский)",
      type: 'A4',
    },
    {
      image: P70,
      short: "Образцовый коллектив хор народной песни «Оберег» (Арсеньев)",
      type: 'C3',
    },
    {
      image: P71,
      short: "«Школьный вальс» Детская школа искусств Приморского краевого колледжа искусств (Владивосток)",
      type: 'A2',
    },
    {
      image: P72,
      short: "Ансамбль народной песни «СВЕТОЧ» МКУ ДО «ДШИ» (с. Рощино, Приморский край) ",
      type: 'C3',
    },
    {
      image: P73,
      short: "Любительский самодеятельный коллектив народного творчества ансамбль русской песни «Веренея» (с. Матвеевка, Хабаровский район)",
      type: 'C4',
    },
    {
      image: P74,
      short: "Вокальный ансамбль «Диез» МБУДО «ДШИ ХМР» (с. Чёрная речка, Хабаровский край)",
      type: 'A4',
    },
    {
      image: P75,
      short: "Студия народной песни  «Вьюнок» МАУ ДО г. Хабаровска «Центр эстетического воспитания детей «Отрада» (Хабаровск)",
      type: 'C3',
    },
    {
      image: P76,
      short: "Заслуженный коллектив Приморского края Образцовый ансамбль народной песни «Звонница» (младшая группа) (Владивосток)",
      type: 'C3',
    },
    {
      image: P77,
      short: "Заслуженный коллектив Приморского края Образцовый ансамбль народной песни «Звонница» (старшая группа) (Владивосток)",
      type: 'C3',
    },
    {
      image: P78,
      short: "Ансамбль народной песни «Ярица» ГАПОУ «Приморский краевой колледж искусств» (Владивосток)",
      type: 'C4',
    },
    {
      image: P79,
      short: "Заслуженный коллектив народного творчества образцовый хор народной песни «Млада» (Хабаровск)",
      type: 'C3, C4',
    },
    {
      image: P80,
      short: "Младший хор Заслуженного коллектива ПК образцовой хоровой студии «Камертон» (Владивосток)",
      type: 'A1',
    },
    {
      image: P81,
      short: "Старший хор Заслуженного коллектива ПК образцовой хоровой студии «Камертон» (Владивосток)",
      type: 'C2',
    },
    {
      image: P82,
      short: "Хор мальчиков и юношей Заслуженного коллектива ПК образцовой хоровой студии «Камертон» (Владивосток)",
      type: 'A3',
    },
    {
      image: P83,
      short: "Сводный хор Студии народного творчества «Елань» МАУДО ДЮЦ «Сказка», КДШИ при ХККИ (Хабаровск)",
      type: 'C3',
    },
    {
      image: P84,
      short: "Народный коллектив вокальный ансамбль «Пой, Friend!» (Иркутск)",
      type: 'B3, B4, C1',
    },
    {
      image: P85,
      short: "Серебряные нотки МБУДО «Детская школа искусств №4 г. Владивостока» (Владивосток)",
      type: 'A2',
    },
    {
      image: P86,
      short: "Академический хор Дальневосточного федерального университета (Владивосток)",
      type: 'B2',
    },
    {
      image: P87,
      short: "Ансамбль народной песни «Купаленка» МАУ ДО ЦЭВД «Отрада» (Хабаровск)",
      type: 'С3',
    },
    {
      image: P88,
      short: "Младший хор «Фантазия» МБУДО «ДШИ № 8 им. А. В. Воробьёва г. Владивостока»",
      type: 'A1',
    },
    {
      image: P89,
      short: "Младший хор мальчиков «Like music» Центральная детская музыкальная школа им. Б.Г. Павликовской (Чита)",
      type: 'C4',
    },
    {
      image: P90,
      short: "Хор младших классов «Акварель» МБУ ДО «Городская детская хоровая школа» НГО (Находка)",
      type: 'A1',
    },
    {
      image: P91,
      short: "Хор мальчиков и юношей «Рондо» МБУ ДО «Городская детская хоровая школа» НГО",
      type: 'A3',
    },
    {
      image: P92,
      short: "Ансамбль русской песни «Елань» (Хабаровск)",
      type: 'C4',
    },
    {
      image: P93,
      short: "Наяхинский народный хор имени Семена Гаврильевича Васильева (Усть-Алданаский улус (район), село Балыктах, Республика Саха (Якутия))",
      type: 'B2',
    },
    {
      image: P94,
      short: "Майинский народный хор им. Н.Н. Васильевой (Мегино-Кангаласский улус, с. Майя, Республика Саха (Якутия))",
      type: 'B2',
    },
    {
      image: P95,
      short: "Хор младших классов «Светлячок» МБУДО «Детская школа искусств №1 им. С. Прокофьева г. Владивостока» (Владивосток)",
      type: 'A1',
    },
    {
      image: P96,
      short: "Хор старших классов «Алые паруса» МБУДО «Детская школа искусств №1 им. С. Прокофьева г. Владивостока» (Владивосток)",
      type: 'A2',
    },
    {
      image: P97,
      short: "Народный ансамбль русской песни «Прялица» МБУ Городской Центр Культуры (Большой Камень)",
      type: 'C4',
    },
    {
      image: P98,
      short: "Камерный хор Дальневосточного государственного института искусств (Владивосток)",
      type: 'B3',
    },
    {
      image: P99,
      short: "Младший хор «Веснушки» МБУДО «ДМШ №2 г. Владивостока» (Владивосток)",
      type: 'A1',
    },
    {
      image: P100,
      short: "Старший хор «Весенние голоса» МБУДО «ДМШ №2 г. Владивостока» (Владивосток)",
      type: 'A2',
    },
    {
      image: P101,
      short: "Хор старших классов «Ассоль» МБУДО «ДШИ №3 г. Владивостока»",
      type: 'A2',
    },
    {
      image: P102,
      short: "Хор «Аллегри» МБУ ДО «ДШИ №5» (Владивосток)",
      type: 'A1',
    },
    {
      image: P103,
      short: "Хор «Музыкальный калейдоскоп» МБУДО Детская Школа Искусств №7 (Владивосток)",
      type: 'C2',
    },
    {
      image: P105,
      short: "Сводный хор «Радость» МОГБУ ДО «Ольская детская школа искусств» и ДШИ при ГАПОУ МКИ (п. Ола и г. Магадан)",
      type: 'A2',
    },
  ]

  return (
    <div
      style={{ position: 'relative' }}
      ref={contentRef}
      onScroll={handleScroll}
    >
      <div className={styles.introSection} id={"intro"}>
        <div className={styles.intro}>
          <Slider {...settingsIntro}>
            <div className={styles.slideImage}>
              <img
                src={S1}
                width={'100%'}
                height={'100%'}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S2}
                width={'100%'}
                height={'100%'}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S3}
                width={'100%'}
                height={'100%'}

              />
            </div>
          </Slider>
          <div className={styles.introText}>
            <span className={styles.olympTitle}>
              III Дальневосточная <br /> хоровая олимпиада
            </span>
            <span className={styles.olympDate}>
            27 октября – 1 ноября 2025 <br /> Владивосток
            </span>
          </div>
        </div>
      </div>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <div className={styles.title}>
              <span className={styles.aboutTitle}>
                хоровая олимпиада
              </span>
              <span className={styles.aboutTitleBottom}>
                на Дальнем Востоке
              </span>
            </div>

            <div className={styles.aboutDescription}>
              <div className={styles.left}>
                С 27 октября по 1 ноября 2025 года во Владивостоке пройдет
                III Дальневосточная хоровая олимпиада. Третья хоровая олимпиада -
                это международный конкурс, который включает в себя конкурсные прослушивания в 12 номинациях,
                фестивальные концерты, мастер-классы от членов жюри мирового уровня,
                торжественные церемонии открытия и закрытия, а также незабываемый заряд вдохновения.
              </div>
              <div className={styles.right}>
              Вторая Дальневосточная хоровая Олимпиада стала самым крупным хоровым конкурсом в России,
              включившим в себя 110 хоров с общим количеством  конкурсантов более 2500 человек.
              Вместе с вами мы можем сделать  Олимпиаду доброй традицией и внести небольшой,
              но значимый вклад в поддержку и развитие хорового искусства!
              </div>
            </div>

            <div className={styles.video}>
              <ReactPlayer url='https://www.youtube.com/watch?v=Bjo2Mwu63f0' width={'100%'} height={500} />
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.rules} id={"rules"}>
            <span className={styles.rulesTitle}>ПРОГРАММА</span>
            <div className={styles.rulesContent}>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>КОНКУРС</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <table border="black">
                      <thead className="tableHead">
                        <th>Обозначение</th>
                        <th>
                          Название <br /> категории
                        </th>
                        <th>
                          Возраст <br />
                          участников
                        </th>
                        <th>
                          Количество <br />
                          участников
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>А1</td>
                          <td>Младшие детские хоры</td>
                          <td>7–11 лет</td>
                          <td rowSpan={3}>от 16</td>
                        </tr>
                        <tr>
                          <td>А2</td>
                          <td>Старшие детские хоры</td>
                          <td>11-17 лет</td>
                        </tr>
                        <tr>
                          <td>А3</td>
                          <td>Хоры мальчиков и юношей</td>
                          <td>7–17 лет</td>
                        </tr>
                        <tr>
                          <td>А4</td>
                          <td>Детские вокальные ансамбли</td>
                          <td>7–17 лет</td>
                          <td>6–12</td>
                        </tr>
                        <tr>
                          <td>B1</td>
                          <td>Однородные хоры</td>
                          <td rowSpan={4}>без возрастных ограничений</td>
                          <td rowSpan={2}>от 16</td>
                        </tr>
                        <tr>
                          <td>B2</td>
                          <td>Смешанные хоры</td>
                        </tr>
                        <tr>
                          <td>B3</td>
                          <td>Камерные хоры</td>
                          <td>16-28</td>
                        </tr>
                        <tr>
                          <td>B4</td>
                          <td>Взрослые вокальные ансамбли</td>
                          <td>6–12</td>
                        </tr>
                        <tr>
                          <td>С1</td>
                          <td>Духовная музыка</td>
                          <td rowSpan={2}>без возрастных ограничений</td>
                          <td rowSpan={2}>от 6</td>
                        </tr>
                        <tr>
                          <td>С2</td>
                          <td>Современная музыка</td>
                        </tr>
                        <tr>
                          <td>С3</td>
                          <td>Народная музыка: детские хоры и ансамбли</td>
                          <td>7-17 лет</td>
                          <td>от 6</td>
                        </tr>
                        <tr>
                          <td>С4</td>
                          <td>Народная музыка: взрослые хоры и ансамбли</td>
                          <td>от 17 лет</td>
                          <td>от 6</td>
                        </tr>
                      </tbody>
                    </table>
                    Допускается участие коллективов в нескольких категориях (не
                    более трех).
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>ФЕСТИВАЛЬ</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      В рамках Дальневосточной хоровой олимпиады пройдут торжественные церемонии открытия и закрытия, а также фестивальные концерты участников на лучших площадках Владивостока.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>МАСТЕР-КЛАССЫ</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      В рамках Дальневосточной хоровой олимпиады пройдут торжественные церемонии открытия и закрытия, а также фестивальные концерты участников на лучших площадках Владивостока.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>КУРСЫ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Допускается участие в мероприятиях Олимпиады всех желающих в качестве слушателей с получением удостоверения о прохождении курсов повышения квалификации в объеме 36 часов. Участники курсов получат возможность посещения всех конкурсных прослушиваний, фестивальных концертов, мастер-классов, церемоний открытия и закрытия Олимпиады, круглого стола для руководителей.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.documents} id={"documents"}>
            <span className={styles.documentsTitle}>документы</span>
            <div className={styles.documentsContent}>
              <div className={styles.documentsButtons}>
                <div className={styles.documentsButton}>
                  <a href="/ПОЛОЖЕНИЕ 2023.pdf" download={"ПОЛОЖЕНИЕ 2023.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    ПОЛОЖЕНИЕ ОБ <br /> ОЛИМПИАДЕ
                  </a>
                </div>
                <div className={styles.documentsButton}>
                  <a href="/РЕГЛАМЕНТ УЧАСТИЯ 2023.pdf" download={"РЕГЛАМЕНТ УЧАСТИЯ 2023.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    Регламент <br /> участия и пребывания
                  </a>
                </div>
                <div className={styles.downloadProgram}>
                  <a href="/ВСЕ.pdf" download={"Расписание.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    ОБЩЕЕ РАСПИСАНИЕ
                  </a>
              </div>
              </div>
              Приём заявок окончен.
            </div>
          </div>
        </div>

      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.participants} id="participants">
            <div className={styles.paragraphTitle}>участники 2023</div>

            <div
              className={styles.participantsTable}
              style={{ maxHeight: fullPart ? "100%" : "1000px" }}
            >
              {participants.map((item) => (
                <ControlledRefModalPart item={item} />
              ))}
            </div>

            <div
              className={styles.moreButton}
              onClick={() => {
                if (fullPart) {
                  const elementToScroll = document.getElementById(
                    "#participants"?.replace("#", "")
                  );
                  window.scrollTo({
                    top: elementToScroll.offsetTop - 100,
                    behavior: "smooth",
                  });
                }
                setFullPart(!fullPart);
              }}
            >
              <button>{fullPart ? "СКРЫТЬ" : "ПОКАЗАТЬ ВСЕХ"}</button>
            </div>
          </div>
        </div>

      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.about} id="jury">
          <div className={styles.juryTitle} style={{textAlign:'left'}}>ЖЮРИ</div>
          <div className={styles.left} style={{textAlign:'left'}}>Cписок жюри будет обновлен позже</div>
            <div className={styles.juryList}>

              

              {/*<ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J1} width={265} height={345} alt="jury" />
                    <span className={styles.juryName}>
                      Александр Соловьев
                    </span>
                  </div>
                }
                image={J1}
                bio="Александр Владиславович Соловьёв (г.Москва, Россия)
                Председатель жюри Второй Дальневосточной хоровой олимпиады

                Александр Владиславович Соловьёв – художественный руководитель Камерного хора Московской консерватории, Тульского государственного хора, руководитель Ассоциации народных и хоровых коллективов Российского музыкального союза, и.о.ректора Академии хорового искусства имени В.С.Попова.

                В 2002 окончил с отличием дирижёрский факультет Московской государственной консерватории имени П. И. Чайковского (класс проф. С.С. Калинина), в 2004 – аспирантуру там же (руководитель – народный артист РФ, профессор Б.Г. Тевлин), участвовал в мастер-классах со многими крупными хоровыми и симфоническими дирижерами, среди них К. Аренг (Эстония), Э. Эриксон (Швеция).
                В 2012 году, после безвременной кончины основателя коллектива, профессора Б.Г. Тевлина, возглавил в качестве художественного руководителя и главного дирижёра Камерный хор Московской консерватории. В качестве хормейстера подготовил ряд программ для Г. Рождественского, Ю. Башмета, В. Гергиева, М. Плетнёва, В. Юровского, А. Лазарева, В. Полянского, А. Сладковского, А. Мустонена.
                Александр Соловьёв выступает в качестве дирижёра специальных проектов на сценах Государственного академического Большого театра России; за большой вклад в развитие культуры награжден Почетной грамотой Министерства культуры РФ; в 2019 Александру Соловьёву присвоено учёное звание – профессор.
                Официальный представитель России, член Всемирного хорового совета «World Choir Games» и жюри международной ассоциации «Интеркультур». Председатель жюри Международного открытого фестиваля-конкурса молодых музыкантов «Vivat Musica!», инициатор проведения Международного конкурса хоровых дирижёров имени И.А. Михайловского в Туле.
                Удостоен гранта Президента Российской Федерации в области культуры и искусства; звания лауреата Премии Правительства Москвы, Премии Министерства обороны РФ.
                А.В. Соловьёв – художественный руководитель фестивалей Московской консерватории: «Международный Осенний хоровой имени профессора Б.Г. Тевлина», «Дню Победы посвящается…», «Запечатленный ангел» (в честь 85-летию Родиона Щедрина), «Рождённые Россией».
                Ведёт активную просветительскую и общественную деятельность, возглавляя Фонд развития творческих инициатив, Ассоциацию народных и хоровых коллективов Гильдии академического исполнительства Российского музыкального союза, а также являясь членом президиума Московского музыкального общества, Международного союза музыкальных деятелей, членом Совета Союза композиторов России, членом Союза театральных деятелей РФ, Союза журналистов Москвы.
                "
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J4} alt="jury" />
                    <span className={styles.juryName}>
                      Семён Климанов
                    </span>
                  </div>
                }
                image={J4}
                bio="Семён Михайлович Климанов (Минск, Беларусь)
                Семён Михайлович Климанов – заведующий кафедрой хорового дирижирования Белорусской государственной академии музыки (Минск), художественный руководитель Хора мальчиков и юношей имени Игоря Андреевича Журавленко, сопредседатель Ассоциации руководителей хоров мальчиков и юношей Белорусского союза музыкальных деятелей, член оргкомитета республиканских конкурсов.
                Семён Климанов окончил Белорусскую государственной академии музыки (класс народного артиста СССР, профессора В.В.Ровдо). Постоянно принимает участие в работе жюри республиканских и международных творческих конкурсов, смотров, отборов, проводимых как в Республике Беларусь, так и за ее пределами. Проводит дирижерские мастер-классы, тренинги и открытые лекции. Является сопредседателем Ассоциации руководителей хоров мальчиков и юношей Белорусского союза музыкальных деятелей, членом оргкомитета республиканских конкурсов.
                С 2020 года в качестве художественного руководителя Хора мальчиков и юношей имени Игоря Андреевича Журавленко осуществляет разнообразную концертную деятельность, взаимодействует с видными музыкантами и хоровыми коллективами Беларуси, России и других стран. Хор под руководством С.Климанова является победителем национальных и международных конкурсов, приглашается к участию в ярких творческих фестивалях. С 2022 года является заведующим кафедрой хорового дирижирования Белорусской государственной академии музыки. 
                Ведет активную научную деятельность: является автором ряда научных публикаций, участником международных научно-практических конференций.
"
              />

              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J3} alt="jury" />
                    <span className={styles.juryName}>
                      Михаил Славкин
                    </span>
                  </div>
                }
                image={J3}
                bio="Михаил Исаакович Славкин (г.Москва, Россия)
                Михаил Исаакович Славкин – хормейстер, композитор, дирижёр, член Союза композиторов России, заслуженный работник культуры РФ, лауреат Международных конкурсов, художественный руководитель Молодёжного хора «Богородская капелла» (Москва).
                На протяжении 35 лет являлся художественным руководителем Детской хоровой студии Союза композиторов России «Преображение». Возглавлял Камерный хор «Останкино», Детский хоровой театр «Ключ», Детскую оперную студию Московского Государственного Академического Детского музыкального театра им. Н.И. Сац.
                Является членом жюри международной ассоциации «Интеркультур», председателем жюри Международного конкурса хоров им. Яна Сибелиуса (Турку, Финляндия). Президент Фонда развития детского творчества «Преображение».
                Как композитор работает в жанре детской песни и хоровой музыки, а также в области музыкального театра. Автор многих сборников песен и хоров для детей и юношества.
                "
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J5} alt="jury" />
                    <span className={styles.juryName}>
                      Миляуша Таминдарова
                    </span>
                  </div>
                }
                image={J5}
                bio="Миляуша Амировна Таминдарова (г.Казань, Россия)
                Миляуша Амировна Таминдарова – народная артистка Республики Татарстан, основатель и бессменный руководитель Государственного камерного хора Республики Татарстан. По праву считается одним из ярчайших деятелей в сфере хорового искусства не только Республики Татарстан, но и России в целом. Обладающая прекрасным меццо-сопрано, яркий самобытный дирижёр, она во всех аспектах своей деятельности проявила себя как инициативная творческая личность с индивидуальным оригинальным слышанием исполняемых произведений.
                С 1994 года Миляуша Таминдарова руководила хором и заведовала отделением хорового дирижирования в Казанском музыкальном училище им. Аухадеева. Более двадцати лет преподавала в Казанской консерватории на кафедре хорового дирижирования, возглавляла хор оперной студии при консерватории. Помимо этого в настоящее время Миляуша Таминдарова возглавляет республиканское отделение Всероссийского хорового общества.
                За годы руководства Миляуши Таминдаровой Государственным камерным хором Татарстана – коллектив стал постоянным участником всех наиболее значимых республиканских культурных мероприятий, включая церемонии открытия и закрытия XXVII Всемирной летней Универсиады 2013 года, культурную программу Чемпионата мира по футболу FIFA 2018 и других масштабных спортивных и культурных мероприятий республики.
                Многочисленные достижения и заслуги Миляуши Таминдаровой неоднократно были отмечены на самом высоком уровне. В 2007 году ей присвоено звание «Заслуженный деятель искусств Республики Татарстан», в 2011 году «Профессионал года», в 2021 году присвоено почётное звание «Народный артист Республики Татарстан».
"
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J6} alt="jury" />
                    <span className={styles.juryName}>
                      Ван Чао
                    </span>
                  </div>
                }
                image={J6}
                bio="Ван Чао (г.Шанхай, Китай)
                Ван Чао – постоянный генеральный секретарь Хорового комитета китайских университетов, директор Китайского детского хорового фестиваля, директор Хорового саммита Китайских университетов, профессор педагогического колледжа Цзыбо, художественный руководитель хора Шанхайского педагогического университета.
                Ван Чао выступал в качестве члена жюри 3-го Международного конкурса хорового дирижирования имени Б.Г. Тевлина, 15-го и 16-го Китайских международных хоровых фестивалей, был главным режиссером 15-го Китайского хорового фестиваля, директором Китайско-Российского международного хорового семинара. Кроме того Ван Чао является членом экспертного комитета Венского международного молодежного музыкального фестиваля.
                Дирижерские и композиторские работы Ван Чао получили 29 международных наград  и 34 награды китайских конкурсов. Среди наиболее значимых работ можно выделить произведения для солистов, хора, а также симфонию «Гэн Цзишан», симфоническую поэму «Свет», фортепианную сюиту «Сцена детства» и многие другие. Подготовленный им «Сборник выдающихся хоровых произведений для колледжей и университетов» стал ведущим учебником в Китае.
                "
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J7} alt="jury" />
                    <span className={styles.juryName}>
                      Елена Алешко
                    </span>
                  </div>
                }
                image={J7}
                bio="Елена Ивановна Алешко – заслуженный педагог Сахалинской области, заслуженный работник культуры Российской Федерации, руководитель детского народного хора старших классов «Жар-птица», детского народного хора младших классов «Каравай» Детской школы искусств «Этнос» и фольклорного ансамбля «Белые росы» Сахалинского колледжа искусств, заведующая кафедрой народного хорового исполнительства Сахалинского колледжа искусств.
                Елена Алешко является преподавателем сольного и хорового народного пения, русского музыкального фольклора, расшифровки народной песни, методики преподавания творческих дисциплин. Автор многочисленных научно-исследовательских и учебно-методических пособий и статей. Собиратель фольклора дальневосточных переселенцев. Член жюри вокальных и хоровых конкурсов областных и межрегиональных уровней. Член Российской общественной академии голоса.
                Награждена почетными грамотами и благодарностями Губернатора и Правительства Сахалинской области, Министерства культуры РФ, Российского профсоюза работников культуры и другими.
                "
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J8} alt="jury" />
                    <span className={styles.juryName}>
                      Татьяна Сергеева
                    </span>
                  </div>
                }
                image={J8}
                bio="
                Татьяна Викторовна Сергеева – преподаватель Приморского краевого колледжа искусств отделения «Сольное и хоровое народное пение», лауреат всероссийских и международных конкурсов, выпускница Российской академии музыки им. Гнесиных.
                Председатель жюри фестивалей и конкурсов, руководитель мастер – классов всероссийского уровня. Имеет опыт в организации и проведении студенческих научно-практических конференций, курсов повышения квалификации, мастер-классов по традиционной хореографии, народному вокалу, в том числе с участием известных специалистов в области народной культуры.
                С 2011 по 2016 года преподаватель Хабаровского краевого колледжа искусств. С 2011 по 2015 год солистка военного оркестра штаба Восточного военного округа, участница ансамбля народной песни «Елань». С 2016 года преподаватель Приморского краевого колледжа искусств города Владивосток на отделении «Сольное и хоровое народное пение».
                Организатор и участник экспедиций в Орловскую, Иркутскую области, республику Бурятию, Приморский край. Вместе со студентами и выпускниками колледжа искусств проводит просветительскую деятельность для жителей Приморского края посредством организаций различных мероприятий, создание лекционных концертных программ, музыкальных спектаклей. Под руководством Татьяны Сергеевой учащиеся и выпускники отделения проводят исследовательскую, экспедиционную работу местной народной традиции, стараясь зафиксировать ее как можно полнее, внедрить в образовательный процесс и исполнить записанные песенные образцы. Студенты её класса  постоянно участвуют в профессиональных вокальных конкурах от краевого до международного уровня.
                Отмечена многочисленными почетными грамотами, благодарностями от департамента культуры Приморского края, Хабаровского края, Иркутской области. 
                "
              />*/}
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className={styles.bgWrapper}>
        <FadeInSection>
          <div className={styles.bgWrapper}>
            <div className={styles.venues} id="venues">
              <div className={styles.venuesTitle}>
                <div className={styles.title}>
                  места <span className={styles.blue}>проведения</span> <br /> олимпиады
                </div>
                <div className={styles.places}>
                  <VenueCard img={V1} place='Концертный зал "Синий" ДВФУ' />
                  <VenueCard img={V2} place="Конференц-зал «Средний» ДВФУ" />
                </div>
              </div>

              <div className={styles.venuesList}>

                <div className={styles.places}>
                  <VenueCard img={V1} place='Концертный зал "Синий" ДВФУ' />
                  <VenueCard img={V2} place="Конференц-зал «Средний» ДВФУ" />
                </div>
                <VenueCard img={V4} place="Приморская краевая филармония" />
                <VenueCard
                  img={V5}
                  place="Евангелическо-Лютеранская <br/> церковь св. Павла"
                />
                <VenueCard
                  img={V6}
                  place="Католический собор <br/> Пресвятой Богородицы"
                />
                <VenueCard
                  img={V7}
                  place="Центральная Музыкальная Школа<br/>филиал «Приморский»"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.bgWrapper}>
            <div className={styles.photos} id="gallery">
              <div className={styles.galleryTitle}>
                <div className={styles.paragraphTitle}>Галерея</div>
                <div className={styles.galleryButtons}>
                  <button className={styles.prev}>
                    <img alt="pdf" id="prev" src={prevIcon} width={36} height={36} onClick={prevSlide} />
                  </button>
                  <button className={styles.next}>
                    <img alt="pdf" id='next' src={nextIcon} width={36} height={36} onClick={nextSlide} />
                  </button>
                </div>
              </div>

              <div className={styles.photosAlbums}>
                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Церемония открытия Олимпиады")}
                >
                  <img src={A1} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Церемония открытия Олимпиады
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Конкурсные прослушивания 26.10")}
                >
                  <img src={A2} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Конкурсные прослушивания 26.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Концерт народных хоров в Филармонии 26.10")}
                >
                  <img src={A3} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Концерт народных хоров в Филармонии 26.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Концерт академических хоров в Мариинском театре 26.10")}
                >
                  <img src={A4} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Концерт академических хоров в Мариинском театре 26.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Конкурсные прослушивания 27.10")}
                >
                  <img src={A5} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Конкурсные прослушивания 27.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Дружеский концерт 27.10")}
                >
                  <img src={A6} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Дружеский концерт 27.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Концерт духовной музыки 28.10")}
                >
                  <img src={A7} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Концерт духовной музыки 28.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Церемония закрытия")}
                >
                  <img src={A8} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Церемония закрытия
                  </div>
                </div>
              </div>


              <div className={styles.center}>
                <a className={styles.primaryButton} href="/gallery">
                  перейти в галерею
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="results" className={styles.resultsWrapper}>
            <div className={styles.resultsTitle}><span className={styles.blue}>СКАЧАТЬ</span> РЕЗУЛЬТАТЫ</div>

            <div className={styles.results}>
              <div className={styles.downloadResult}>
                <a href="/Результаты2.pdf" download={"Результаты-2023.pdf"}>
                  2023
                </a>
                <a href="/Результаты1.pdf" download={"Результаты-2022.pdf"}>
                  2022
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default withLayout(Home);
