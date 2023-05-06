import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import {getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './pages/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/Login'

//  PAGINA REFERENCIA: https://dashing-puppy-89779d.netlify.app

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [] )


 

  return (
    < div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route  path='/register' element={<Register/>}/>
      <Route path='/product/:id' element={<ProductId/>}/>
      </Routes>



    </div>
  )
}

export default App
