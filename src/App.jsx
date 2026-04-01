
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Stats from './Components/Stats/Stats'
import Tabs from './Components/Tabs/Tabs'
import Cart from './Components/Cart/Cart'
import Steps from './Components/Steps/Steps'
import Pricing from './Components/Pricing/Pricing'
import Workflow from './Components/Workflow/Workflow'
import Footer from './Components/Footer/Footer'

const getProducts = async () =>{
  const res = await fetch('/products.json')
  const data = await res.json()
  return(data)
}
const productsPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState('products')
  const [cart, setCart] = useState([])

  return (
    <>
    <Navbar cart={cart}/>
    <Banner/>
    <Stats/>
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} cart={cart}/>
    {activeTab === 'products' && <Products productsPromise={productsPromise} cart={cart} setCart={setCart}/>}
    {activeTab === 'cart' && <Cart cart={cart} setCart={setCart}/>}
    <Steps/>
    <Pricing/>
    <Workflow/>
    <Footer/>
    </>
  )
}

export default App
