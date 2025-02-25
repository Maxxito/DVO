import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withLayout } from "../layout/Layout";
import styles from "./PhotoAlbum.module.scss";

import A1 from '../assets/images/BA2A8579-min.jpg';
import A2 from '../assets/images/BA2A8585-min.jpg';
import A3 from '../assets/images/BA2A8601-min.jpg';
import A4 from '../assets/images/BA2A8614-min.jpg';
import A5 from '../assets/images/BA2A8615-min.jpg';
import A6 from '../assets/images/BA2A8620-min.jpg';
import A7 from '../assets/images/BA2A8632-min.jpg';

import A8 from '../assets/images/BA2A8658-min.jpg';
import A10 from '../assets/images/BA2A8703-min.jpg';
import A11 from '../assets/images/BA2A8761-min.jpg';
import A12 from '../assets/images/BA2A8774-min.jpg';
import A13 from '../assets/images/BA2A8814-min.jpg';
import A14 from '../assets/images/BA2A8823-min.jpg';
import A15 from '../assets/images/BA2A8873-min.jpg';
import A16 from '../assets/images/BA2A8883-min.jpg';
import A17 from '../assets/images/BA2A8885-min.jpg';
import A18 from '../assets/images/IMG_3507-min.jpg';
import A19 from '../assets/images/BA2A8972-min.jpg';
import A20 from '../assets/images/BA2A8980-min.jpg';
import A21 from '../assets/images/BA2A9076-min.jpg';
import A22 from '../assets/images/BA2A9085-min.jpg';
import A23 from '../assets/images/BA2A9441-min.jpg';
import A24 from '../assets/images/BA2A9484-min.jpg';
import A25 from '../assets/images/BA2A9485-min.jpg';
import A26 from '../assets/images/BA2A9532-min.jpg';
import A27 from '../assets/images/BA2A9552-min.jpg';
import A28 from '../assets/images/BA2A9556-min.jpg';
import A29 from '../assets/images/BA2A9567-min.jpg';
import A30 from '../assets/images/BA2A9621-min.jpg';
import A31 from '../assets/images/BA2A9647-min.jpg';
import A32 from '../assets/images/BA2A9651-min.jpg';
import A33 from '../assets/images/BA2A9668-min.jpg';
import A34 from '../assets/images/BA2A9675-min.jpg';
import A35 from '../assets/images/BA2A9689-min.jpg';
import A36 from '../assets/images/BA2A9696-min.jpg';
import A37 from '../assets/images/BA2A9703-min.jpg';
import A38 from '../assets/images/BA2A9713-min.jpg';
import A39 from '../assets/images/BA2A9716-min.jpg';
import A40 from '../assets/images/BA2A9718-min.jpg';

import ImageGallery from 'react-image-gallery';

export const PhotoAlbum2 = () => {
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
  ];

  return (
    <div className={styles.wrapper}>
      <ImageGallery items={photos} />
    </div>
  );
};
