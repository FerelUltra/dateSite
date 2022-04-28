import {FC, ReactNode} from "react";
import {Footer} from "../Footer";
import {Header} from "../Header";
import styles from './Layout.module.css'

interface IComponent{
    component: ReactNode
}
export const Layout: FC<IComponent> = ({component}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {component}
            <Footer/>
        </div>
    )
}