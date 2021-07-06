import axios from 'axios';
import {
	UPLOAD_TRACK_ATTEMPT,
	UPLOAD_TRACK_FAILURE,
	UPLOAD_TRACK_SUCCESS,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	EMPTY_USER,
} from '../../Constants/';

const attempUpload = () => ({
	type: UPLOAD_TRACK_ATTEMPT,
});
const successUpload = (data) => ({
	type: UPLOAD_TRACK_SUCCESS,
	payload: {
		response: data.response,
	},
});
const failureUpload = (error) => ({
	type: UPLOAD_TRACK_FAILURE,
	payload: {
		error,
	},
});

/////////////////////////////// TRACKS //////////////////////////////////////////
export const uploadTrack = (formito) => {
	return async (dispatch) => {
		dispatch(attempUpload());
		try {
			const {data} = await axios({
				method: 'post',
				url: `${process.env.REACT_APP_BACKEND_URL}/tracks`,
				data: formito,
				headers: {
					Accept: '*/*',
				},
			});
			dispatch(successUpload(data));

			// return async(dispatch)=>{
			//     dispatch(attempUpload())
			//     try{
			//         let apiRes =
			//         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/tracks`,formito)
			//         dispatch(successUpload(apiRes))
		} catch (error) {
			dispatch(failureUpload(error));
		}
	};
};

/////////////////////////////// USERS //////////////////////////////////////////

export const emptyUser = () => {
	return {
		type: EMPTY_USER,
		payload: '',
	};
};

/////////////////////////////// AUTH //////////////////////////////////////////

export const signIn = (user) => {
	return async (dispatch) => {
		try {
			const {data} = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/users`,
				user
			);
			return dispatch({
				type: SIGN_IN_SUCCESS,
				payload: data.response,
			});
		} catch (error) {
			return dispatch({
				type: SIGN_IN_FAILURE,
				payload: error.message,
			});
		}
	};
};
