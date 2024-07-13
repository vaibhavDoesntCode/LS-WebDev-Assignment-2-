import React from "react"
import "./Navbar.css"

function Navbar ({dark, setDark}) {

  function changeMode(){
    setDark(!dark)
  }
  return (
    <>
    <nav className="navbar border-bottom" >
        <div className="container-fluid">
            <h1 href="#" className="navbar-brand my-0" >Notes</h1>
            <form role="search">
                <input type="search" className="form-control me-2 search-bar" placeholder="Search" aria-label="Search" />
            </form>
            <div className="nav-options">
           <label className="switch-a">
            <input type="checkbox" id="dark-mode-swicth" onChange={changeMode}  />
            <span className="slider-a" ></span>
           </label>            
            </div>
        </div>
    </nav>
    
    </>
  )
};

export default Navbar;
