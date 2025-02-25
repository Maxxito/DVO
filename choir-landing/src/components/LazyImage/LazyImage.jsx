import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from "../../pages/Home/Home.module.scss";

export const LazyImage = ({ alt, src,className, width,
                              height }) => (
    <LazyLoadImage
        alt={alt}
        effect="blur"
        wrapperClassName={styles.participantImage}
        width={width}
        height={height}
        src={src} />
);