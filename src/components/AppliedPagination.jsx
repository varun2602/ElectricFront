import React, { useEffect } from 'react'

const AppliedPagination = ({Page, totalPages, handleCurrentPageValue}) => {
  const PageNumbers = Array.from({length:totalPages}, (_, i) => i + 1)
  // const checkClick = function(event){
  //   console.log("check", )
  // }
  useEffect(function(){
    console.log("test", Page, totalPages)
  }, [Page])
  return (
   
    <div className="demo">
    <nav className="pagination-outer" aria-label="Page navigation">
        <ul className="pagination">
            <li className="page-item">
                <a href="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                </a>
            </li>
            {PageNumbers.map(number => <li key={number} className="page-item " value={number} onClick={(e) => {
              e.preventDefault();
              handleCurrentPageValue(number);
            }}><a className="page-link" href="#">{number}</a></li>)}
            
            <li className="page-item">
                <a href="#" className="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
      

  )
}

export default AppliedPagination
