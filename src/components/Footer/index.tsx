import {FC} from "react";
import styles from "./Footer.module.css"

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://vk.com/ferel_let"><img width="16px" src="vk-brands.svg" alt=""/></a>
            <a href="https://www.youtube.com/channel/UCxWGhABaQueVrUgMIRs8Hbg"><img width="16px" src="youtube-brands.svg" alt=""/></a>
            <a href="tel:+79871234567"><img width="16px" src="phone-solid.svg" alt=""/></a>
            <a href="mailto:meral.nekrag@gmail.com"><img width="16px" src="inbox-solid.svg" alt=""/></a>
            <a href="https://web.telegram.org/z/"><img width="16px" src="telegram-brands.svg" alt=""/></a>
        </footer>
    )
}