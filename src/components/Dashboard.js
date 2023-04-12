import React from 'react';
import './Dashboard.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Title(Elem){
  document.getElementById("NavTitle").innerHTML = Elem;
}

function Dashboard() {
  return (
    <div className='container-fluid'>
      <div className="row header py-5">
        <div className='row'>
          <div className="col-md-12 headerHeading">
            <ul class="headerHeading DogDesc">
              <NavLink to="/Dashboard" id="NavlinkButtons"  onClick={ () => Title("Welcome to Dashboard!") }>Home</NavLink>
              <NavLink to="/View-Users" id="NavlinkButtons"  onClick={ () => Title("Users List") }>Users</NavLink>
              <NavLink to="/Add-User" id="NavlinkButtons"  onClick={ () => Title("Users List") }>Add User</NavLink>
              <NavLink to="/View-Orders" id="NavlinkButtons" onClick={ () => Title("Orders List") }>Orders</NavLink>
              {/* <NavLink to="" id="NavlinkButtons">Disabled</NavLink> */}
              <NavLink to="/Login" id="LogoutButton" >Logout</NavLink>
            </ul>         
          </div>
        </div>

        <div className='row mt-3'>
        <div className="col-md-12 headerHeading">       
        <h3 id="NavTitle" className='text-center headerHeading1'></h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard