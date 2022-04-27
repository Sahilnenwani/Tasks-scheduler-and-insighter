// import React,{useContext,useState,useEffect} from 'react'
// import { auth } from '../firebase';

// const AuthContext=React.createContext();

// export function useAuth(){
//     return useContext(AuthContext)
// }

// export  const AuthProvider=({children})=>{
//     const [currentUser,setCurrentUser]=useState();
//     function signup(email,password){
//        return auth.createUserWithEmailAndPassword(email,password)
//     }
//     useEffect(()=>{

   
//     //it returns a method when we call it then it will send error
//     const unsubscribe=auth.onAuthStateChanged(user=> {
//          setCurrentUser(user)
         
//     })
//     return unsubscribe;
//     },[])

//     const value={
//         currentUser,
//         signup
//     }

//     return(
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

