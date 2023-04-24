import { dummy } from "../api/dummy";

export const getCategories = async (url) => {

    const fetch =await dummy(url)
    const {products} = fetch

    const cosa = `view-more`
    
    if(location.href.includes(cosa)) {

        const prods = {
            id: fetch.id,
            name: fetch.title,
            description: fetch.description,
            brand: fetch.brand,
            src: fetch.thumbnail,
            price: fetch.price,
            rating: parseInt(fetch.rating)
        }

        return prods

    } else {

        const prods = products.map(product=>({ //Esto sería como el modelo de lo que vamos a requerir en el fetch
    
            id: product.id,
            name: product.title,
            description: product.description,
            brand: product.brand,
            src: product.thumbnail,
            price: product.price,
            rating: parseInt(product.rating)
    
        }))
        return prods
    }



};