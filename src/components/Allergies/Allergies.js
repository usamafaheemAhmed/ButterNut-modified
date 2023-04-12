import React from 'react';
import './Allergies.css';
import FreshFact4 from '../../images/FreshFact4.PNG';
import NotSure from '../../images/notSure.jpg';
import { NavLink } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import { useState } from 'react';

function AllergiesDiv(){
    let Option = document.getElementById("AllergyRow").classList;
    if(Option.contains("d-none"))
    {
        Option.remove("d-none");
        document.getElementById("notSure").classList.add("d-none")

    }
    else{
        Option.add("d-none");
        for(var i = 0; i < (document.getElementsByName("Allergies").length); i++)
        {
          document.getElementsByName("Allergies")[i].checked = false;
        }
        document.getElementById("notSure").classList.remove("d-none")
    }
}

const NothingFunction = () =>{

  if(document.getElementById("checkboxOne").checked === true)
      {
        // alert("Uzair")
        for(var i = 0; i < (document.getElementsByName("Allergies").length); i++)
        {
          document.getElementsByName("Allergies")[i].checked = false;
        }
        Event.preventDefault();
      }
} 

function Allergies() {
  let [show1, setShow1]= useState(false)
  var AllergyNames = "";

  const Validation = Event => {
    if(!document.getElementById("AllergyCheckBox").checked ){
    if((document.getElementById("checkboxOne").checked || document.getElementById("checkboxTwo").checked
        || document.getElementById("checkboxThree").checked || document.getElementById("checkboxFour").checked
        || document.getElementById("checkboxFive").checked || document.getElementById("checkboxSix").checked
        || document.getElementById("checkboxSeven").checked || document.getElementById("checkboxEight").checked
        || document.getElementById("checkboxNine").checked || document.getElementById("checkboxTen").checked
        || document.getElementById("checkboxEleven").checked) === true)
      {
        Allergy();
      }
    else{
      Event.preventDefault();
      alert("Select any of the following Options");
    }
    }
  }

  function Allergy(){
    var Names = "";
    for(var i = 0; i < (document.getElementsByName("Allergies").length); i++){
          if(document.getElementsByName("Allergies")[i].checked){
            Names = (document.getElementsByName("Allergies")[i].value + ", ");
            AllergyNames += Names;
            localStorage.setItem("Allergies", (AllergyNames))
          }
        }
  }

  function select(){
    if((document.getElementById("checkboxTwo").checked
    && document.getElementById("checkboxThree").checked && document.getElementById("checkboxFour").checked
    && document.getElementById("checkboxFive").checked && document.getElementById("checkboxSix").checked
    && document.getElementById("checkboxSeven").checked && document.getElementById("checkboxEight").checked
    && document.getElementById("checkboxNine").checked && document.getElementById("checkboxTen").checked
    && document.getElementById("checkboxEleven").checked) === true)
      {
        setShow1(true);
      }
    else{
      document.getElementById("checkboxOne").checked= false;;
    }
  }


  return (
    <div class="container-fluid">
       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>Are you aware of any allergies?</h3>
        <p className='headerPera1 text-center'>Even though our meals are hypoallergenic with no added wheat, maize, soy or mystery ingredients, we like to make sure all recipes are right for your pooch</p>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}




      {/* Dog Name */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <p id="Header">----------<span>{localStorage.getItem("dogName")}</span> is alergic to.----------</p>
        </div>
        <div class="col-md-2"></div>
      </div>

      {/* Allergies Name */}
      <div class="row mt-3" id="AllergyRow">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
        <ul class="ks-cboxtags SpinOption">
                <li>
                    <input type="checkbox" id="checkboxOne" value="Nothing" onClick={()=>{setShow1(false); NothingFunction()}}/>
                    <label id="labelOne" for="checkboxOne">Nothing</label>
                </li>

                <li id="Shapaik">
                    <input type="checkbox" id="checkboxTwo" value="Beef" name='Allergies' onClick={select}/>
                    <label for="checkboxTwo">Beef</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxThree" value="Fish" name='Allergies' onClick={select}/>
                    <label for="checkboxThree">Fish</label>
                </li>
                
                <li>
                    <input type="checkbox" id="checkboxFour" value="Duck" name='Allergies' onClick={select}/>
                    <label for="checkboxFour">Duck</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxFive" value="Pork" name='Allergies' onClick={select}/>
                    <label for="checkboxFive">Pork</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxSix" value="Chicken" name='Allergies' onClick={select}/>
                    <label for="checkboxSix">Chicken</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxSeven" value="Turkey" name='Allergies' onClick={select}/>
                    <label for="checkboxSeven">Turkey</label>
                </li>
                
                <li>
                    <input type="checkbox" id="checkboxEight" value="Lamb" name='Allergies' onClick={select}/>
                    <label for="checkboxEight">Lamb</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxNine" value="Wild Boar" name='Allergies' onClick={select}/>
                    <label for="checkboxNine">Wild Boar</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxTen" value="Guinea Fowl" name='Allergies' onClick={select}/>
                    <label for="checkboxTen">Guinea Fowl</label>
                </li>

                <li>
                    <input type="checkbox" id="checkboxEleven" value="Vension" name='Allergies' onClick={select}/>
                    <label for="checkboxEleven">Vension</label>
                </li>
            </ul>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Checkbox */}
      <div class="row mt-3 mb-5">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <input type="checkbox" id="AllergyCheckBox" onClick={()=>{setShow1(false); AllergiesDiv()}} />
          <label id="AllergyBoxText">I'm not sure yet</label>
        </div>
        <div class="col-md-3"></div>
      </div>

      <div class="row mt-3 mb-5">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <Alert show={show1} className='alert2'>
            <div className='col-md-12 px-3 pt-3'>
            <p> <strong>Uh oh... </strong> <br/>

            It looks like puck is allergic to all our proteins. Get in touch with our friendly <br/>
            Customer Love team if you have any questions.</p>
            </div>
          </Alert>
        </div>
        <div class="col-md-3"></div>
      </div>

      <div class="row mt-3 mb-5 fade-in-bottom d-none" id="notSure">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <img src={NotSure} alt="NotSure" />
        </div>
        <div class="col-md-4"></div>
      </div>



      
      <div className="row freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={FreshFact4} alt="" />
          <p className="p2  ">Having allergies shouldn't stop your dog from enjoying a fresh diet, so we tailor 
                your selection to suit your pup's needs. In fact, we feed over 35,000 dogs with allergies.</p>
        </div>
        <div className="col-md-3"></div>

       </div>
      
      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Activity' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink onClick={Validation} to='/health-issues'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    </div>
  );
}

export default Allergies