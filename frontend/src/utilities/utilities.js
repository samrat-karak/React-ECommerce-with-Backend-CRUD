import { useEffect, useState } from "react"
import { AxiosInstance } from "../routes/AxiosInstance"

export const useApi=(endpoint)=>{

    const [data,setData]=useState(null)

    async function getData() {
        let response= await AxiosInstance.get('/users')
        // setData(response)
        setData(response.data)
    }

    useEffect(()=>{
        getData();
    },[endpoint])

    return data;
}