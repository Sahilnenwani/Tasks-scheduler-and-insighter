import { combineReducers } from "redux";
import TodoReducer from "./TodosReducer";
import weatherReducer from "./WeatherReducer";
import FilteredDataReducer from "./FilteredDataReducer";

const allReducer=combineReducers({
    TodoReducer,   
    weatherReducer,
    FilteredDataReducer
    
})

export default allReducer;