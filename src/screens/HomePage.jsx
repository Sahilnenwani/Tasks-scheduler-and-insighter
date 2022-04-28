import React,{useEffect} from 'react';
import { logout,auth } from '../fire';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';



export const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const history=useHistory();

    
  const logOutUser=()=>{
    history.replace("/");
    logout();
  }

  return (
    <div>
        HomePage
        <button type="button"  onClick={logOutUser}>Logout</button>
    </div>
  )
}
