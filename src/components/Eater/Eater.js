import React from 'react'
import './Eater.css';
import FreshFact5 from '../../images/FreshFact5.PNG';

import { NavLink } from "react-router-dom";

const Validation = Event =>{
  if((document.getElementById("FoodieRadio").checked || document.getElementById("GoodEaterRadio").checked ||
     document.getElementById("FussyRadio").checked || document.getElementById("VeryFussyRadio").checked) === true)
    {
      // alert("Let's Go")
    }
  else{
    Event.preventDefault();
    alert("Select any of the Options")
  }
}

let EaterType = "";

function FoodieSelector(){
    EaterType = "Foodie";
    localStorage.setItem("EaterType", EaterType);

    document.getElementById("Foodie").classList.remove("FoodieRow");
    document.getElementById("Foodie").classList.add("SelectedRow");

    document.getElementById("GoodEater").classList.remove("SelectedRow");
    document.getElementById("GoodEater").classList.add("GoodEaterRow");

    document.getElementById("Fussy").classList.remove("SelectedRow");
    document.getElementById("Fussy").classList.add("FussyRow");
    
    document.getElementById("VeyrFussy").classList.remove("SelectedRow");
    document.getElementById("VeyrFussy").classList.add("VeryFussyRow");
}
function GoodEaterSelector(){
    EaterType = "Good Eater";
    localStorage.setItem("EaterType", EaterType);

    document.getElementById("GoodEater").classList.remove("GoodEaterRow");
    document.getElementById("GoodEater").classList.add("SelectedRow");

    document.getElementById("Foodie").classList.remove("SelectedRow");
    document.getElementById("Foodie").classList.add("FoodieRow");

    document.getElementById("Fussy").classList.remove("SelectedRow");
    document.getElementById("Fussy").classList.add("FussyRow");
    
    document.getElementById("VeryFussy").classList.remove("SelectedRow");
    document.getElementById("VeryFussy").classList.add("VeryFussyRow");
}
function FussySelector(){
    EaterType = "Fussy";
    localStorage.setItem("EaterType", EaterType);

    document.getElementById("Fussy").classList.remove("FussyRow");
    document.getElementById("Fussy").classList.add("SelectedRow");

    document.getElementById("Foodie").classList.remove("SelectedRow");
    document.getElementById("Foodie").classList.add("FoodieRow");

    document.getElementById("GoodEater").classList.remove("SelectedRow");
    document.getElementById("GoodEater").classList.add("GoodEaterRow");
    
    document.getElementById("VeryFussy").classList.remove("SelectedRow");
    document.getElementById("VeryFussy").classList.add("VeryFussyRow");    
}
function VeryFussySelector(){
    EaterType = "Very Fussy";
    localStorage.setItem("EaterType", EaterType);

    document.getElementById("VeryFussy").classList.remove("VeryFussyRow");
    document.getElementById("VeryFussy").classList.add("SelectedRow");

    document.getElementById("Foodie").classList.remove("SelectedRow");
    document.getElementById("Foodie").classList.add("FoodieRow");

    document.getElementById("GoodEater").classList.remove("SelectedRow");
    document.getElementById("GoodEater").classList.add("GoodEaterRow");
    
    document.getElementById("Fussy").classList.remove("SelectedRow");
    document.getElementById("Fussy").classList.add("FussyRow");
}

function Eater() {
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
        <div class="col-md-8 text-center">
          <p id="Header" className='GTbuttons2'>-------------<span>{localStorage.getItem("dogName")}</span> is.-------------</p>
        </div>
        <div class="col-md-2"></div>
      </div>

      {/* A foodie */}
      <div class="row mt-5">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row FoodieRow" id="Foodie"  >
                <div class="col-md-1">
                    <input type="radio" id="FoodieRadio" name="EaterType" onClick={FoodieSelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                <label id="FoodieLabel" htmlFor="FoodieRadio"  className='GTbuttons2'> <p><b>A Foodie</b> <br /> Loves eating just about anything </p></label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* A good eater */}
      <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row GoodEaterRow" id="GoodEater">
                <div class="col-md-1">
                    <input type="radio" id="GoodEaterRadio" name="EaterType" onClick={GoodEaterSelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                <label id="GoodEaterLabel" htmlFor="GoodEaterRadio"  className='GTbuttons2'><p><b>A Good Eater</b> <br /> Knows that what he likes and isn't adventorous with foods</p></label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Fussy */}
      <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row FussyRow" id="Fussy">
                <div class="col-md-1">
                    <input type="radio" id="FussyRadio" name="EaterType" onClick={FussySelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                <label id="FussyLabel" htmlFor="FussyRadio"  className='GTbuttons2'><p><b>Can be Fussy</b> <br />Abandons his meals sometimes</p></label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Very Fussy */}
      <div class="row mt-3 mb-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="row VeryFussyRow" id="VeryFussy">
                <div class="col-md-1">
                    <input type="radio" id="VeryFussyRadio" name="EaterType" onClick={VeryFussySelector}/>
                </div>
                <div class="col-md-11">
                <div class="row p-0 m-0">
                <label id="VeryFussyLabel" htmlFor="VeryFussyRadio"  className='GTbuttons2'><p><b>Very Fussy</b> <br />Repeatedly refuses meals</p></label>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      <div class="row mt-5"></div>
      <div className="row mt-5 freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={FreshFact5} alt="" />
          <p className="p2  "><b>50%</b> of Butternutters started out fussy, but now love mealtimes thanks to our fresh and tasty meals. 
                We love turning fusspots into foodies, and don’t worry, you’ll get a trial box first!</p>
        </div>
        <div className="col-md-3"></div>

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
              <img id="FreshFact5" src={FreshFact5} />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p><b>50%</b> of Butternutters started out fussy, but now love mealtimes thanks to our fresh and tasty meals. 
                We love turning fusspots into foodies, and don’t worry, you’ll get a trial box first!</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div> */}

      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Food-Type' type="button" className="btn  back py-2"><i class="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/Eating-goals' onClick={Validation} type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>


    </div>
  )
}

export default Eater