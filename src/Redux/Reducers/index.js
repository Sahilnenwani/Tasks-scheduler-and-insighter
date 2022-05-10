import { combineReducers } from "redux";
import TodoSReducer from "./Todo'sReducer";
import weatherReducer from "./WeatherReducer";

const allReducer=combineReducers({
    TodoSReducer,   
    weatherReducer
})

export default allReducer;