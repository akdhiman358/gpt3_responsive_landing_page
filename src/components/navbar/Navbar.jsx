import React, { useState} from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import logo from '/assets/logo.svg'
function Navbar() {
  const Menu = ()=>(
      <>
        <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is Gpt?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
      </>
  )
  const [toggleMenu,setToggleMenu] = React.useState(false)
  return (
    <div className="gpt3__navbar section__padding">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <p className='sign__in'>Sign In</p>
        <button type='button' className='sign__up'> Sign Up</button>
      </div>
      <div className="navbar__menu">
        {
          toggleMenu ?
          <RiCloseLine size={27} onClick={()=>setToggleMenu(false)}/>
          :
          <RiMenu3Line size={27} onClick={()=>setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className='gpt3__navbar-menu scale-up-center'>
              <div className="gpt3__navbar-menu_links">
                <Menu />
              </div>
              <div className="gpt3__navbar-menu_sign">
                <p className='sign__in'>Sign In</p>
                <button type='button' className='sign__up'> Sign Up</button>
              </div>
            </div>
          )
        }
      </div>
    </div> 

  )
}

export default Navbar