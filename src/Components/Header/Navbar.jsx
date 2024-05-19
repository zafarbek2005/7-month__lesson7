import React from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <header>
    <div className="Navbar conteiner">
    
        <div className="logo">
          <NavLink to={'/'}>
          <strong>Logo</strong>
          </NavLink>
        </div>

        <div className="items">
            <Link to={"/admin"}>
            Admin
            </Link>
         

        </div>











    </div>
















    </header>
    
    
    
    
    
    </>
  )
}

export default Navbar