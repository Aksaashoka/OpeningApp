import {
	UPLOAD_TRACK_ATTEMPT,
	UPLOAD_TRACK_FAILURE,
	UPLOAD_TRACK_SUCCESS,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	EMPTY_USER,
} from '../../Constants/';

const initialState = {
	newTrack: {},
	fetchingUpload: false,
	error: null,
	user: null,
};

const reducer = (state = initialState, action) => {
	let {type, payload} = action;
	switch (type) {
		case UPLOAD_TRACK_ATTEMPT:
			return {
				...state,
				fetchingUpload: true,
			};
		case UPLOAD_TRACK_SUCCESS:
			console.log('upload payload', payload);
			return {
				...state,
				fetchingUpload: false,
				newtrack: {...state.newTrack, payload: payload.response},
			};

		case UPLOAD_TRACK_FAILURE:
			return {
				...state,
				fetchingUpload: false,
				error: payload.error.message,
			};

		case SIGN_IN_SUCCESS || SIGN_IN_FAILURE:
			return {
				...state,
				user: payload,
			};

		case EMPTY_USER:
			return {
				...state,
				user: null,
			};

		default:
			return state;
	}
};
export default reducer;
