const initialState={

}
const inprogressDoneReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SetTabs":
            return {
                ...state,
                tab: action.payload
            }
        default:
            return state
    }
}

export default inprogressDoneReducer;