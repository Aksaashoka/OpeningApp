import axios from "axios"
import {
    UPLOAD_TRACK_ATTEMPT,
    UPLOAD_TRACK_FAILURE,
    UPLOAD_TRACK_SUCCESS
}from "../../Constants/"

const attempUpload = ()=>({
        type:UPLOAD_TRACK_ATTEMPT
    })
const successUpload = response=>({
        type: UPLOAD_TRACK_SUCCESS,
        payload:{
            response:response.data
        }
    })
const failureUpload = error => ({
    type: UPLOAD_TRACK_FAILURE,
    payload: {
      error,
    }
  })
export const uploadTrack = ()=>{
    return async(dispatch)=>{
        dispatch(attempUpload())
        try{
            let apiRes = 
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/tracks`)
            dispatch(successUpload(apiRes))
        }catch (error){
            dispatch(failureUpload(error))
        }
    }
}