import { Cards } from "../components/Cards"
import { useFetchCat } from "../hooks/useFetchCat"

export const LaptopPage = () => {

  const url = `https://dummyjson.com/products/category/laptops`

    const {products}=useFetchCat(url)

  return (
    <div>
        {
            products.map(product=>(
                <Cards
                key={product.id}
                {...product}/>
            ))
        }
        
    </div>
  )
}
