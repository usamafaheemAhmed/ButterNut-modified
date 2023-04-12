import React from 'react';
import './Location.css';
import LocationDog from '../../images/LocationDog.PNG';
import FreshFact6 from '../../images/FreshFact6.PNG';
import { NavLink } from "react-router-dom";

const Validation = Event => {
  if(document.getElementById("PostCodeInput").value === "")
  {
    Event.preventDefault();
    document.getElementById("PostCodeInput").classList.add("is-invalid")
  }
  else{
    localStorage.setItem("Location", document.getElementById("LocationOptions").value)
    localStorage.setItem("PostCode", document.getElementById("PostCodeInput").value);
  }
}

function Location() {
  return (
    <div class="container-fluid">
       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>Where should we deliver <span>{localStorage.getItem("dogName")}</span>'s food?</h3>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}
        {/* Dog Name */}
        <div class="row mt-5">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">
                <p id="Header">------------<span>{localStorage.getItem("dogName")}</span> lives in.------------</p>
            </div>
            <div class="col-md-2"></div>
        </div>

        {/* Dropdown Menu - Places */}
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <select className='' id="LocationOptions">
                    <option value="Great Britian">Great Britian</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Republic of Ireland">Republic of Ireland</option>
                    <option value="Northern Ireland">Northern Ireland</option>
                    <option value="Netherlands">Netherlands</option>
                </select>
            </div>
            <div class="col-md-3"></div>
        </div>

        {/* Postcode */}
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
                <label>Your postcode</label><br/>
                <input class="form-control m-0 px-2" placeholder="  e.g. 54000" id="PostCodeInput"/>
            </div>
            <div class="col-md-3"></div>
        </div>

        {/* Location Dog */}
        <div class="row mt-5">
            <div class="col-md-2"></div>
            <div class="col-md-5"></div>
            <div class="col-md-3">
                <img src={LocationDog} alt=""/ >
            </div>
            <div class="col-md-2"></div>
        </div>

        {/* Fresh Fact */}
      <div class="row mt-5" id="FreshFact">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-10">
              <h3><b>Fresh Fact</b></h3>
            </div>
            <div class="col-md-2">
              <img id="FreshFact4" src={FreshFact6} alt=""/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>We're as proud as a dog carrying a new stick to be recognised as a B Corp. 
                We're working to leave the world a little happier and healthier than we found it.</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/snacks' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/petParent' onClick={Validation} type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    </div>
  )
}

export default Location