import React, { createContext, useState } from 'react'

export const GlobalAuthContext=createContext() 


const AuthContext = ({children}) => {

    const[loggedInUser,setloggedInUser]=useState(null);
    const[loading,setLoading]=useState(null);

    const checkLoggedInUser= async () => {
        try {
            // APi Call
            // if User  is logged in , return true
            // setLoggedInUser to true
        } catch (error) {
            // setLoggedInUser to false
        }finally{
            //SetLoading to false
        }
    }


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