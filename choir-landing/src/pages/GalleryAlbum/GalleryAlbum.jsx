import { withLayout } from '../../layout/Layout';
import styles from './GalleryAlbum.module.scss';

import A1 from "../../assets/images/IMG_1354.jpg";
import A2 from "../../assets/images/BA2A8620-min.jpg";
import A3 from "../../assets/images/IMG_2010.jpg";
import A4 from "../../assets/images/IMG_5258-min.jpg";
import A5 from "../../assets/images/BA2A0695-min.jpg";
import A6 from "../../assets/images/IMG_2087-min.jpg";
import A7 from "../../assets/images/IMG_5197-min.jpg";
import A8 from "../../assets/images/IMG_3448-min.jpg";
import { useNavigate, useParams } from 'react-router-dom';
import Icons from '../../common/icons';
import { PhotoAlbum1 } from '../../photos/PhotoAlbum1';
import { PhotoAlbum2 } from '../../photos/PhotoAlbum2';
import { PhotoAlbum3 } from '../../photos/PhotoAlbum3';
import { PhotoAlbum4 } from '../../photos/PhotoAlbum4';
import { PhotoAlbum5 } from '../../photos/PhotoAlbum5';
import { PhotoAlbum6 } from '../../photos/PhotoAlbum6';
import { PhotoAlbum7 } from '../../photos/PhotoAlbum7';
import { PhotoAlbum8 } from '../../photos/PhotoAlbum8';

const GalleryAlbum = () => {

    const navigate = useNavigate();
    const params = useParams();
    const redirect = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.breadcumbWrapper}>
                <div className={styles.breadcumb}>
                    <a href='/' className={styles.notActive}>Главная</a> / <a href='/gallery' className={styles.notActive}>Галерея</a> / <span className={styles.active}>{params.album}</span>
                </div>
                <div className={styles.back} onClick={() => {
                    navigate(-1);
                }}>
                    <Icons type='back' /> Назад
                </div>
            </div>

            <div className={styles.title}>
                Галерея
            </div>


            <div>
                {
                    params.album === 'Церемония открытия Олимпиады' && (
                        <PhotoAlbum1 />
                    )
                }
                {
                    params.album === 'Конкурсные прослушивания 26.10' && (
                        <PhotoAlbum2 />
                    )
                }
                {
                    params.album === 'Концерт народных хоров в Филармонии 26.10' && (
                        <PhotoAlbum3 />
                    )
                }
                {
                    params.album === 'Концерт академических хоров в Мариинском театре 26.10' && (
                        <PhotoAlbum4 />
                    )
                }
                {
                    params.album === 'Конкурсные прослушивания 27.10' && (
                        <PhotoAlbum5 />
                    )
                }
                {
                    params.album === 'Дружеский концерт 27.10' && (
                        <PhotoAlbum6 />
                    )
                }
                {
                    params.album === 'Концерт духовной музыки 28.10' && (
                        <PhotoAlbum7 />
                    )
                }
                {
                    params.album === 'Церемония закрытия' && (
                        <PhotoAlbum8 />
                    )
                }
            </div>
        </div>
    )
}

export default withLayout(GalleryAlbum);