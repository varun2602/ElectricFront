import React, { useEffect, useState } from 'react';
import '../styles/UpdateModel.css'
// import { useState } from 'react';

const UpdateModal = ({updateModalValues, updateApplicantFunction}) => {
 const [unique_id, setuniqueid] = useState("")
 const [valueToUpdate, setValueToUpdate] = useState("")
 const [second_key, setsecondKey] = useState("")
 const [second_value, setSecondValue] = useState("")
 const handleValueToUpdate = function(event){
    setValueToUpdate(event.target.value)
 }
  useEffect(function(){
    setsecondKey(Object.keys(updateModalValues)[1])
    setSecondValue(updateModalValues[second_key])
  }, [updateModalValues, second_key])
  const [formData, setFormData] = useState({
    Applicant_Name: '',
    Gender: '',
    District: '',
    State: '',
    Pincode: '',
    Ownership: '',
    GovtID_Type: '',
    ID_Number: '',
    Category: '',
    Load_Applied: '',
    Date_of_Application: '',
    Date_of_Approval: '',
    Modified_Date: '',
    Status: '',
    Reviewer_ID: '',
    Reviewer_Name: '',
    Reviewer_Comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here
    console.log('Form submitted with data:', formData);
    // Reset form data or close modal
    onClose();
  };
  

  return (
  <div>



<div id="myModal" className="modal fade">
	<div className="modal-dialog modal-login">
    <small style={{"color":"red"}}>Caution: System wont let you update Date of Application, Govt ID Type and ID Number. Also Load more than 200KV is not permitted</small>
		<div className="modal-content">
			<div className="modal-header">				
				<h4 className="modal-title">Update Value</h4>
				<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div className="modal-body">
				<form action="/examples/actions/confirmation.php" method="post">
					<div className="form-group">
						<i className="fa fa-user"></i>
						<input type="text" className="form-control"  placeholder={updateModalValues.uuid} required="required" readOnly/>
					</div>
					<div className="form-group">
						<i className="fa fa-lock"></i>
						<input type="text" value={valueToUpdate} onChange={handleValueToUpdate} className="form-control" placeholder={`current value: ${second_value}`} required="required"/>					
					</div>
					<div className="form-group">
						<input type="button" onClick={() => {updateApplicantFunction(valueToUpdate)}} className="btn btn-primary btn-block btn-lg" value="Update"/>
					</div>
				</form>
			</div>
			
		</div>
	</div>
</div>  
</div>   

  );
};

export default UpdateModal;
