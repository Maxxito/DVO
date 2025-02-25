import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withLayout } from "../layout/Layout";
import styles from "./PhotoAlbum.module.scss";

import A1 from '../assets/images/IMG_5037-min.jpg';
import A2 from '../assets/images/IMG_5053-min.jpg';
import A3 from '../assets/images/IMG_5149-min.jpg';
import A4 from '../assets/images/IMG_5188-min.jpg';
import A5 from '../assets/images/IMG_5258-min.jpg';
import A6 from '../assets/images/IMG_5278-min.jpg';
import A7 from '../assets/images/IMG_5299-min.jpg';

import ImageGallery from 'react-image-gallery';

export const PhotoAlbum4 = () => {
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
