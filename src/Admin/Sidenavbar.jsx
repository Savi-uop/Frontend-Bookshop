import React from 'react'

import { MDBIcon } from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';
// import { NavLink } from 'react-bootstrap';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import '../Admin/sidebar.css';

function Sidenavbar({children}) {
    const[isOpen,setIsOpen] =useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/dashboard1",
            name:"Dashboard",
            icon: <MDBIcon fas icon="home " />
        },
        {
            path:"/welcome",
            name:"Shop",
            icon: <MDBIcon fas icon="shopping-cart" />
        },
        {
            path:"/products",
            name:"Products",
            icon: <MDBIcon fas icon="th" />
            
        },
        {
            path:"/categories",
            name:"Categories",
            icon: <MDBIcon fas icon="border-all" />
            
        },
        {
            path:"/suppliers",
            name:"Suppliers",
            icon: <MDBIcon fas icon="warehouse" />
        },
        {
            path:"/agents",
            name:"Agents",
            icon: <MDBIcon fas icon="user-friends" />
        },
        {
            path:"/reports",
            name:"Analytics",
            icon: <MDBIcon fas icon="file-alt" />
        },
        {
            path:"/users",
            name:"Users",
            icon: <MDBIcon fas icon="user-cog" />
            
        }
        
    ]

  return (
    <div>

        <div className='container1 '>
            <div className='sidebar' style={{ width:isOpen ? "250px" : "55px" }}>
                <div className='top_section'>
                    <h3 className='logo' style={{ display:isOpen ? "block" : "none" }}></h3>
                    <div className='bars' style={{ marginLeft:isOpen ? "50px" : "0px" }}>
                        {/* <MDBIcon fas icon="align-justify" onClick ={toggle} /> */}
                        <img src="images/book_logo.png" roundedCircle onClick ={toggle} style={{ borderRadius: "50%" }} width="30px" height="30px" className="cursor-pointer hover-shadow "/>
                        
                    </div>
                </div>
                    {
                        menuItem.map((item,index)=>(
                            <Link to= {item.path} key={index} className="link" activeClassName="active">
                                <div className='icon'>{item.icon}</div>
                                <div className='link_text' style={{ display:isOpen ? "block" : "none" }}>{item.name}</div>
                            </Link>
                            // inhere link were replaced ny NavLInk but since not working added link
                        ))
                    }
            </div>
            <main>{children}</main>

            

        </div>


        
    </div>
  )
}

export default Sidenavbar