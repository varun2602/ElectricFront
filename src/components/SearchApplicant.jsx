import React, { useEffect } from 'react'
import axios  from 'axios'
import { useState } from 'react'
import AppliedTable from './AppliedTable'
import SearchTable from './SearchTable'
import SearchBar from './SearchBar'
import '../styles/SearchApplicant.css'
import { useBaseUrl } from '../context/BaseUrlContext';


const SearchApplicant = () => {

  useEffect(function(){
    const access_token = localStorage.getItem("accessToken")
    if(access_token == null){
        window.location.href = "/login"
    }
   
  }, [])
    const [data, setData] = useState([])
    const [toSearch, setToSearch] = useState(null)
    const baseUrl = useBaseUrl()
    const handleSearch = function(value){
      
        setToSearch(value)
        searchData()
        // console.log("search test", toSearch, value)

        
    }
    useEffect(() => {
      if (toSearch !== null) {
        searchData();
      }
    }, [toSearch]);

    
    const searchData = async function(){
    const access_token = localStorage.getItem("access_token");
    const response = await axios.get(`${baseUrl}/api/search_applicants?search=${toSearch}`, {
      headers: {
        'Authorization': `Bearer ${access_token}`, // Include the access token in the Authorization header
        'Content-Type': 'application/json' // Optional, depends on your API
      }
    });
        setData(response.data)
          
    }
  return (
    <div  className='searchApplicants'>
      <div>
      <SearchBar handleSearch = {handleSearch} />
      </div>
      <div className='searchTable'>
      <SearchTable searchedData={data}/> 
      </div>
    </div>
  )
}

export default SearchApplicant
