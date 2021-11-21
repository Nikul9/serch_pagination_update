import React from "react"
import Serch from "./page/serch"
import Customer from "./page/addCustomer"
import EditCustomer from "./page/EditCustomer"
import { Link, Route , Switch } from "react-router-dom"
import SerchByCity from "./page/serchByCity"
import SerchAll from "./page/AllUser"
const Dashboard = () => {
    return (
        <>
            {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
            <!------ Include the above in your HEAD tag ----------> */}

            {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous"> */}
            <div className="home">
                <div className="container-fluid display-table">
                    <div className="row display-table-row">
                        <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                            <div className="logo">
                                <h1>Dashboard</h1>
                            </div>
                            <div className="navi">
                                <ul>
                                    <li className="active"><Link to="/"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Add Customer</span></Link></li>
                                    <li><Link to="/serch"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">SERCH & UPDATE</span></Link></li>
                                    <li><Link to="/serchCity"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">SERCH CITY</span></Link></li> 
                                    <li><Link to="/allCustomer"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">All Customer</span></Link></li> 
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-11 display-table-cell v-align">
                            {/* <!--<button type="button" className="slide-toggle">Slide Toggle</button> --> */}
                            <div className="row">
                                    
                            </div>
                            <div className="user-dashboard">
                                <div className="row">
                                    <Switch>
                                        <Route exact path="/" component={Customer}  />
                                        <Route exact path="/editCustomer" component={EditCustomer}  />
                                        <Route exact path="/serch" component={Serch}  />
                                        <Route exact path="/serchCity" component={SerchByCity}  />
                                        <Route exact path="/allCustomer" component={SerchAll}  />
                                    </Switch>
                                    <div className="col-md-5 col-sm-5 col-xs-12 gutter">
                                       
                                        
                                        </div>
                                </div>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* <!-- Modal --> */}
                <div id="add_project" className="modal fade" role="dialog">
                    <div className="modal-dialog">

                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <div className="modal-header login-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h4 className="modal-title">Add Project</h4>
                            </div>
                            <div className="modal-body">
                                        <input type="text" placeholder="Project Title" name="name" />
                                        <input type="text" placeholder="Post of Post" name="mail" />
                                        <input type="text" placeholder="Author" name="passsword" />
                                        <textarea placeholder="Desicrption"></textarea>
                                </div>
                            <div className="modal-footer">
                                <button type="button" className="cancel" data-dismiss="modal">Close</button>
                                <button type="button" className="add-project" data-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dashboard