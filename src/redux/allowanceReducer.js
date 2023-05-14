
const allowanceReducer = (state = false,action) => {
    switch(action.type){
        case "SHOW_POPUP" : return action.payload;
        default: return state;
    }
    
}
export default allowanceReducer;