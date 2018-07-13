import axios from 'axios';
import {browserHistory} from 'react-router';

export const userLoginAuthentication = (input) => {
    return dispatch => {

        axios.post("http://localhost:3000/user", {
            name: input.name,
            password: input.password
        })
            .then((response) => {
                console.log("post ************", response.data);
                if (response.data) {
                    dispatch({
                        type: "VALID_DATA",
                        payload: response.data
                    })
                     browserHistory.push('/timeline');
                }
                else{
                    dispatch({
                        type:"INVALID_DATA",
                        payload: {error : "invalidData"}
                    })
                     
                }


            })
            .catch((error) => {
                //    console.log(error);
            })

    }

}

