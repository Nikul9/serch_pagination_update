import React, { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "../Pagination/pagination"
import { useDispatch } from "react-redux"
import { passValue } from "../../action/passId"
import { useHistory } from "react-router-dom"

const Serch = () => {
    const [ customer , setCustomer ] = useState([])
    const [ final ,setFinal ] = useState()
    const [ text , setText ] = useState('')
    const [totalItem , settotalItem] = useState()
    const [ currentPage , setcurrentPage] = useState()
    const [ pageSize , setpageSize] =  useState(3);
    const history = useHistory()
    const despatch = useDispatch()
    const onClockTosubmit = (e) => {
        e.preventDefault() 
        axios.get(`http://localhost:8000/api/serch?text=${text}&page=${currentPage}&limit=${pageSize}`).then((result) => {
            console.log(result);
            setCustomer(result.data.data.serchNewValue)
            settotalItem(result.data.data.total)
        }).catch((e) => {
            console.log(e);
        })
       // console.log(customer);
    }
    const onClickToId = (e) => {
        despatch(passValue(e.target.value))
        history.push('/editCustomer')
    }
    useEffect(() => {
            onClockTosubmit(window.event)
        
    },[currentPage])
    return (
        <>
            <form className="form-inline my-2 my-lg-0">
            <h3 className="mt-1 mr-4" >SERCH  </h3>
              <input className="form-control mr-sm-2" type="search" onChange={e => setText(e.target.value)} placeholder="Search" aria-label="Search" />
              <button onClick={e =>onClockTosubmit(e)}  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
                            <th><button class="btn btn-primery" value={res._id} onClick={onClickToId} > Update</button></th>                           
                        </tr>
                    </tbody> )
                }
            </table>
            <Pagination totalItem={totalItem} pageSize={pageSize} pageNumber={currentPage} currentPage={setcurrentPage}  />
        </>
    )
}

export default Serch