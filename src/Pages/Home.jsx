import React from 'react'
// import { Link } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'

import Navbar1 from '../Components/Navbar1';
import CarouselPart from '../Components/CarouselPart'
import Footer from '../Components/Footer';
import Content from '../Pages/Content';
import ProductCard from '../Components/ProductCard';
import SubNavBar from '../Components/SubNavBar';



function Home() {

  

  return (
    <div >
        <Navbar1 />
        <SubNavBar/>
        <CarouselPart/>
        <Content/> 
        {/* <ProductCard title={"Gel Pen"} price={"Rs.30.00"} /> */}
        {/* <ProductCard title={"Color Pencil Set"} price={"Rs.490.00"} /> */}
        {/* <ProductCard title={"Marker Pen"} price={"Rs.130.00"} /> */}
        <Footer/>
    </div>
  )
}

export default Home

