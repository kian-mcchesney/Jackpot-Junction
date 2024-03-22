import "bootstrap/dist/css/bootstrap.css"
import React from "react"

function Navbar()
{ 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  
    <div className="navbar-nav" style={{marginLeft: '10px'}}>
      <h1 className="navbar-brand" >Jackpot Junction</h1>
    </div>

    <form className="form-inline" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '10px' }}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{marginRight: '10px'}}></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

    

  </nav>
  )
}

export default Navbar