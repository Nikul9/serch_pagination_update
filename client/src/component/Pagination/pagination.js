import React from "react"

const Pagination = ({totalItem , pageSize , pageNumber , currentPage}) => {
    let middlePagination;
  
    pageNumber = pageNumber || 1;
  
    // default page size is 10
    pageSize = pageSize || 3;
  
    // calculate total pages
    var totalPages = Math.ceil(totalItem / pageSize);
  
    var startPage, endPage;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 0;
        endPage = totalPages;
        // eslint-disable-next-line no-unused-vars
        middlePagination = [...Array(endPage)].map((_ , idx) => {
          return( <>
           
            <button
              id="pagination" 
              key={startPage + idx + 1}
              onClick={() => currentPage(startPage + idx  + 1)}
            >
              {startPage + idx + 1}
            </button>
           
          </>)
        })
    } else {
        // more than 10 total pages so calculate start and end pages
        if (pageNumber <= 6) {
          console.log( 'page Number   =  '  + pageNumber)
            startPage = 0;
            endPage = 10;
            // eslint-disable-next-line no-unused-vars
            
            middlePagination = [...Array(10)].map((_ , idx) => {
            return( <>
              
              <button
                id="pagination"  
                key={startPage + idx +  1}
                onClick={() => currentPage(startPage + idx + 1)}
                
              >
                {startPage + idx + 1}
              </button>
              
              </>)
          })
        } else if (pageNumber + 4 >= totalPages) {
            startPage = totalPages - 10;
            endPage = totalPages ;
            // eslint-disable-next-line no-unused-vars
            
        middlePagination = [...Array(10)].map((_ , idx) => {
          return (<>
              <button
                id="pagination" 
                key={startPage +  idx + 1}
                onClick={() => currentPage(startPage + idx + 1)}
              >
              {startPage + idx + 1}
              </button>
          </>)
        })
          } else {
            startPage = pageNumber - 6 ;
            endPage =  pageNumber + 3  ;
            middlePagination = [...Array(10)].map((_ , idx) => {
             return( <>
              
              <button
                id="pagination" 
                key={startPage + idx +  1}
                onClick={() => currentPage(startPage + idx + 1)}
              >
              { startPage + idx + 1}
              </button>
              </>)
          })
        }
    }
    return(
      <>
      {/* <p> StartPage {startPage} , pageNumber + {pageNumber} , endPage {endPage} .  totalpage = {totalPages} </p> */}
      {middlePagination}
      </>
    )
  };
  
  export default Pagination;