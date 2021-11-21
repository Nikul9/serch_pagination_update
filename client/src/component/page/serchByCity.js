import React, { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "../Pagination/pagination"
import { useHistory } from "react-router-dom"

const SerchByCity = () => {
    const [ customer , setCustomer ] = useState([])
    const [ text , setText ] = useState('')
    const [totalItem , settotalItem] = useState()
    const [ currentPageCity , setcurrentPage] = useState()
    const [ pageSize , setpageSize] =  useState(3);
    
    const onClockTosubmit = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8000/api/serchCity?text=${text}&page=${currentPageCity}&limit=${pageSize}`).then((result) => {
            console.log(result);
            setCustomer(result.data.data.serchNewValue)
            settotalItem(result.data.data.total)
        }).catch((e) => {
            console.log(e);
        })
       // console.log(customer);
    }
    useEffect(() => {
        onClockTosubmit(window.event); 
    },[currentPageCity])
    return (
        <>
            <form className="form-inline my-2 my-lg-0" >
            <h3 className="mt-1 mr-4" >SERCH  </h3>
              <input className="form-control mr-sm-2" type="search" onChange={e => setText(e.target.value)} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={e => onClockTosubmit(e)}>Search</button>
            </form>
            <div className="col-sm-9"></div>
            <table className="table table-codensed table-hower">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Company</th>
                        <th>City</th>
                        <th>Update</th>
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
            <Pagination totalItem={totalItem} pageSize={pageSize} pageNumber={currentPageCity} currentPage={setcurrentPage}  />
        </>
    )
}

export default SerchByCity