import React from 'react';
import './PetParent.css';
import { NavLink } from "react-router-dom";

import FreshFact1 from '../../images/FreshFact1.jpeg';

const Validation = Event => {
  if(document.getElementById("NameInput").value === "" || document.getElementById("EmailInput").value === ""
  || document.getElementById("AddressInput").value === "")
  {
    if(document.getElementById("NameInput").value === "")
    {
      Event.preventDefault();
      document.getElementById("NameInput").classList.add("is-invalid");
    }
    else if(document.getElementById("EmailInput").value === "")
    {
      Event.preventDefault();
      
      document.getElementById("NameInput").classList.add("is-valid");
      document.getElementById("NameInput").classList.remove("is-invalid");

      document.getElementById("EmailInput").classList.add("is-invalid");
    }
    else if(document.getElementById("AddressInput").value === "")
    {
      Event.preventDefault();
      
      document.getElementById("EmailInput").classList.add("is-valid");
      document.getElementById("EmailInput").classList.remove("is-invalid");

      document.getElementById("AddressInput").classList.add("is-invalid");
    }
  }
  else{
    document.getElementById("AddressInput").classList.add("is-valid");
    document.getElementById("AddressInput").classList.remove("is-invalid");

    localStorage.setItem("Email", document.getElementById("EmailInput").value);
    localStorage.setItem("PName", document.getElementById("NameInput").value);
    localStorage.setItem("Address", document.getElementById("AddressInput").value);
  }
}

function PetParent() {
  return (
    <div class="container-fluid">

       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>Pup parent details?</h3>
        <p className='headerPera1 text-center'>Don't worry - we won't create an account until you've reviewed and paid for your plan on the next pages.</p>
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

        {/* Your Name */}
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
                <label>Your Name</label><br/>
                <input class="form-control" placeholder="e.g. Jacob Orams" id="NameInput"/>
            </div>
            <div class="col-md-3"></div>
        </div>

        {/* Your Email */}
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
                <label>Your Email</label><br/>
                <input class="form-control" placeholder="e.g. someone@example.com" id="EmailInput"/>
            </div>
            <div class="col-md-3"></div>
        </div>

        {/* Your Address */}
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
                <label>Address</label><br/>
                <input class="form-control" placeholder="Enter your address"  id="AddressInput"/>
            </div>
            <div class="col-md-3"></div>
        </div>

        {/* Checkbox */}
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-1">
                <input type="checkbox" id="Checkbox"/>
            </div>
            <div class="col-md-5">
                <label id="CheckboxText">I'd like the odd email that gives me access to Butternut discounts, 
                professional advice on my dog's wellbeing, and the occasional photo of dogs being dogs. <a href="##" id="CheckLink">See our privacy policy</a></label>
            </div>
            <div class="col-md-3"></div>
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
              <img id="FreshFact1" src={FreshFact1} alt=""/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>We're changing the history of dog food, but we still love seeing our Butternutters 
                with names like Jane Pawsten, George Washingbone and Joan of Bark (to name a few).</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/location' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/plans-1' onClick={Validation} type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    </div>
  )
}

export default PetParent