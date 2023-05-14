function allowanceData(){
    const data = JSON.parse(localStorage.getItem('allowances'));
    
    return data ? data : null;
}

const allowancePopupReducer = (state = allowanceData(),action)=>{
    switch(action.type){
        case "ALLOWANCE_DATA" : return action.payload;
        default: return state;
    }
    
}
export default allowancePopupReducer;