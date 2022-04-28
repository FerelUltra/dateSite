import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser, Users} from "../types/users";


const initialState: Users = {
    users: [],
    isLoading: false,
    error: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {usersFetching, usersFetchingSuccess, usersFetchingError} = usersSlice.actions

export default usersSlice.reducer