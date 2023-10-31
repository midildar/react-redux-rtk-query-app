import React from 'react'
import {useGetAllProductsQuery} from "../app/service/apiData"

const AllProducts = () => {
    const {data,isError,isLoading} = useGetAllProductsQuery()
    if(isError){
        alert("we got an error")
    }
    if(isLoading){
        return <h1>Loading . . .. . </h1>
    }
  return (
    <>
    {
        data?.products.map((item)=>(
            <>
            <h1 key={item.id}>{item.title}</h1>
            <p>{item.description}</p>
            </>
        ))
    }
    </>
  )
}

export default AllProducts