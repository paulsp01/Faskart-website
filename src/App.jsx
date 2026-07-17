import React from 'react'
import {Routes,Route} from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import NewArrivals from './pages/NewArrivals'
import CollectionsDetails from './pages/CollectionsDetails'

const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collections/>}/>
         <Route path="/collections/:id" element={<CollectionsDetails />} />
         <Route path='/new-arrival' element={<NewArrivals/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App