import React, { useState } from 'react';
import '../styles/ApplyConnection.css';
import axios from 'axios';
import { useBaseUrl } from '../context/BaseUrlContext';
import { useEffect } from 'react';

const ApplyConnection = () => {
  const [applicantName, setApplicantName] = useState('');
  const [gender, setGender] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [ownership, setOwnership] = useState('');
  const [govtIdType, setGovtIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [category, setCategory] = useState('');
  const [loadApplied, setLoadApplied] = useState('');

  const baseUrl = useBaseUrl()

  useEffect(function(){
    const access_token = localStorage.getItem("accessToken")
    if(access_token == null){
        window.location.href = "/login"
    }
   
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const requestData = {
      Applicant_Name: applicantName,
      Gender: gender,
      District: district,
      State: state,
      Pincode: pincode,
      Ownership: ownership,
      GovtID_Type: govtIdType,
      ID_Number: idNumber,
      Category: category,
      Load_Applied: loadApplied,
    };
    try {
      const access_token = localStorage.getItem("accessToken")
      const response = await axios.post(`${baseUrl}/api/applicant_create`, requestData, {
        headers: {
          'Authorization': `Bearer ${access_token}`, // Include the access token in the Authorization header
          'Content-Type': 'application/json' // Optional, depends on your API
        }
      });
      window.location.reload()
    
      console.log('Form submitted successfully!', response.data);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    
    }
  }    

  return (
    <div className='ApplyMain'>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Apply Connection</h3>
                  <form onSubmit={handleSubmit}>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="applicantName" className="form-control form-control-lg" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
                          <label className="form-label" htmlFor="applicantName">Applicant Name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="femaleGender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="maleGender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="otherGender" value="Other" checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="district" className="form-control form-control-lg" value={district} onChange={(e) => setDistrict(e.target.value)} />
                          <label className="form-label" htmlFor="district">District</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="state" className="form-control form-control-lg" value={state} onChange={(e) => setState(e.target.value)} />
                          <label className="form-label" htmlFor="state">State</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="pincode" className="form-control form-control-lg" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                          <label className="form-label" htmlFor="pincode">Pincode</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="ownership" className="form-control form-control-lg" value={ownership} onChange={(e) => setOwnership(e.target.value)} />
                          <label className="form-label" htmlFor="ownership">Ownership</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="govtIdType" className="form-control form-control-lg" value={govtIdType} onChange={(e) => setGovtIdType(e.target.value)} />
                          <label className="form-label" htmlFor="govtIdType">Govt ID Type</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="idNumber" className="form-control form-control-lg" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
                          <label className="form-label" htmlFor="idNumber">ID Number</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="category" className="form-control form-control-lg" value={category} onChange={(e) => setCategory(e.target.value)} />
                          <label className="form-label" htmlFor="category">Category</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="number" id="loadApplied" className="form-control form-control-lg" value={loadApplied} onChange={(e) => setLoadApplied(e.target.value)} />
                          <label className="form-label" htmlFor="loadApplied">Load Applied</label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                     
                      <button type="button" onClick={handleSubmit} className="btn btn-success" data-mdb-ripple-init>Apply!</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyConnection;

