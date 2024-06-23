import React, { useState } from 'react'
import "../styles/searchBar.css"

const SearchBar = ({handleSearch}) => {
    const [typed, setTyped] = useState("")
    const handleTyped = function(event){
         setTyped(event.target.value)
     
    }
  return (
    <div>
    <div className="SearchBarcontainer justify-content-center">
    
    <div className="row">

       <div className="col-md-8">
           
           <div className="input-group mb-3">
  <input type="text" value={typed} onChange={handleTyped} className="form-control input-text" placeholder="Search Applicants...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button onClick={(event) => {handleSearch(typed)}} className="btn btn-outline-warning btn-lg" type="button"><i className="fa fa-search"></i></button>
  </div>
</div>
           
       </div>        
        
    </div>
    
    
</div>
      
    </div>
  )
}

export default SearchBar
