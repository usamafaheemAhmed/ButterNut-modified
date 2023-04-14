import React, { useEffect, useState } from 'react';
import './HealthIssues.css';
import FreshFact7 from '../../images/FreshFact7.PNG';
import { NavLink } from "react-router-dom";
import HealthFilter from './HealthFilter';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function NoHealthIssueFunction(){
    document.getElementById("NoIssues").classList.add("NoHealthIssuesClicked");
    document.getElementById("NoIssues").classList.remove("NoHealthIssues");

    document.getElementById("SomeIssues").classList.add("SomeHealthIssues");
    document.getElementById("SomeIssues").classList.remove("SomeHealthIssuesClicked");

    document.getElementById("HealthIssuesInput").classList.add("d-none");
    document.getElementById("addedDisease").classList.remove("BadgeGap");
}

function SomeHealthIssueFunction(){
    document.getElementById("SomeIssues").classList.remove("SomeHealthIssues");
    document.getElementById("SomeIssues").classList.add("SomeHealthIssuesClicked");

    document.getElementById("NoIssues").classList.remove("NoHealthIssuesClicked");
    document.getElementById("NoIssues").classList.add("NoHealthIssues");

    document.getElementById("HealthIssuesInput").classList.remove("d-none");
    
    document.getElementById("addedDisease").classList.add("BadgeGap");
}

function HealthIssues() {
  var HealthIssueNames = "Nothing";
  
  let [disease, setDisease]=useState([]);

  useEffect(() => {
    localStorage.setItem("Health", HealthIssueNames);

  },[]);


  const gettingData = (data)=>{
    console.log("data is coming From HealthFilter class",data);

     let e={
        id   :   1   ,
        name: localStorage.getItem("SelectedDisease")
      }
      setDisease([...disease,e]);

 }
  return (
    <div class="container-fluid">
 {/* header */}
 <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>Is <span>{localStorage.getItem("dogName")}</span> a fussy eater?</h3>
        <p className='headerPera1 text-center'>We're sure she will love Butternut at first bite, but we always like to check a dog's eating habits just in case.</p>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}

      {/* Dog Name */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center h1bold">
          <p id="Header">-------------<span>{localStorage.getItem("dogName")}</span> is.-------------</p>
        </div>
        <div class="col-md-2"></div>
      </div>

      {/* Health Issues Buttons */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <button id="NoIssues" class="NoHealthIssuesClicked headerPera1" onClick={NoHealthIssueFunction}>No health issues</button>
          <button id="SomeIssues" class="SomeHealthIssues headerPera1" onClick={SomeHealthIssueFunction}>Some health issues</button>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row mt-2  d-none" id="HealthIssuesInput">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
        <HealthFilter onSubmit={gettingData} />
        </div>
        <div class="col-md-3"></div>
      </div>

      <div class="row mt-2 " id="addedDisease">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
        {
          disease.map((disease)=>{
          return(
            <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
            <Badge>{disease.name}  <FontAwesomeIcon icon={faXmark}  onClick={(e)=>{      
              setDisease((current) => 
              current.filter((disease) => disease.id !== disease.id));
              document.getElementById("BreedInput").disabled = false; }}></FontAwesomeIcon> </Badge>
            </div>
            <div className='col-md-3'></div> 
            </div>
            
          );
        })
      }

        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Fresh Fact */}
      <div class="row mt-5"></div>
      <div class="row mt-5" id="FreshFact">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-10">
              <h3><b>Fresh Fact</b></h3>
            </div>
            <div class="col-md-2">
              <img id="FreshFact4" src={FreshFact7} alt=""/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>76% of our customers have seen improvements in their dog's health since feeding fresh - 
                from shinier coats to better poos. (We're not shy of a little poo chat here).</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Allergies' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink  to='/snacks'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    </div>
  )
}

export default HealthIssues