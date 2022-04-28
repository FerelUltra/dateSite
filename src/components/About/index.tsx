import {FC, useEffect} from "react";
import {Layout} from "../Layout/Layout";
import styles from "./About.module.css"
import {fetchUsers} from "../../store/actionCreator";
import {useAppDispatch} from "../../hooks/users";


const About: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.text}>Modern algorithmic date site</h1>
                <h2 className={`${styles.text} ${styles.h2}`}>The most concurrent site to find your second part due to
                    AI.<br/>
                    Over 200 000 people have found their love around all the world! <br/>
                    Find you too! No payment, unlimited messaging and searching.
                </h2>

            </main>
        </>
    )
}
export default <Layout component={<About/>}/>