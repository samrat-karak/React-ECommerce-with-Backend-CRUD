import React, { createContext, useEffect, useState } from 'react'
import { AxiosInstance } from '../routes/AxiosInstance';

export const GlobalAuthContext=createContext() 


const AuthContext = ({children}) => {

    const[loggedInUser,setloggedInUser]=useState(null);
    const[authUser,setAuthUser]=useState({})
    const[loading,setLoading]=useState(null);

    const checkLoggedInUser= async () => {
        try {
            // APi Call
            let response=await AxiosInstance.get("/user/me")
            console.log(response);
            setAuthUser(response.data.data)
            // if User  is logged in , return true
            // setLoggedInUser to true
            setloggedInUser(response.data.success)
        } catch (error) {
            // setLoggedInUser to false
            setloggedInUser(false)
            console.log(error);
            
        }finally{
            //SetLoading to false
            setLoading(false)
        }
    }

    useEffect(()=>{
      checkLoggedInUser()
    },[])


  return (
    <GlobalAuthContext.Provider
      value={{
        loggedInUser,
        setloggedInUser,
        loading,
        setLoading,
        checkLoggedInUser,
        authUser
      }}
    >
        {children}
    </GlobalAuthContext.Provider>
  );
}

export default AuthContext