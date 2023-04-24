
import { useParams } from 'react-router-dom'
import { useFetchCat } from '../hooks/useFetchCat';
import { DetailCard } from './DetailCard';

export const Details = () => {

    const {id} = useParams();

    const url = `https://dummyjson.com/products/${id}`

    const peticion = useFetchCat(url)

    const {products} = peticion

    console.log({products})

  return (
    <>
    
    <DetailCard key={products.id} {...products}/>
    
    </>
  )
}
