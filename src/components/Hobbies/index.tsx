import {FC, ReactNode} from "react";
import styles from "./Hobbies.module.css";

export const Hobbies: FC<{hobbies: string[], customClass: string}> = ({hobbies, customClass}) => {

    return (
        <div className={`${styles.hobbies} ${customClass}`}>
            {hobbies.map((hobby): ReactNode=>{
                return <span className={styles.hobby}>
                    {hobby}
                </span>
            })}
        </div>
    )
}
