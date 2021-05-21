import axios from 'axios';
export const ActionCreators = () => async dispatch => {
   try{
       dispatch({
           type:"API_LOADING"
       })
       const res = await axios.get(`http://localhost:3002/users`)

       dispatch({
        type:"API_SUCCESS",
        payload: res.data
    })
   }catch(e){
    dispatch({
        type:"API_FAILURE"
    })
   }
}
