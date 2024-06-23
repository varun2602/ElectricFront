import React, { useEffect } from 'react'
import { useState } from 'react'
import { useBaseUrl } from '../context/BaseUrlContext';
import '../styles/AppliedConnections.css'
import '../styles/AppliedTablePagination.css'
import AppliedTable from './AppliedTable';
import AppliedPagination from './AppliedPagination';
import DatePicker from './DatePicker';
import UpdateModal from './UpdateModal';
import axios from "axios"


const AppliedConnections = () => {
    const [data, setData] = useState([]); // To store paginated data
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const baseUrl = useBaseUrl()
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [dateMessage, setDateMessage] = useState(false)
    const [updateModalValues, setUpdateModelValues] = useState("")
    useEffect(function(){
        console.log("Update modal values", updateModalValues)
    },[updateModalValues])

    useEffect(function(){
        const access_token = localStorage.getItem("accessToken")
        if(access_token == null){
            window.location.href = "/login"
        }
       
      }, [])

    const updateApplicantFunction = async function(value){
        
        const secondKey = Object.keys(updateModalValues)[1]
        const firstkey = Object.keys(updateModalValues)[0]
        console.log("Update function called!", updateModalValues)
        const formData = new FormData()
        if(secondKey == "Load_Applied"){
            
            setUpdateModelValues({firstkey:updateModalValues[firstkey], secondKey:parseInt(value)})
            
        }
        else{
            setUpdateModelValues({firstkey:updateModalValues[firstkey], secondKey:value})
        }
        formData.append("uuid", updateModalValues[firstkey])
        formData.append(secondKey,value)
        console.log("update test", updateModalValues[secondKey],  secondKey)
        const response = await axios.put(`${baseUrl}/api/update_applicant`, formData, {
            headers: {
                "Content-Type": "application/json"
              }
        })
        // console.log("response", response.data)
        window.location.reload()
    }

    const modalValues = function(value){
        setUpdateModelValues(value)
    }
    const handleStartDate = function(value){
        setStartDate(value)
        
    }
    const handleEndDate = function(value){
        setEndDate(value)
    }

    const submitDatePicker = function(){
        console.log("submit function called!", startDate, endDate)

        fetchData()
    }


    const handleCurrentPage = function(value){
        setCurrentPage(value)
    }
    useEffect(function(){
      console.log("current page", currentPage)
    }, [currentPage])

    useEffect(() => {
        fetchData();
        
    },[currentPage]);
    
    const fetchData = async () => {
        try {
            if(startDate === null && endDate === null){
                const access_token = localStorage.getItem("accessToken");
                const response = await fetch(`${baseUrl}/api/applicants_paginated?p=${currentPage}`, {
                  method: 'GET', 
                  headers: {
                    'Authorization': `Bearer ${access_token}`, 
                    'Content-Type': 'application/json' 
                  }
                });
            const responseData = await response.json();
            setData(responseData.results); 
            
            
            setTotalPages(Math.floor(responseData.count / 10)); 
            }
            else if(startDate ===null || endDate === null){
                setDateMessage(true)
                console.log("condition called!")

            }
            else{
            //   console.log("Date Tets", startDate, endDate)
              const access_token = localStorage.getItem("accessToken");
              const response = await fetch(`${baseUrl}/api/date_filter?p=${currentPage}`, {
                method: 'POST', 
                headers: {
                    'Authorization': `Bearer ${access_token}`, 
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ "min_date": startDate, "max_date": endDate }) 
            })
              const responseData = await response.json();
            //   console.log("length",Object.values(response.data).length)
            // console.log(responseData.results, typeof(response.results))
            setData(responseData.results); 
            
            
            setTotalPages(Math.floor(responseData.count / 10)); 
            
            }
           
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  return (
    <div className='AppliedConnectionsPage'>
    <UpdateModal updateModalValues = {updateModalValues} updateApplicantFunction = {updateApplicantFunction}/>
    <div>
    {dateMessage === true?<small style={{"color":"red"}}>Select both start and end date!</small>:null}
    <DatePicker className = "date-picker" handleStartDate = {handleStartDate} handleEndDate = {handleEndDate} submitDatePicker = {submitDatePicker}/>
    </div>
    <div className="table-wrapper">
    <div>
    <AppliedTable data = {data} modalValues = {modalValues}/>
    </div>
    <div>
    <AppliedPagination Page = {currentPage} totalPages = {totalPages} handleCurrentPageValue = {handleCurrentPage} />
    </div>

    </div>
   
    </div>
  )
}

export default AppliedConnections
