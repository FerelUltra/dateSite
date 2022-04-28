import {FC} from "react";
import {Layout} from "../Layout/Layout";
import styles from "./Profile.module.css";
import {BASE_URL} from "../../constants/urls";
import {useAppSelector} from "../../hooks/users";

const Profile: FC = () => {
    const user = useAppSelector((state) => state.users.users[0])
    console.log(user)
    return (
        <div className={styles.profile}>
            {user.images.document_image_1 ?
                <img className={styles.profileImage} src={`${BASE_URL}/${user.images.document_image_1.docfile}`}
                     alt=""/> :
                null}
            <div className={styles.profileInfo}>
                <h2 className={styles.profileHeading}>Profile info</h2>
                <div className={styles.infos}>Name: {user.data.name}</div>
                <div className={styles.infos}>Birthday: {user.data.date_of_birth}</div>
                <div className={styles.infos}>Age: {user.data.age}</div>
                <div className={styles.infos}>Sex: {user.data.sex}</div>
                <div className={styles.infos}>City: {user.data.city}</div>
                <div className={styles.infos}>Interests: {user.interests.join(', ')}</div>
                {user.data.telegram?  <a href={`https://web.telegram.org/${user.data.telegram}`}><img width="16px" src="src/assets/telegram-brands.svg" alt=""/></a> : null}
                {user.data.facebook?  <a href={`https://facebook.com/${user.data.facebook}`}><img width="16px" src="src/assets/facebook-brands.svg" alt=""/></a> : null}
                {user.data.instagram?  <a href={`https://instagram.com/${user.data.instagram}`}><img width="16px" src="src/assets/instagram-brands.svg" alt=""/></a> : null}
                {user.data.whatsup? <a href={`tel:${user.data.whatsup}`}><img width="16px" src="src/assets/whatsapp-brands.svg" alt=""/></a> : null}
            </div>
        </div>
    )
}
export default <Layout component={<Profile/>}/>