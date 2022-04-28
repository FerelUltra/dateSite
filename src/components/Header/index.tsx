import {FC} from "react";
import styles from "./Header.module.css"
import {Link} from "react-router-dom";

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <img className={styles.heart} src="src/assets/heart-solid.svg" alt="heart"/>
            <span className={styles.siteName}>Date site</span>
            <ul className={styles.list}>
                <li>
                    <Link className={styles.link} to='/about'>About</Link>
                </li>
                <li>
                    <Link className={styles.link} to='/search'>Search</Link>
                </li>
                <li>
                    <Link className={styles.link} to='/profile'>Profile</Link>
                </li>
            </ul>
        </header>
    )
}