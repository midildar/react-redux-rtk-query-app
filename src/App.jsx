import React from 'react'
import AllProducts from './components/AllProducts'
import SpecificProduct from './components/SpecificProduct'
import AddNewProduct from './components/AddNewProduct'
import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct'

const App = () => {
  return (
    <>
      {/* <AllProducts/> */}
      {/* <SpecificProduct/> */}
      {/* <AddNewProduct/> */}
      {/* <UpdateProduct productId={4}/> */}
      <DeleteProduct productId={4}/>
    </>
  )
}

export default App