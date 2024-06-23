import React from 'react'
import "../styles/DatePicker.css"

const DatePicker = ({handleStartDate, handleEndDate, submitDatePicker}) => {
   
  return (
    <div>
    <div className="DatePickercontainer px-1 px-sm-5 mx-auto">
  <form autoComplete="off">
    <div className="flex-sm-row flex-column d-flex">
      <div className="col-sm-9 col-12 px-0 mb-2">
        <div className="input-group input-daterange">
          <input type="date" className="form-control" onChange={(e) => {handleStartDate(e.target.value)}}  placeholder="Start Date" />
          <input type="date" className="form-control" onChange={e => {handleEndDate(e.target.value)}}  placeholder="End Date" />
        </div>
      </div>
      <div className="col-sm-3 col-12 px-0">
        <button type="button" className="btn btn-black" onClick={submitDatePicker}>Search</button>
      </div>
    </div>
  </form>
</div>
</div>
     
  )
}

export default DatePicker
