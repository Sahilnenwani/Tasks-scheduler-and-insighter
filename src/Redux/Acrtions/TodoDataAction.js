import { db } from "../../fire";
import {
    getFirestore,
     query,
   collection,
   where,
    addDoc,
} from "firebase/firestore";



export const TodoDataAction=(data)=>{
    return(
        {
            type:"Get TODO's",
            payload:data
        }
    )
}

export const TodoDataCreater=(data)=>{
    return async (dispatch)=>{
        console.log("working Todo add data  Reducer");
        await addDoc(collection(db, "todos"), {
            Done:false,
            backlog:true,
            inprogress:false,
            time:data.time,
            todo:data.todo,
          });
        dispatch(TodoDataAction(data))   
    }
}