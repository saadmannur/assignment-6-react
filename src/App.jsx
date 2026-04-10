import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/NavBar/NavBar'
import RatingSection from './Component/RatingSection/RatingSection'
import Products from './Component/Products/Products'

const fetchProducts = async () => {
  const res = (await fetch("data.json")).json();
  return res;
}

function App() {
 const productsPromise = fetchProducts()

  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <NavBar
        selectedProducts={selectedProducts}
      ></NavBar>
      {/* <Banner></Banner> */}
      {/* <RatingSection></RatingSection> */}
      <Suspense fallback={<div className='text-center my-6'><span className="loading loading-bars loading-xl"></span></div>}>
        <Products
          productsPromise={productsPromise}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        ></Products>
      </Suspense>
    </>
  )
}

export default App