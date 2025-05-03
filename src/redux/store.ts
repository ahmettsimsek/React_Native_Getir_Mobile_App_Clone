import{createStore,applyMiddleware, combineReducers} from "redux"
import ThunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import cartItems from "./reducers/cartItem"

const reducers = combineReducers({
    //cartItem
    cartItems:cartItems
    
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))

)

export default store;