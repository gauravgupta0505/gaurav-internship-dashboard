import { combineReducers } from "redux";

import allowanceReducer from "./allowanceReducer";
import allowancePopupReducer from "./allowancePopupReducer"
import registerDataReducer from "./registerDataReducer";

const rootReducer = combineReducers({
    allowances: allowanceReducer,
    allowancePopup: allowancePopupReducer,
    registerData: registerDataReducer
})

export default rootReducer;