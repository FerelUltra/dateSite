import {FC, MouseEvent, MouseEventHandler, useEffect, useState} from "react";
import styles from "./SearchedUser.module.css";
import {BASE_URL} from "../../constants/urls";
import {IImages} from "../../types/users";
import SvgAngleLeftSolid from "../../assets/AngleLeftSolid.jsx"
import SvgAngleRightSolid from "../../assets/AngleRightSolid";
import {ThumbsDownSolid, ThumbsUpSolid} from "../../assets";
import {Hobbies} from "../Hobbies";

interface IProps {
    userNumber: number,
    images: IImages,
    name: string,
    age: number,
    city: string | null,
    sex: string,
    increaseUserNumber: MouseEventHandler<any>,
    hobbies: string[]
}

enum enumImages {
    document_image_1,
    document_image_2,
    document_image_3,

}

export const SearchedUser: FC<IProps> = ({
                                             userNumber,
                                             images,
                                             name,
                                             age,
                                             city,
                                             sex,
                                             increaseUserNumber,
                                             hobbies
                                         }) => {
    const [imageNumber, setImageNumber] = useState<number>(0);
    const [imageCount, setImageCount] = useState(0);
    useEffect(()=>{
        let currentImageCount = 0
        for (const image in images) {
            images[image] ? currentImageCount++ : null
        }
        console.log(currentImageCount)
        setImageCount(currentImageCount)
    }, [userNumber])
    const onLeftClick = () => {
        imageNumber !== 0 ? setImageNumber(prevState => prevState - 1) : null
    }
    const onRightClick = () => {
        imageNumber !== imageCount - 1 ? setImageNumber(prevState => prevState + 1) : null
    }
    return (
        <div className={styles.profile} style={
            images[enumImages[imageNumber]] ?
                {
                    backgroundImage: `url(${BASE_URL}/${images[enumImages[imageNumber]]!.docfile})`,
                    backgroundRepeat: "no-repeat"
                } : {backgroundImage: `url(no-photo.png)`}

        }>
            <div className={styles.profileInfo}>
                <div className={`${styles.nameAge} ${styles.infos}`}>
                    <h2 className={`${styles.name}`}>{name}</h2>
                    <div className={`${styles.age}`}>{age}</div>
                </div>
                <div className={`${styles.infos} ${styles.sex}`}>{sex}, {city}</div>
                <Hobbies hobbies={hobbies} customClass={`${styles.hobbies} ${styles.infos}`}/>
                <ThumbsDownSolid onClick={(event: MouseEvent) => {
                    increaseUserNumber(event);
                    setImageNumber(0)
                }} className={`${styles.thumbs} ${styles.downlike}`} title={'thumb down'} titleId={'thumb down'}/>
                <ThumbsUpSolid onClick={(event: MouseEvent) => {
                    increaseUserNumber(event);
                    setImageNumber(0)
                }} className={`${styles.thumbs} ${styles.uplike}`} title={'thumb up'} titleId={'thumb up'}/>
                <SvgAngleRightSolid onClick={onRightClick}
                                    className={`${styles.slideRight} ${styles.slide} ${styles.infos}`}
                                    title={'left'} titleId={'left'}/>
                <SvgAngleLeftSolid onClick={onLeftClick}
                                   className={`${styles.slideLeft} ${styles.slide} ${styles.infos}`}
                                   title={'left'} titleId={'left'}/>
            </div>
        </div>
    )
}