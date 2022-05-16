import { combineReducers } from "redux";
import TodoReducer from "./TodosReducer";
import weatherReducer from "./WeatherReducer";
import FilteredDataReducer from "./FilteredDataReducer";
import inprogressDoneReducer from "./Inprogress-Done";

const allReducer=combineReducers({
    TodoReducer,   
    weatherReducer,
    FilteredDataReducer,
    inprogressDoneReducer
    
})

export default allReducer;