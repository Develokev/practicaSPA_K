export const dummy = async(url) => {

    try {

      const peticion = await fetch(url)

      const resp =await peticion.json()

      return resp
  
    } catch (error) {
      
      console.log('Error retrieving categories')
      throw new Error('Error al cargar la API')
  
    }
    
  }