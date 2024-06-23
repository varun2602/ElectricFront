import React from 'react';
import UpdateModal from './UpdateModal';

const AppliedTableBody = (props) => {
  const { 
    id, uuid, Applicant_Name, Gender, District, State, Pincode, Ownership,
    GovtID_Type, ID_Number, Category, Load_Applied, Date_of_Application,
    Date_of_Approval, Modified_Date, Status, Reviewer_ID, Reviewer_Name, Reviewer_Comments 
  } = props.d;
  const handleRowClick = () => {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  };
const combineClick = function(event){
     props.getRowElement(event)
     handleRowClick()
}

  return (
    <tr onClick={(event) => {props.getRowElement(event)}} data-toggle="modal" data-target="#myModal">
      <th>
        <label className="customcheckbox">
          <input type="checkbox" className="listCheckbox" />
          <span className="checkmark"></span>
        </label>
      </th>
      <td>{uuid}</td>
      <td>{Applicant_Name}</td>
      <td>{Gender}</td>
      <td>{District}</td>
      <td>{State}</td>
      <td>{Pincode}</td>
      <td>{Ownership}</td>
      <td>{GovtID_Type}</td>
      <td>{ID_Number}</td>
      <td>{Category}</td>
      <td>{Load_Applied}</td>
      <td>{Date_of_Application}</td>
      <td>{Date_of_Approval}</td>
      <td>{Modified_Date}</td>
      <td>{Status}</td>
      <td>{Reviewer_ID}</td>
      <td>{Reviewer_Name}</td>
      <td>{Reviewer_Comments}</td>
    </tr>
  );
};

export default AppliedTableBody;

