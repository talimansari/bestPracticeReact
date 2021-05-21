const DefaultState = {
    loading:false,
    data:[],
    errorMsg:""
  }
  
  
  const demoReducer = (state = DefaultState,action) =>{
    switch(action.type){
      case "API_SUCCESS":
       return {
         ...state,
        loading :false,
        data:action.payload
      }
      case "API_LOADING":
       return {
         ...state,
        loading :true,
        errorMsg: ""
      }
      case "API_FAILURE":
       return {
         ...state,
        loading :false,
        errorMsg: "unable to Access"
      }
  
           default:
              return state;
    }
  }
  export default demoReducer;