import React, {useContext, useEffect } from 'react'
import { GlobalAuthContext } from '../authContext/AuthContext'
import { Navigate } from 'react-router-dom'

const UserPrivate = ({children}) => {

    let {loggedInUser,loading,checkLoggedInUser} = useContext(GlobalAuthContext)

    useEffect(() => {
        checkLoggedInUser()
    },[])

    if (loading) {
        return <h1>Loading....</h1>
        
    }

    return loggedInUser? children : <Navigate to={'/login'} replace={true} />
}

export default UserPrivate