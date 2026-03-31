
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Stats from './Components/Stats/Stats'
import Tabs from './Components/Tabs/Tabs'
import Cart from './Components/Cart/Cart'

const getProducts = async () =>{
  const res = await fetch('/products.json')
  const data = await res.json()
  return(data)
}
const productsPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <>
    <Navbar/>
    <Banner/>
    <Stats/>
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
    {activeTab === 'products' && <Products productsPromise={productsPromise}/>}
    {activeTab === 'cart' && <Cart/>}
    </>
  )
}

export default App
