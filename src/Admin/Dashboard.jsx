import React from 'react'
import ReactDOM from "react-dom";
import { Route, Routes,BrowserRouter } from 'react-router-dom'

import Products from '../AdminPages/Products';
import Users from '../AdminPages/Users';
import Suppliers from '../AdminPages/Suppliers';
import AfterLogin_home from '../AfterLoginComponents/AfterLogin_home';
import Dashboardhome from '../AdminPages/Dashboardhome';


import Admin_navbar from './admin_navbar'
import Sidenavbar from './Sidenavbar'

import Reports from '../AdminPages/Reports';

import Billingdashboard from '../AdminPages/Billingdashboard';
import CardPayment from '../AdminPages/CardPayment';
import Categories from '../AdminPages/Categories';
import EditCat from '../AdminPages/EditCat';
import ViewCat from '../AdminPages/ViewCat';
import ViewSubCat from '../AdminPages/Subcategory/ViewSubCat';
import EditSubCat from '../AdminPages/Subcategory/EditSubCat';
import AddSubCategory from '../AdminPages/Subcategory/AddSubCategory';
import EditSupplier from '../AdminPages/Supplier/EditSupplier';
import ViewSupllier from '../AdminPages/Supplier/ViewSupllier';
import Agents from '../AdminPages/Agents';
import ViewAgent from '../AdminPages/Agent/ViewAgent';
import EditAgent from '../AdminPages/Agent/EditAgent';
import AddAgent from '../AdminPages/Agent/AddAgent';
import AddProduct from '../AdminPages/Product/AddProduct';
import EditProduct from '../AdminPages/Product/EditProduct';
import ViewProduct from '../AdminPages/Product/ViewProduct';
import Navbar1 from '../Components/Navbar1';
import EditUser from '../AdminPages/User/EditUser';
import Orders from '../AdminPages/Orders';



function Dashboard() {

  
  return (
    <div>

     <div>
      {/* this working  */}
      {/* <Admin_navbar/> */}
      <Navbar1/>
     </div>
    

    {/* <BrowserRouter> */}
        <Sidenavbar>
          {/* ehrn we add browseroute here its not working */}
        
            <Routes>
                {/* Routes for admin dashboard */} 
                <Route path="/welcome" element={<AfterLogin_home/>} />  
                {/* this home not working */}
                <Route path="/dashboard1" element={<Dashboardhome/>} />  
                {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
                <Route path="/products" element={<Products/>} />
                {/* <Route path="/products" exact component={Products} /> */}
                <Route path="/categories" element={<Categories/>} />
                
                <Route path="/suppliers" element={<Suppliers/>} />
                <Route path="/agents" element={<Agents/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/reports" element={<Reports/>} />



                {/* route foe adminhome to billing page */}
                <Route path="/orders" element={<Orders/>} />

                {/* route foe adminhome to billing page */}
                <Route path="/billing" element={<Billingdashboard/>} />

                {/* route for card payment page */}
                <Route path="/cpayment" element={<CardPayment/>} />

                //edit Category
                <Route path="category/editCat/:id" element={<EditCat/>} />

                //view Category
                <Route path="category/viewCat/:id" element={<ViewCat/>} />

                //view sub-Category
                <Route path="/subcategory/viewsubcat/:id" element={<ViewSubCat/>} />

                //edit sub-category
                <Route path="/subcategory/editsubcat/:id" element={<EditSubCat/>} />

                //add sub-category
                <Route path="/subcategory/addsubcat" element={<AddSubCategory/>} />

                //view supplier
                <Route path="/suppliers/viewsupplier/:id" element={<ViewSupllier/>} />

                //edit supplier
                <Route path="/suppliers/editsupplier/:id" element={<EditSupplier/>} />


                //add agent
                <Route path="/agents/addagent" element={<AddAgent/>} />

                //view agent
                <Route path="/agents/viewagent/:id" element={<ViewAgent/>} />

                //edit agent
                <Route path="/agents/editagent/:id" element={<EditAgent/>} />

                //add product
                <Route path="/products/addproduct" element={<AddProduct/>} />

                //view product
                <Route path="/products/viewproduct/:id" element={<ViewProduct/> } />

                //edit product
                <Route path="/products/editproduct/:id" element={<EditProduct/>} />

                {/* edit user */}
                <Route path="/users/edituser/:id" element={<EditUser/>} />

            </Routes>             
           
        </Sidenavbar>
      {/* </BrowserRouter>     */}
          
         

         <div >
            {/* <Dashboardhome/> */}
           
         </div>
      
     
    </div>
  )
}

export default Dashboard