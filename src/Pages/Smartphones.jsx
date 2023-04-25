import { useFetchCat } from '../hooks/useFetchCat'
import { Cards } from '../components/Cards'

export const Smartphones = () => {

  const url = `https://dummyjson.com/products/category/smartphones`

    const {products}=useFetchCat(url)

  return (
    
    <section className='card-container-mf'>
        {
            products.map(product=>(
                <Cards
                key={product.id}
                {...product}/>
            ))
        }
      </section>
  )
}
