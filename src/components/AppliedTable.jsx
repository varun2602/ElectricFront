import React, { useEffect } from 'react'
import "../styles/AppliedConnections.css"
import AppliedTableBody from './AppliedTableBody'
import { useState } from 'react'

const AppliedTable = ({data, modalValues}) => {
  const [toupdateDict, setToUpdateDict] = useState({})
  const ColumnDict = {
    1: 'uuid',
    2: 'Applicant_Name',
    3: 'Gender',
    4: 'District',
    5: 'State',
    6: 'Pincode',
    7: 'Ownership',
    8: 'GovtID_Type',
    9: 'ID_Number',
    10: 'Category',
    11: 'Load_Applied',
    12: 'Date_of_Application',
    13: 'Date_of_Approval',
    14: 'Modified_Date',
    15: 'Status',
    16: 'Reviewer_ID',
    17: 'Reviewer_Name',
    18: 'Reviewer_Comments'
  };
  const allowed_array = [1, 2, 3, 4, 5, 6, 7, 10, 11, 13, 14, 15, 16, 17, 18]
  const getRowElement = function(event){
        
         const cell = event.target;
         const row = event.target.parentNode
       
         const  uuid_clicked = row.cells[1].innerText
         const cellIndex = Array.from(row.children).indexOf(cell);
       
         const element_clicked = row.cells[cellIndex].innerText
         if(cellIndex == 11){
            var clicked_element = parseInt(element_clicked)
         }
         else{
          var clicked_element = element_clicked
         }
         const updateDict = {}
         updateDict["uuid"] = uuid_clicked
         updateDict[ColumnDict[cellIndex]] = clicked_element
         modalValues(updateDict)
        // setToUpdateDict(updateDict)
         
        //  8, 9 and 12 not allowed to update 
  }
  useEffect(function(){
    console.log("to update", toupdateDict)
  }, [toupdateDict])
  return (

    <div className="AppliedTablecontainer">  
                                
    <div className="row">
    <div className="col-12">
        <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title m-b-0">List Of Applications</h5>
            </div>
                <div className="table-responsive">
                    <table className="table">
                    <thead className="thead-light">
                    <tr>
                      <th>
                        <label className="customcheckbox m-b-20">
                          <input type="checkbox" id="mainCheckbox"/>
                          <span className="checkmark"></span>
                        </label>
                      </th>
                    
                      <th scope="col">UUID</th>
                      <th scope="col">Applicant Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">District</th>
                      <th scope="col">State</th>
                      <th scope="col">Pincode</th>
                      <th scope="col">Ownership</th>
                      <th scope="col">Govt ID Type</th>
                      <th scope="col">ID Number</th>
                      <th scope="col">Category</th>
                      <th scope="col">Load Applied</th>
                      <th scope="col">Date of Application</th>
                      <th scope="col">Date of Approval</th>
                      <th scope="col">Modified Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Reviewer ID</th>
                      <th scope="col">Reviewer Name</th>
                      <th scope="col">Reviewer Comments</th>
                    </tr>
                  </thead>
                  
                        <tbody className="customtable">
                            {data.map( d => <AppliedTableBody key = {d.id} d = {d}  getRowElement = {getRowElement}/>)}
                             
                        </tbody>
                    </table>
                </div>
        </div>


    </div>
    


</div>


   </div> 


  )
}

export default AppliedTable
