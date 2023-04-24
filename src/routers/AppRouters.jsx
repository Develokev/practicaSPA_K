import {Routes, Route, Navigate} from 'react-router-dom'
import { ProductsPage } from '../Pages/ProductsPage'
import { LoginPage } from '../Pages/LoginPage'
import { Smartphones } from '../Pages/Smartphones'
import { DetailPage } from '../Pages/DetailPage'
import { SearchPage } from '../Pages/SearchPage'
import { LaptopPage } from '../Pages/LaptopPage'

export const AppRouters = () => {

  return (

    <>
        <Routes>

            <Route path='/' element={<ProductsPage/>}/>

            <Route path='/smartphones' element={<Smartphones/>}/>

            <Route path='/laptops' element={<LaptopPage/>}/>

            <Route path='login' element={<LoginPage/>}/>

            <Route path='/view-more/:id' element={<DetailPage/>}/>

            <Route path='/search' element={<SearchPage/>}/>

            <Route path='/*' element={<Navigate to={'/'}/>}/>

        </Routes>
    
    </>
  )
}