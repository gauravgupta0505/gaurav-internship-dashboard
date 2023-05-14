function Data(){
    const data = JSON.parse(localStorage.getItem('register'));
    return data ? data : null;
}


const registerDataReducer = (state = Data(),action)=>{
    switch(action.type){
        case "REGISTER_DATA" : return action.payload;
        default: return state;
    }
    
}
export default registerDataReducer;