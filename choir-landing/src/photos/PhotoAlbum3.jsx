import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withLayout } from "../layout/Layout";
import styles from "./PhotoAlbum.module.scss";

import A1 from '../assets/images/IMG_1743.jpg';
import A2 from '../assets/images/IMG_1748.jpg';
import A3 from '../assets/images/IMG_1766.jpg';
import A4 from '../assets/images/IMG_1779.jpg';
import A5 from '../assets/images/IMG_1780.jpg';
import A6 from '../assets/images/IMG_1791.jpg';
import A7 from '../assets/images/IMG_1802.jpg';

import A8 from '../assets/images/IMG_1810.jpg';
import A10 from '../assets/images/IMG_1828.jpg';
import A11 from '../assets/images/IMG_1832.jpg';
import A12 from '../assets/images/IMG_1848.jpg';
import A13 from '../assets/images/IMG_1862.jpg';
import A14 from '../assets/images/IMG_1867.jpg';
import A15 from '../assets/images/IMG_1888.jpg';
import A16 from '../assets/images/IMG_1894.jpg';
import A17 from '../assets/images/IMG_1907.jpg';
import A18 from '../assets/images/IMG_1924.jpg';
import A19 from '../assets/images/IMG_1926.jpg';
import A20 from '../assets/images/IMG_1935.jpg';
import A21 from '../assets/images/IMG_1948.jpg';
import A22 from '../assets/images/IMG_1970.jpg';
import A23 from '../assets/images/IMG_1986.jpg';
import A24 from '../assets/images/IMG_1997.jpg';
import A25 from '../assets/images/IMG_2010.jpg';

import ImageGallery from 'react-image-gallery';

export const PhotoAlbum3 = () => {
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
  ];
  return (
    <div className={styles.wrapper}>

      <ImageGallery items={photos} />
    </div>
  );
};
