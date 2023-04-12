import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";



import sweetPotato from "../../images/sweetPotato.svg";

import snack1 from "../../images/Snack1.PNG";
import snack2 from "../../images/Snack2.PNG";
import snack3 from "../../images/Snack3.PNG";
import snack1copy from "../../images/Snack1-Copy.PNG";
import snack2copy from "../../images/Snack2-Copy.PNG";
import snack3copy from "../../images/Snack3-Copy.PNG";

import "./snacks.css";

const Snacks = () => {
  let SnackName = "1-3 times a day";
  useEffect(() => {
    localStorage.setItem("Snacks", SnackName)
  });


  let dog1Handler=()=>{

    document.getElementById("dog1").classList.add("selectedDog");
    document.getElementById("dog3").classList.remove("selectedDog");
    document.getElementById("dog2").classList.remove("selectedDog");

    document.getElementById("colordog1").classList.remove("d-none");
    document.getElementById("dog1Colorless").classList.add("d-none");
    document.getElementById("dog2Colorless").classList.remove("d-none");
    document.getElementById("dog2WithColor").classList.add("d-none");
    document.getElementById("sizeDog3").classList.remove("d-none");
    document.getElementById("sizeColorDog3").classList.add("d-none");

    document.getElementById("skinnyDis").classList.remove("d-none");
    document.getElementById("justRightDis").classList.add("d-none");
    document.getElementById("chubbyDis").classList.add("d-none");
    
    document.getElementById("mainDivDis").classList.remove("d-none");

    
    localStorage.setItem("Snacks", "does not eat");
  

  }


  let dog2Handler=()=>{
    document.getElementById("dog2").classList.add("selectedDog");
    document.getElementById("dog3").classList.remove("selectedDog");
    document.getElementById("dog1").classList.remove("selectedDog");

    document.getElementById("dog2WithColor").classList.remove("d-none");
    document.getElementById("dog2Colorless").classList.add("d-none");
    document.getElementById("sizeDog3").classList.remove("d-none");
    document.getElementById("sizeColorDog3").classList.add("d-none");
    document.getElementById("colordog1").classList.add("d-none");
    document.getElementById("dog1Colorless").classList.remove("d-none");

    localStorage.setItem("Snacks", "1-3 times a day");

    document.getElementById("skinnyDis").classList.add("d-none");
    document.getElementById("justRightDis").classList.remove("d-none");
    document.getElementById("chubbyDis").classList.add("d-none");

    document.getElementById("mainDivDis").classList.remove("d-none");

  }
  let dog3Handler=()=>{

    document.getElementById("dog3").classList.add("selectedDog");
    document.getElementById("dog1").classList.remove("selectedDog");
    document.getElementById("dog2").classList.remove("selectedDog");

    document.getElementById("sizeColorDog3").classList.remove("d-none");
    document.getElementById("sizeDog3").classList.add("d-none");

    document.getElementById("dog2Colorless").classList.remove("d-none");
    document.getElementById("dog2WithColor").classList.add("d-none");
    document.getElementById("colordog1").classList.add("d-none");
    document.getElementById("dog1Colorless").classList.remove("d-none");

    localStorage.setItem("Snacks", "4 times a day");
    document.getElementById("skinnyDis").classList.add("d-none");
    document.getElementById("justRightDis").classList.add("d-none");
    document.getElementById("chubbyDis").classList.remove("d-none");
    document.getElementById("mainDivDis").classList.remove("d-none");


    
  }




  return (
    <div className="container-fluid">

       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>Does <span>{localStorage.getItem("dogName")}</span> get any treats or snacks?</h3>
         </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}

         

          <h1 className="text-center mt-5">
          ---------- <span>{localStorage.getItem("dogName")}</span> is... ----------
          </h1>

          {/* images */}

          <div className="row text-center my-4">

            <div className='col-md-12'>
             
                <div className='dogDiv ' id="dog1" onClick={dog1Handler}>
                  <img className="dogSize  " src={snack1copy} alt="" id='dog1Colorless' />
                  <img className="dogSize1 d-none" id='colordog1' src={snack1} alt="" />
                  </div>
                <div className='dogDiv ' id="dog2" onClick={dog2Handler}>
                  <img className="dogSize d-none" src={snack2copy} alt="" id='dog2Colorless' />
                  <img className="dogSize2 " src={snack2} alt="" id='dog2WithColor' />

                  </div>
                <div className='dogDiv ' onClick={dog3Handler} id="dog3"> 
                <img className="dogSize  " id='sizeDog3' src={snack3copy} alt="" />
                <img className="dogSize d-none" id='sizeColorDog3' src={snack3} alt="" />
                </div>

            </div>


          </div>

          {/* images */}

          <div className="row " id='mainDivDis'>
            <div className="col-md-3"></div>
            <div className="col-md-6 dogDis text-center py-3 ">
              <div id='skinnyDis' className='d-none'>
              <h4>Doesn't eat any</h4>
              </div>
              <div id='justRightDis' className=''>
              <h4>Has some</h4>
              <p className='peraDis'>1-3 times a day</p>
              </div>

              <div id='chubbyDis' className='d-none'>
              <h4>Has lots</h4>
              <p className='peraDis'>Waistline is not visible and her ribs are tricky to feel.</p>
              </div>
              
            </div>
            <div className="col-md-3"></div>
          </div>






            <div className="row freshRow  mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={sweetPotato} alt="" />
          <p className="p2">65% of dogs in the UK are overweight, which is something we'd really like to change. That's why all our meals are perfectly portioned, to suit each dog's needs.</p>
        </div>
        <div className="col-md-3"></div>

            </div>


            

            <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/health-issues' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/location'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
        


    </div>
         
       
  )
}

export default Snacks