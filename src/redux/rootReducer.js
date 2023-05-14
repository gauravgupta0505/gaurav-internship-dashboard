import { combineReducers } from "redux";

import allowanceReducer from "./reducer";
import allowancePopupReducer from "./allowancesReducer"
import registerData from "./registerReducer"
import registerDataReducer from "./registerReducer";

const rootReducer = combineReducers({
    allowance: allowanceReducer,
    allowancePopup: allowancePopupReducer,
    registerData: registerDataReducer
})

export default rootReducer;