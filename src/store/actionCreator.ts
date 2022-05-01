import {AppDispatch} from "./rootReducer";
import axios from "axios";
import {usersSlice} from "./usersReducer";
import {BASE_URL} from "../constants/urls";
import {mockData} from "../api/mockData";

export const fetchUsers = () => async (dispatch: AppDispatch) =>{
    try{
        dispatch(usersSlice.actions.usersFetching())
        const response = await axios({
            method: "post",
            url: `${BASE_URL}/test_main/`,
            headers: {
                Authorization: 'token b9112e99755195021fdd6e7dfb91080b1653a56a'
            }
        })
        dispatch(usersSlice.actions.usersFetchingSuccess(response.data))
    } catch (error: any) {
        dispatch(usersSlice.actions.usersFetchingError(error.message))
       // dispatch(usersSlice.actions.usersFetchingSuccess(mockData))
    }
}