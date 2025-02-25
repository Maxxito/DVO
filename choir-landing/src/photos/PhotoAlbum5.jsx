import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { withLayout } from "../layout/Layout";
import styles from "./PhotoAlbum.module.scss";

import A1 from '../assets/images/BA2A0205-min.jpg';
import A2 from '../assets/images/BA2A0226-min.jpg';
import A3 from '../assets/images/BA2A0248-min.jpg';
import A4 from '../assets/images/BA2A0260-min.jpg';
import A5 from '../assets/images/BA2A0262-min.jpg';
import A6 from '../assets/images/BA2A0275-min.jpg';
import A7 from '../assets/images/BA2A0280-min.jpg';

import A8 from '../assets/images/BA2A0299-min.jpg';
import A10 from '../assets/images/BA2A0302-min.jpg';
import A11 from '../assets/images/BA2A0312-min.jpg';
import A12 from '../assets/images/BA2A0337-min.jpg';
import A13 from '../assets/images/BA2A0357-min.jpg';
import A14 from '../assets/images/BA2A0337-min.jpg';
import A15 from '../assets/images/BA2A0366-min.jpg';
import A16 from '../assets/images/BA2A0376-min.jpg';
import A17 from '../assets/images/BA2A0407-min.jpg';
import A18 from '../assets/images/BA2A0430-min.jpg';
import A19 from '../assets/images/BA2A0432-min.jpg';
import A20 from '../assets/images/BA2A0451-min.jpg';
import A21 from '../assets/images/BA2A0461-min.jpg';
import A22 from '../assets/images/BA2A0477-min.jpg';
import A23 from '../assets/images/BA2A0530-min.jpg';
import A24 from '../assets/images/BA2A0540-min.jpg';
import A25 from '../assets/images/BA2A0546-min.jpg';
import A26 from '../assets/images/BA2A0551-min.jpg';
import A27 from '../assets/images/BA2A0552-min.jpg';
import A28 from '../assets/images/BA2A0563-min.jpg';
import A29 from '../assets/images/BA2A0579-min.jpg';
import A30 from '../assets/images/BA2A0589-min.jpg';
import A31 from '../assets/images/BA2A0598-min.jpg';
import A32 from '../assets/images/BA2A0626-min.jpg';
import A33 from '../assets/images/BA2A0629-min.jpg';
import A34 from '../assets/images/BA2A0639-min.jpg';
import A35 from '../assets/images/BA2A0672-min.jpg';
import A36 from '../assets/images/BA2A0675-min.jpg';
import A37 from '../assets/images/BA2A0695-min.jpg';
import A38 from '../assets/images/BA2A0713-min.jpg';
import A39 from '../assets/images/BA2A0724-min.jpg';
import A40 from '../assets/images/BA2A0728-min.jpg';

import A41 from '../assets/images/BA2A0745-min.jpg';
import A42 from '../assets/images/BA2A0768-min.jpg';
import A43 from '../assets/images/BA2A0775-min.jpg';
import A44 from '../assets/images/BA2A0805-min.jpg';
import A45 from '../assets/images/BA2A0822-min.jpg';
import A46 from '../assets/images/BA2A0892-min.jpg';
import A47 from '../assets/images/BA2A0926-min.jpg';

import A48 from '../assets/images/BA2A0942-min.jpg';
import A49 from '../assets/images/BA2A0948-min.jpg';
import A50 from '../assets/images/BA2A0962-min.jpg';
import A51 from '../assets/images/BA2A1001-min.jpg';
import A52 from '../assets/images/BA2A1013-min.jpg';
import A53 from '../assets/images/BA2A1049-min.jpg';
import A54 from '../assets/images/BA2A1076-min.jpg';
import A55 from '../assets/images/BA2A1085-min.jpg';
import A56 from '../assets/images/BA2A1096-min.jpg';
import A57 from '../assets/images/BA2A1103-min.jpg';
import A58 from '../assets/images/BA2A1105-min.jpg';
import A59 from '../assets/images/BA2A1138-min.jpg';
import A60 from '../assets/images/BA2A1161-min.jpg';
import A61 from '../assets/images/BA2A1175-min.jpg';
import A62 from '../assets/images/BA2A1197-min.jpg';
import A63 from '../assets/images/BA2A1229-min.jpg';
import A64 from '../assets/images/BA2A1237-min.jpg';
import A66 from '../assets/images/BA2A1250-min.jpg';
import A67 from '../assets/images/BA2A1288-min.jpg';
import A68 from '../assets/images/BA2A1309-min.jpg';
import A69 from '../assets/images/BA2A1323-min.jpg';
import A70 from '../assets/images/BA2A1329-min.jpg';
import A71 from '../assets/images/BA2A1335-min.jpg';
import A72 from '../assets/images/BA2A1350-min.jpg';
import A73 from '../assets/images/BA2A1368-min.jpg';
import A74 from '../assets/images/BA2A1387-min.jpg';
import A75 from '../assets/images/BA2A1411-min.jpg';
import A76 from '../assets/images/BA2A1432-min.jpg';
import A77 from '../assets/images/BA2A1434-min.jpg';
import A78 from '../assets/images/BA2A1447-min.jpg';
import A79 from '../assets/images/BA2A1468-min.jpg';
import A80 from '../assets/images/BA2A1490-min.jpg';
import A81 from '../assets/images/BA2A1492-min.jpg';
import A82 from '../assets/images/BA2A1502-min.jpg';
import A83 from '../assets/images/BA2A1506-min.jpg';
import A84 from '../assets/images/BA2A1521-min.jpg';
import A85 from '../assets/images/BA2A1526-min.jpg';
import A86 from '../assets/images/BA2A1529-min.jpg';
import A87 from '../assets/images/BA2A1543-min.jpg';
import A88 from '../assets/images/BA2A1553-min.jpg';
import A89 from '../assets/images/BA2A1570-min.jpg';
import A90 from '../assets/images/BA2A1573-min.jpg';
import A91 from '../assets/images/BA2A1608-min.jpg';
import A92 from '../assets/images/BA2A1610-min.jpg';
import A93 from '../assets/images/BA2A1628-min.jpg';
import A94 from '../assets/images/BA2A1630-min.jpg';
import A95 from '../assets/images/BA2A1669-min.jpg';
import A96 from '../assets/images/BA2A1695-min.jpg';
import A97 from '../assets/images/BA2A1713-min.jpg';
import A98 from '../assets/images/BA2A1716-min.jpg';
import A99 from '../assets/images/BA2A1727-min.jpg';
import A100 from '../assets/images/BA2A1731-min.jpg';
import A101 from '../assets/images/BA2A1776-min.jpg';
import A102 from '../assets/images/BA2A1780-min.jpg';
import A103 from '../assets/images/BA2A1784-min.jpg';
import A104 from '../assets/images/BA2A1800-min.jpg';
import A105 from '../assets/images/BA2A1802-min.jpg';

