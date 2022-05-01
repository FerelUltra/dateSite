import {FC, MouseEventHandler, useState} from "react";
import styles from "./SearchedUser.module.css";
import {BASE_URL} from "../../constants/urls";
import {IImages} from "../../types/users";

interface IProps {
    userNumber: number,
    images: IImages,
    name: string,
    age: number,
    city: string | null,
    sex: string,
    increaseUserNumber: MouseEventHandler<HTMLImageElement>,
    interests: string
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
                                             interests
                                         }) => {
    const [imageNumber, setImageNumber] = useState<number>(0);
    return (
        <div className={styles.profile} style={
            images[enumImages[imageNumber]]  ?
                {
                    backgroundImage: `url(${BASE_URL}/${images[enumImages[imageNumber]]!.docfile})`,
                    backgroundRepeat: "no-repeat"
                } : {backgroundImage: `url(no-photo.png)` }

        }>
            {/*{image ?*/}
            {/*    <img className={styles.profileImage} src={`${BASE_URL}/${image}`}*/}
            {/*         alt=""/> :*/}
            {/*    <img className={styles.profileImage} src="no-photo.png"*/}
            {/*         alt=""/>}*/}
            <div className={styles.profileInfo}>
                <h2 className={`${styles.infos} ${styles.name}`}>{name}</h2>
                <div className={styles.infos}>Age: {age}</div>
                <div className={styles.infos}>Sex: {sex}</div>
                <div className={styles.infos}>City: {city}</div>
                <div className={styles.infos}>Interests: {interests}</div>
                <img onClick={increaseUserNumber} className={styles.like} src="thumbs-up-solid.svg" alt=""/>
                <img onClick={increaseUserNumber} className={styles.like} src="thumbs-down-solid.svg" alt=""/>

            </div>
        </div>
    )
}