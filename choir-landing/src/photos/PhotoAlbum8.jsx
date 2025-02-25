import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withLayout } from "../layout/Layout";
import styles from "./PhotoAlbum.module.scss";

import A1 from '../assets/images/IMG_2327-min.jpg';
import A2 from '../assets/images/IMG_2344-min.jpg';
import A3 from '../assets/images/IMG_2352-min.jpg';
import A4 from '../assets/images/IMG_2361-min.jpg';
import A5 from '../assets/images/IMG_2409-min.jpg';
import A6 from '../assets/images/IMG_2431-min.jpg';
import A7 from '../assets/images/IMG_2475-min.jpg';

import A8 from '../assets/images/IMG_2510-min.jpg';
import A10 from '../assets/images/IMG_2538-min.jpg';
import A11 from '../assets/images/IMG_2558-min.jpg';
import A12 from '../assets/images/IMG_2595-min.jpg';
import A13 from '../assets/images/IMG_2601-min.jpg';
import A14 from '../assets/images/IMG_2645-min.jpg';
import A15 from '../assets/images/IMG_2652-min.jpg';
import A16 from '../assets/images/IMG_2664-min.jpg';
import A17 from '../assets/images/IMG_2780-min.jpg';
import A18 from '../assets/images/IMG_2926-min.jpg';
import A19 from '../assets/images/IMG_2998-min.jpg';
import A20 from '../assets/images/IMG_3009-min.jpg';
import A21 from '../assets/images/IMG_3019-min.jpg';
import A22 from '../assets/images/IMG_3026-min.jpg';
import A23 from '../assets/images/IMG_3051-min.jpg';
import A24 from '../assets/images/IMG_3080-min.jpg';
import A25 from '../assets/images/IMG_3127-min.jpg';
import A26 from '../assets/images/IMG_3131-min.jpg';
import A27 from '../assets/images/IMG_3166-min.jpg';
import A28 from '../assets/images/IMG_3175-min.jpg';
import A29 from '../assets/images/IMG_3189-min.jpg';
import A30 from '../assets/images/IMG_3207-min.jpg';
import A31 from '../assets/images/IMG_3211-min.jpg';
import A32 from '../assets/images/IMG_3225-min.jpg';
import A33 from '../assets/images/IMG_3230-min.jpg';
import A34 from '../assets/images/IMG_3245-min.jpg';
import A35 from '../assets/images/IMG_3260-min.jpg';
import A36 from '../assets/images/IMG_3284-min.jpg';
import A37 from '../assets/images/IMG_3290-min.jpg';
import A38 from '../assets/images/IMG_3309-min.jpg';
import A39 from '../assets/images/IMG_3333-min.jpg';
import A40 from '../assets/images/IMG_3345-min.jpg';

import A41 from '../assets/images/IMG_3361-min.jpg';
import A42 from '../assets/images/IMG_3406-min.jpg';
import A43 from '../assets/images/IMG_3417-min.jpg';
import A44 from '../assets/images/IMG_3438-min.jpg';
import A45 from '../assets/images/IMG_3448-min.jpg';

import ImageGallery from 'react-image-gallery';

export const PhotoAlbum8 = () => {
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
    {
      original: A33,
      thumbnail: A33
    },
    {
      original: A34,
      thumbnail: A34
    },
    {
      original: A35,
      thumbnail: A35
    },
    {
      original: A36,
      thumbnail: A36
    },
    {
      original: A37,
      thumbnail: A37
    },
    {
      original: A38,
      thumbnail: A38
    },
    {
      original: A39,
      thumbnail: A39
    },
    {
      original: A40,
      thumbnail: A40
    },
    {
      original: A41,
      thumbnail: A41
    },
    {
      original: A42,
      thumbnail: A42
    },
    {
      original: A43,
      thumbnail: A43
    },
    {
      original: A44,
      thumbnail: A44
    },
    {
      original: A45,
      thumbnail: A45
    },
  ];

  return (
    <div className={styles.wrapper}>
      <ImageGallery items={photos} />
    </div>
  );
};
