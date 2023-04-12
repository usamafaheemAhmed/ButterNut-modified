import React from 'react'
import "./ExtraPlan.css";
import { NavLink } from 'react-router-dom';


let addToCartHandler=()=>{
document.getElementById("addBtn").classList.add("d-none");
document.getElementById("removeBtn").classList.remove("d-none");
document.getElementById("cardRow").classList.add("selectedCard");
document.getElementById("cardRow").classList.remove("cardRow");


document.getElementById("heading1").classList.remove("heading1");
document.getElementById("heading1").classList.add("heading1Selected");


document.getElementById("heading2").classList.remove("heading2");
document.getElementById("heading2").classList.add("heading2Selected");


document.getElementById("cardPera").classList.remove("cardPera");
document.getElementById("cardPera").classList.add("cardPeraSelected");

document.getElementById("del").classList.remove("del");
document.getElementById("del").classList.add("delSelected");





}

let removeToCartHandler=()=>{
    document.getElementById("addBtn").classList.remove("d-none");
    document.getElementById("removeBtn").classList.add("d-none");

document.getElementById("cardRow").classList.remove("selectedCard");
document.getElementById("cardRow").classList.add("cardRow");


document.getElementById("heading1").classList.add("heading1");
document.getElementById("heading1").classList.remove("heading1Selected");


document.getElementById("heading2").classList.add("heading2");
document.getElementById("heading2").classList.remove("heading2Selected");


document.getElementById("cardPera").classList.add("cardPera");
document.getElementById("cardPera").classList.remove("cardPeraSelected");

document.getElementById("del").classList.add("del");
document.getElementById("del").classList.remove("delSelected");

    
    }

const ExtraPlan = () => {
  return (
    <div className='container-fluid'>

        {/* Dog Name */}
      <div class="row mt-5" id="DogDesc">
        <div class="row mt-3"></div>
        
        {/* Step Row */}
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <p class="StepsHeading"> Step 3/4 </p>
          </div>
        </div>
        <div class="row mt-3"></div>
        
        {/* Recommendation Row */}
        <div class="row mt-3 mb-5">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center">
            <p id="RecommendationHeading">
                <b>Choose <span>{localStorage.getItem("dogName")}</span>'s plan</b>
            </p>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
        
        <div className="row cardSection  py-5 mb-5">
            <div className="col-md-3"></div>
            <div className="col-md-6  ">
           
            <div id='cardRow' className="row cardRow border shadow rounded-4 mb-5">

                <div className="col-md-5 img-col">
                    <div className='imgContainer'>
                        <span className='badge'>15 % OFF</span>
                        
                    </div>
                    {/* <img className='img'  src={extraPlan} alt="" /> */}
                </div>
                <div className="col-md-7 content-col   ">
                    
                <h3 id='heading1' className='heading1'>Naturally Tasty Lamb Treats</h3>
                <h3 id='heading2' className='heading2 pt-1'>70g</h3>
                <span className='nasties' >No nasties</span>
                <p className='pt-3'><del id='del' className='del'>£3.80</del> <span className='priceNow'>£3.23</span></p>
                <div>
                <button id='addBtn' onClick={addToCartHandler} type="button" class="btn btn-lg">Add To Box</button>
                </div>
                <button id='removeBtn' onClick={removeToCartHandler} type="button" class="btn btn-lg d-none">REMOVE</button>

                <p id='cardPera' className='cardPera pt-2' >Add these to your ongoing plan. You can  change it in your account anytime.</p>

                </div>
            </div>
       
            </div>
            
        </div>
       
        <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/plans-2' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/plans-4'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
        </div>
  )
}

export default ExtraPlan