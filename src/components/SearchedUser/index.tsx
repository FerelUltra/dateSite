import {Dispatch, FC, MouseEventHandler} from "react";
import styles from "./SearchedUser.module.css";
import {BASE_URL} from "../../constants/urls";

interface IProps {
    userNumber: number,
    image: string | null,
    name: string,
    age: number,
    city: string | null,
    sex: string,
    increaseUserNumber: MouseEventHandler<HTMLImageElement>,
    interests: string
}

export const SearchedUser: FC<IProps> = ({
                                             userNumber,
                                             image,
                                             name,
                                             age,
                                             city,
                                             sex,
                                             increaseUserNumber,
                                             interests
                                         }) => {
    return (
        <div className={styles.profile}>
            {image ?
                <img className={styles.profileImage} src={`${BASE_URL}/${image}`}
                     alt=""/> :
                <img className={styles.profileImage} src="src/assets/no-photo.png"
                     alt=""/>}
            <div className={styles.profileInfo}>
                <h2 className={styles.profileHeading}>Profile info</h2>
                <div className={styles.infos}>Name: {name}</div>
                <div className={styles.infos}>Age: {age}</div>
                <div className={styles.infos}>Sex: {sex}</div>
                <div className={styles.infos}>City: {city}</div>
                <div className={styles.infos}>Interests: {interests}</div>
                <img onClick={increaseUserNumber} className={styles.like} src="src/assets/thumbs-up-solid.svg" alt=""/>
                <img onClick={increaseUserNumber} className={styles.like} src="src/assets/thumbs-down-solid.svg" alt=""/>

            </div>
        </div>
    )
}