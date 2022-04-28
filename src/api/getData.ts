import axios from "axios";
import {BASE_URL} from "../constants/urls";

export const getData = async () => {
    const data = axios({
        method: "post",
        url: `${BASE_URL}/test_main/`,
        headers: {
            Authorization: 'b9112e99755195021fdd6e7dfb91080b1653a56a'
        }
    })
    return data
}
