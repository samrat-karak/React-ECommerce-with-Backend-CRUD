import React, { createContext, useEffect, useState } from 'react'
import { AxiosInstance } from '../routes/AxiosInstance';

export const GlobalAuthContext=createContext() 


const AuthContext = ({children}) => {

    const[loggedInUser,setloggedInUser]=useState(null);
    const[loading,setLoading]=useState(null);

    const checkLoggedInUser= async () => {
        try {
            // APi Call
            let response=await AxiosInstance.get("/user/me")
            console.log(response);
            
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
      }}
    >
        {children}
    </GlobalAuthContext.Provider>
  );
}

export default AuthContext