import { useState } from "react";
import { CategoryList } from "../components/CategoryList";
import { Link } from 'react-router-dom'

export const ProductsPage = () => {

  const [respuesta, setRespuesta] = useState([])
    
  return (
    <>

      <CategoryList respuesta={respuesta} />

      <h1>Categories available:</h1>

      <h3><Link to='/smartphones'>Smartphones</Link></h3>
      <h3><Link to='/laptops'>Laptops</Link></h3>

    </>
  );
};
