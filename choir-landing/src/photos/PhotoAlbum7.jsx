import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withLayout } from "../layout/Layout";
import styles from "./PhotoAlbum.module.scss";

import A1 from '../assets/images/0N4A7974-min.jpg';
import A2 from '../assets/images/0N4A7979-min.jpg';
import A3 from '../assets/images/0N4A7986-min.jpg';
import A4 from '../assets/images/0N4A7993-min.jpg';
import A5 from '../assets/images/0N4A8003-min.jpg';
import A6 from '../assets/images/0N4A8008-min.jpg';
import A7 from '../assets/images/0N4A8010-min.jpg';

import A8 from '../assets/images/0N4A8024-min.jpg';
import A10 from '../assets/images/0N4A8035-min.jpg';
import A11 from '../assets/images/0N4A8045-min.jpg';
import A12 from '../assets/images/0N4A8055-min.jpg';
import A13 from '../assets/images/0N4A8068-min.jpg';
import A14 from '../assets/images/0N4A8070-min.jpg';
import A15 from '../assets/images/0N4A8073-min.jpg';
import A16 from '../assets/images/0N4A8089-min.jpg';
import A17 from '../assets/images/0N4A8095-min.jpg';
import A18 from '../assets/images/0N4A8128-min.jpg';
import A19 from '../assets/images/0N4A8144-min.jpg';
import A20 from '../assets/images/0N4A8150-min.jpg';
import A21 from '../assets/images/0N4A8161-min.jpg';
import A22 from '../assets/images/0N4A8186-min.jpg';
import A23 from '../assets/images/0N4A8192-min.jpg';
import A24 from '../assets/images/0N4A8202-min.jpg';
import A25 from '../assets/images/0N4A8206-min.jpg';
import A26 from '../assets/images/0N4A8212-min.jpg';
import A27 from '../assets/images/0N4A8217-min.jpg';
import A28 from '../assets/images/0N4A8227-min.jpg';
import A29 from '../assets/images/0N4A8237-min.jpg';
import A30 from '../assets/images/IMG_5180-min.jpg';
import A31 from '../assets/images/IMG_5191-min.jpg';
import A32 from '../assets/images/IMG_5197-min.jpg';

import ImageGallery from 'react-image-gallery';

export const PhotoAlbum7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const photos = [
    {
      original: A1,
      thumbnail: A1
    },
    {
      original: A2,
      thumbnail: A2
    },
    {
      original: A3,
      thumbnail: A3
    },
    {
      original: A4,
      thumbnail: A4
    },
    {
      original: A5,
      thumbnail: A5
    },
    {
      original: A6,
      thumbnail: A6
    },
    {
      original: A7,
      thumbnail: A7
    },
    {
      original: A8,
      thumbnail: A8
    },
    {
      original: A10,
      thumbnail: A10
    },
    {
      original: A11,
      thumbnail: A11
    },
    {
      original: A12,
      thumbnail: A12
    },
    {
      original: A13,
      thumbnail: A13
    },
    {
      original: A14,
      thumbnail: A14
    },
    {
      original: A15,
      thumbnail: A15
    },
    {
      original: A16,
      thumbnail: A16
    },
    {
      original: A17,
      thumbnail: A17
    },
    {
      original: A18,
      thumbnail: A18
    },
    {
      original: A19,
      thumbnail: A19
    },
    {
      original: A20,
      thumbnail: A20
    },
    {
      original: A21,
      thumbnail: A21
    },
    {
      original: A22,
      thumbnail: A22
    },
    {
      original: A23,
      thumbnail: A23
    },
    {
      original: A24,
      thumbnail: A24
    },
    {
      original: A25,
      thumbnail: A25
    },
    {
      original: A26,
      thumbnail: A26
    },
    {
      original: A27,
      thumbnail: A27
    },
    {
      original: A28,
      thumbnail: A28
    },
    {
      original: A29,
      thumbnail: A29
    },
    {
      original: A30,
      thumbnail: A30
    },
    {
      original: A31,
      thumbnail: A31
    },
    {
      original: A32,
      thumbnail: A32
    },
  ];

  const navigate = useNavigate();
  const onMain = () => {
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <ImageGallery items={photos} />
    </div>
  );
};
