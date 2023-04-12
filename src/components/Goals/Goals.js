import React from 'react'
import './Goals.css';
import { NavLink } from "react-router-dom";

import FreshFact7 from '../../images/FreshFact7.PNG';

const Validation = Event =>{
  if((document.getElementById("EasyRecievingRadio").checked || document.getElementById("SpecialNeedsRadio").checked ||
     document.getElementById("BestIngredientsRadio").checked || document.getElementById("TastyFoodRadio").checked) === true)
    {
      // ---------- Let's Go ----------
    }
  else{
    Event.preventDefault();
    alert("Select any of the Options")
  }
}

let EaterType = "";

function EasyRecievingSelector(){
    EaterType = "EasyRecieving";
    localStorage.setItem("Goals", EaterType);

    document.getElementById("EasyRecieving").classList.remove("EasyRecievingRow");
    document.getElementById("EasyRecieving").classList.add("SelectedRow");

    document.getElementById("SpecialNeeds").classList.remove("SelectedRow");
    document.getElementById("SpecialNeeds").classList.add("SpecialNeedsRow");

    document.getElementById("BestIngredients").classList.remove("SelectedRow");
    document.getElementById("BestIngredients").classList.add("BestIngredientsRow");
    
    document.getElementById("VeyrBestIngredients").classList.remove("SelectedRow");
    document.getElementById("VeyrBestIngredients").classList.add("TastyFoodRow");
}
function SpecialNeedsSelector(){
    EaterType = "Special Needs";
    localStorage.setItem("Goals", EaterType);

    document.getElementById("SpecialNeeds").classList.remove("SpecialNeedsRow");
    document.getElementById("SpecialNeeds").classList.add("SelectedRow");

    document.getElementById("EasyRecieving").classList.remove("SelectedRow");
    document.getElementById("EasyRecieving").classList.add("EasyRecievingRow");

    document.getElementById("BestIngredients").classList.remove("SelectedRow");
    document.getElementById("BestIngredients").classList.add("BestIngredientsRow");
    
    document.getElementById("TastyFood").classList.remove("SelectedRow");
    document.getElementById("TastyFood").classList.add("TastyFoodRow");
}
function BestIngredientsSelector(){
    EaterType = "BestIngredients";
    localStorage.setItem("Goals", EaterType);

    document.getElementById("BestIngredients").classList.remove("BestIngredientsRow");
    document.getElementById("BestIngredients").classList.add("SelectedRow");

    document.getElementById("EasyRecieving").classList.remove("SelectedRow");
    document.getElementById("EasyRecieving").classList.add("EasyRecievingRow");

    document.getElementById("SpecialNeeds").classList.remove("SelectedRow");
    document.getElementById("SpecialNeeds").classList.add("SpecialNeedsRow");
    
    document.getElementById("TastyFood").classList.remove("SelectedRow");
    document.getElementById("TastyFood").classList.add("TastyFoodRow");    
}
function TastyFoodSelector(){
    EaterType = "Very BestIngredients";
    localStorage.setItem("Goals", EaterType);

    document.getElementById("TastyFood").classList.remove("TastyFoodRow");
    document.getElementById("TastyFood").classList.add("SelectedRow");

    document.getElementById("EasyRecieving").classList.remove("SelectedRow");
    document.getElementById("EasyRecieving").classList.add("EasyRecievingRow");

    document.getElementById("SpecialNeeds").classList.remove("SelectedRow");
    document.getElementById("SpecialNeeds").classList.add("SpecialNeedsRow");
    
    document.getElementById("BestIngredients").classList.remove("SelectedRow");
    document.getElementById("BestIngredients").classList.add("BestIngredientsRow");
}


function Goals() {
  return (
    <div class="container-fluid">

            {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>What is the most important thing about <span>{localStorage.getItem("dogName")}</span>'s food?</h3>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}
      {/* Dog Name */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <p id="Header">-------------<span>{localStorage.getItem("dogName")}</span> is.-------------</p>
        </div>
        <div class="col-md-2"></div>
      </div>


      {/* A EasyRecieving */}
      <div class="row mt-5">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row EasyRecievingRow" id="EasyRecieving"  >
                <div class="col-md-1">
                    <input type="radio" id="EasyRecievingRadio" name="EaterType" onClick={EasyRecievingSelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                    <label id="EasyRecievingLabel" htmlFor='EasyRecievingRadio'>The ease of ordering it and recieving it (just when I need it)</label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Special Needs */}
      <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row SpecialNeedsRow" id="SpecialNeeds">
                <div class="col-md-1">
                    <input type="radio" id="SpecialNeedsRadio" name="EaterType" onClick={SpecialNeedsSelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                    <label id="SpecialNeedsLabel" htmlFor='SpecialNeedsRadio'>The food meets his special health needs</label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Best Ingredients */}
      <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row BestIngredientsRow" id="BestIngredients">
                <div class="col-md-1">
                    <input type="radio" id="BestIngredientsRadio" name="EaterType" onClick={BestIngredientsSelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                    <label id="BestIngredientsLabel" htmlFor='BestIngredientsRadio'>The food contains the best ingredients for <span>{localStorage.getItem("dogName")}</span></label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Tasty Food */}
      <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row TastyFoodRow" id="TastyFood">
                <div class="col-md-1">
                    <input type="radio" id="TastyFoodRadio" name="EaterType" onClick={TastyFoodSelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                    <label id="TastyFoodLabel" htmlFor='TastyFoodRadio'><span>{localStorage.getItem("dogName")}</span> loves the taste of food and is happy to eat it.</label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Fresh Fact */}
      {/* <div class="row mt-5" id="FreshFact">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-10">
              <h3><b>Fresh Fact</b></h3>
            </div>
            <div class="col-md-2">
              <img id="FreshFact7" src={FreshFact7} />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>Your perfectly portioned meals are frozen to lock in the freshness. 
                We deliver them in insulated boxes at a time that suits you.</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div> */}

<div class="row mt-2"></div>
<div className="row mt-5 freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={FreshFact7} alt="" />
          <p className="p2  ">Your perfectly portioned meals are frozen to lock in the freshness. 
                We deliver them in insulated boxes at a time that suits you.</p>
        </div>
        <div className="col-md-3"></div>

       </div>


{/* footer */}
      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Eating-type' type="button" className="btn  back py-2"><i class="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/help' onClick={Validation} type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    </div>
  )
}

export default Goals