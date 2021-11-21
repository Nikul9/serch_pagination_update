import React, { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "../Pagination/pagination"

const SerchAll = () => {
    const [ customer , setCustomer ] = useState([])
    const [totalItem , settotalItem] = useState()
    const [ currentPage , setcurrentPage] = useState()
    const [ pageSize , setpageSize] =  useState(3);
    const onClockTosubmit = (e) => {
        e.preventDefault() 
        axios.get(`http://localhost:8000/api/allCustomer?page=${currentPage}&limit=${pageSize}`).then((result) => {
            console.log(result);
            setCustomer(result.data.data.serchNewValue)
            settotalItem(result.data.data.total)
        }).catch((e) => {
            console.log(e);
        })
       // console.log(customer);
    }
    
    useEffect(() => {
            onClockTosubmit(window.event)
    },[currentPage])
    return (
        <>
            <h2>ALL CUSTOMER</h2>
            <div className="col-sm-9"></div>
            <table className="table table-codensed table-hower">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Company</th>
                        <th>City</th>
                    </tr>
                </thead>
                {
                    customer.map(res => <tbody>
                        <tr className="overflow-auto">
                            <th>{res.first_name}</th>
                            <th>{res.last_name}</th>
                            <th>{res.company}</th>
                            <th>{res.city}</th>                            
                        </tr>
                    </tbody> )
                }
            </table>
            <Pagination totalItem={totalItem} pageSize={pageSize} pageNumber={currentPage} currentPage={setcurrentPage}  />
        </>
    )
}

export default SerchAll