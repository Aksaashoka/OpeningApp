import {
  UPLOAD_TRACK_ATTEMPT,
  UPLOAD_TRACK_FAILURE,
  UPLOAD_TRACK_SUCCESS
}from "../../Constants/"

const initialState = {
  newTrack: {},
  fetchingUpload: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case UPLOAD_TRACK_ATTEMPT:
      state.fetchingUpload = true;
      break;
    case UPLOAD_TRACK_SUCCESS:
      state.fetchingUpload = false;
      state.newtrack = { ...state.newTrack, payload: payload.response };
      break;
    case UPLOAD_TRACK_FAILURE:
      state.fetchingUpload = false;
      state.error = payload.error;
      break;
    default:
      break;
  }
};
export default reducer
