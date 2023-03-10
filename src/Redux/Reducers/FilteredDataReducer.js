const initialState = {
    filterdtodos: {

    }
}


const FilteredDataReducer = (state = initialState, action) => {
    // console.log("Filtered todo data filter", action.payload)
    switch (action.type) {
        case "Get Filtered TODO":
            return (
                {
                    filterdtodos: {...state.filterdtodos, ...action.payload}
                })

        default:
            return state;
    }
}

export default FilteredDataReducer;