import { useEffect, useState } from "react"
import { getCategories } from "../helpers/getCategories"

export const useFetchCat = (url) => {

    const [products, setProducts] = useState([])

    

    const getProducts=async()=>{
      
         const consulta=await getCategories(url)

         setProducts(consulta)
    }

    useEffect(()=>{
        getProducts()
    },[])

  return {
    products
  }
}
