import {FC, useEffect, useState} from "react";
import {Layout} from "../Layout/Layout";
import {useAppDispatch, useAppSelector} from "../../hooks/users";
import {SearchedUser} from "../SearchedUser";
import {fetchUsers} from "../../store/actionCreator";
import styles from "./Search.module.css"

const Search: FC = () => {
    const dispatch = useAppDispatch()

    const users = useAppSelector((state) => state.users.users)
    const [userNumber, setUserNumber] = useState<number>(1);
    const [areUsersOver, setAreUsersOver] = useState(false);
    const increaseUserNumber = () => {
        if (users.length === userNumber + 1) {
            setUserNumber(1)
            setAreUsersOver(prevState => !prevState)
        } else {
            setUserNumber(prevState => prevState + 1)
        }
    }
    useEffect(() => {
        dispatch(fetchUsers())
    }, [areUsersOver])
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div className={styles.search}>
            <SearchedUser userNumber={userNumber}
                          images={users[userNumber].images}
                          name={users[userNumber].data.name}
                          age={users[userNumber].data.age}
                          city={users[userNumber].data.city}
                          sex={users[userNumber].data.sex}
                          increaseUserNumber={increaseUserNumber}
                          hobbies={users[userNumber].interests}
            />

        </div>
    )
}
export default <Layout component={<Search/>}/>