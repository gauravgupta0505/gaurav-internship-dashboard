import { combineReducers } from "redux";

import allowanceReducer from "./reducer";
import allowancePopupReducer from "./allowancesReducer"
import registerDataReducer from "./registerReducer";

const rootReducer = combineReducers({
    allowance: allowanceReducer,
    allowancePopup: allowancePopupReducer,
    registerData: registerDataReducer
})

export default rootReducer;