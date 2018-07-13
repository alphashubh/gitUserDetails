import axios from 'axios';
import {browserHistory} from 'react-router';

export const RequestPageData = (input) => {
    return dispatch => {

        axios.get("http://localhost:3000/userdetail")
            .then((response) => {
                console.log("post ************", response.data);
                 dispatch({
                        type: "REQUEST_PAGE_DATA",
                        payload: response.data
                    })
            })
            .catch((error) => {
                //    console.log(error);
            })

    }

}