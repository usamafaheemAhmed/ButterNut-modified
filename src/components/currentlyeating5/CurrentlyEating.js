import React from 'react';
import broccoli from"../../images/broccoli.svg";
import "./currentlyEating.css";
import { NavLink } from "react-router-dom";
const CurrentlyEating = () => {


let Validation = Event =>{
    let arrayofcurrentlyEating = [];
        var markedCheckbox = document.getElementsByName("currentlyEating");
        for (var checkbox of markedCheckbox) {
          if (checkbox.checked) {
           
            arrayofcurrentlyEating.push(checkbox.value);
          }
        }

        localStorage.setItem("currentlyEating", arrayofcurrentlyEating);
        // console.log(arrayofcheckbox)

        if((document.getElementById("checkboxOne").checked || document.getElementById("checkboxTwo").checked || 
        document.getElementById("checkboxThree").checked || document.getElementById("checkboxFour").checked) === true)
        {
          // ---------- Let's Go ----------
        }
        else if(document.getElementById("checkboxOne").checked !== true)
        {
          Event.preventDefault();
          alert("Select any of the following Options!")
        }
}


  return (
    <>
    
     <div className='container-fluid'>
        
        

        
             {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>What is <span>{localStorage.getItem("dogName")}</span> currently eating?</h3>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}

          <h1 className="text-center mt-5 h1Bold">
          ------------<span>{localStorage.getItem("dogName")}</span> eats.------------
          </h1>

          {/* //buttons */}
               <div className="row text-center my-5">
                <div className="col-md-12">
                <ul className="ks-cboxtags">
                <li>
                    <input type="checkbox" id="checkboxOne" value="Dry" name="currentlyEating"/>
                    <label id="labelOne" for="checkboxOne" className='GTbuttons2'>Dry</label>
                </li>

                <li >
                    <input type="checkbox" id="checkboxTwo" value="Home-cooked" name="currentlyEating"/>
                    <label id="labelOne" for="checkboxTwo"  className='GTbuttons2'>Home-cooked</label>
                </li>

                <li >
                    <input type="checkbox" id="checkboxThree" value="Wet" name="currentlyEating"/>
                    <label id="labelOne" for="checkboxThree"  className='GTbuttons2'>Wet</label>
                </li>

                <li >
                    <input type="checkbox" id="checkboxFour" value="Raw" name="currentlyEating"/>
                    <label id="labelOne" for="checkboxFour"  className='GTbuttons2'>Raw</label>
                </li>
                </ul>
                </div>

               </div>




<div class="row mt-5"></div>
        <div className="row mt-5 freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={broccoli} alt="" />
          <p className="p2">We gently cook our freshly prepared ingredients at 90°, so all of our meals are both highly digestible and highly tasty. A winning combo.</p>
        </div>
        <div className="col-md-3"></div>

       </div>


            <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Breed' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink onClick={Validation} to='/Eating-type'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
       </div>
    
    </>
  )
}

export default CurrentlyEating