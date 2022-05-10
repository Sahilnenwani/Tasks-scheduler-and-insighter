export const TodoDataAction=(data)=>{
    return(
        {
            type:"Get TODO's",
            payload:data
        }
    )
}

export const TodoDataCreater=(data)=>{
    return dispatch=>{
        console.log("working Todo Reducer")
        dispatch(TodoDataAction(data))   
    }
}