import ImageGallery from 'react-image-gallery';

export const PhotoAlbum5 = () => {
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
    {
      original: A46,
      thumbnail: A46
    },
    {
      original: A47,
      thumbnail: A47
    },
    {
      original: A48,
      thumbnail: A48
    },
    {
      original: A49,
      thumbnail: A49
    },
    {
      original: A50,
      thumbnail: A50
    },
    {
      original: A51,
      thumbnail: A51
    },
    {
      original: A52,
      thumbnail: A52
    },
    {
      original: A53,
      thumbnail: A53
    },
    {
      original: A54,
      thumbnail: A54
    },
    {
      original: A55,
      thumbnail: A55
    },
    {
      original: A56,
      thumbnail: A56
    },
    {
      original: A57,
      thumbnail: A57
    },
    {
      original: A58,
      thumbnail: A58
    },
    {
      original: A59,
      thumbnail: A59
    },
    {
      original: A60,
      thumbnail: A60
    },
    {
      original: A61,
      thumbnail: A61
    },
    {
      original: A62,
      thumbnail: A62
    },
    {
      original: A63,
      thumbnail: A63
    },
    {
      original: A64,
      thumbnail: A64
    },
    {
      original: A66,
      thumbnail: A66
    },
    {
      original: A67,
      thumbnail: A67
    },
    {
      original: A68,
      thumbnail: A68
    },
    {
      original: A69,
      thumbnail: A69
    },
    {
      original: A70,
      thumbnail: A70
    },
    {
      original: A71,
      thumbnail: A71
    },
    {
      original: A72,
      thumbnail: A72
    },
    {
      original: A73,
      thumbnail: A73
    },
    {
      original: A74,
      thumbnail: A74
    },
    {
      original: A75,
      thumbnail: A75
    },
    {
      original: A76,
      thumbnail: A76
    },
    {
      original: A77,
      thumbnail: A77
    },
    {
      original: A78,
      thumbnail: A78
    },
    {
      original: A79,
      thumbnail: A79
    },
    {
      original: A80,
      thumbnail: A80
    },
    {
      original: A81,
      thumbnail: A81
    },
    {
      original: A82,
      thumbnail: A82
    },
    {
      original: A83,
      thumbnail: A83
    },
    {
      original: A84,
      thumbnail: A84
    },
    {
      original: A85,
      thumbnail: A85
    },
    {
      original: A86,
      thumbnail: A86
    },
    {
      original: A87,
      thumbnail: A87
    },
    {
      original: A88,
      thumbnail: A88
    },
    {
      original: A89,
      thumbnail: A89
    },
    {
      original: A90,
      thumbnail: A90
    },
    {
      original: A91,
      thumbnail: A91
    },
    {
      original: A92,
      thumbnail: A92
    },
    {
      original: A93,
      thumbnail: A93
    },
    {
      original: A94,
      thumbnail: A94
    },
    {
      original: A95,
      thumbnail: A95
    },
    {
      original: A96,
      thumbnail: A96
    },
    {
      original: A97,
      thumbnail: A97
    },
    {
      original: A98,
      thumbnail: A98
    },
    {
      original: A99,
      thumbnail: A99
    },
    {
      original: A100,
      thumbnail: A100
    },
    {
      original: A101,
      thumbnail: A101
    },
    {
      original: A102,
      thumbnail: A102,
    },
    {
      original: A103,
      thumbnail: A103
    },
    {
      original: A104,
      thumbnail: A104,
    },
    {
      original: A105,
      thumbnail: A105
    },
  ];

  return (
    <div className={styles.wrapper}>
      <ImageGallery items={photos} />
    </div>
  );
};
