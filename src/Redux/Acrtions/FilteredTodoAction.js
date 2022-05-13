

export const FilteredTodoAction=(data)=>{
    return(
        {
            type:"Get Filtered TODO",
            payload:data
        }
    )
}

export const FilteredTodoActionCreater=(data)=>{
    return dispatch=>{
        console.log("working filter Todo Reducer",data)
        dispatch(FilteredTodoAction(data)); 
    }
}