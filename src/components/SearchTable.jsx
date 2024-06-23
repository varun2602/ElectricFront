import React from 'react'
import '../styles/AppliedTablePagination.css'
import AppliedTableBody from './AppliedTableBody'

const SearchTable = ({searchedData}) => {
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
                        {searchedData.map( d => <AppliedTableBody key = {d.id} d = {d} />)}
                             
                        </tbody>
                    </table>
                </div>
        </div>


    </div>
    


</div>


   </div> 

  )
}

export default SearchTable
