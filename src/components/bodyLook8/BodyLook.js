import React, { useEffect } from 'react';
import sweetPotato from "../../images/sweetPotato.svg";

import { NavLink } from "react-router-dom";
import "./bodyLook.css";

import dog1 from "../../images/dog1.PNG";
import dog2 from "../../images/dog2.PNG";
import dog3 from "../../images/dog3.PNG";
import colordog1 from "../../images/colordog1.svg";
import colordog2 from "../../images/colordog2.svg";
import colordog3 from "../../images/colordog3.PNG";



const BodyLook = () => {

  useEffect(() => {
    localStorage.setItem("bodyLook", "justRight");
  })

  let dog1Handler=()=>{

    // document.getElementById("dog1").classList.add("selectedDog");
    // document.getElementById("dog3").classList.remove("selectedDog");
    // document.getElementById("dog2").classList.remove("selectedDog");

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

    
    localStorage.setItem("bodyLook", "skinny");

  }


  let dog2Handler=()=>{
    // document.getElementById("dog2").classList.add("selectedDog");
    // document.getElementById("dog3").classList.remove("selectedDog");
    // document.getElementById("dog1").classList.remove("selectedDog");

    document.getElementById("dog2WithColor").classList.remove("d-none");
    document.getElementById("dog2Colorless").classList.add("d-none");
    document.getElementById("sizeDog3").classList.remove("d-none");
    document.getElementById("sizeColorDog3").classList.add("d-none");
    document.getElementById("colordog1").classList.add("d-none");
    document.getElementById("dog1Colorless").classList.remove("d-none");

    localStorage.setItem("bodyLook", "justRight");

    document.getElementById("skinnyDis").classList.add("d-none");
    document.getElementById("justRightDis").classList.remove("d-none");
    document.getElementById("chubbyDis").classList.add("d-none");

    document.getElementById("mainDivDis").classList.remove("d-none");

  }
  let dog3Handler=()=>{

    // document.getElementById("dog3").classList.add("selectedDog");
    // document.getElementById("dog1").classList.remove("selectedDog");
    // document.getElementById("dog2").classList.remove("selectedDog");

    document.getElementById("sizeColorDog3").classList.remove("d-none");
    document.getElementById("sizeDog3").classList.add("d-none");

    document.getElementById("dog2Colorless").classList.remove("d-none");
    document.getElementById("dog2WithColor").classList.add("d-none");
    document.getElementById("colordog1").classList.add("d-none");
    document.getElementById("dog1Colorless").classList.remove("d-none");

    localStorage.setItem("bodyLook", "chubby");
    document.getElementById("skinnyDis").classList.add("d-none");
    document.getElementById("justRightDis").classList.add("d-none");
    document.getElementById("chubbyDis").classList.remove("d-none");
    document.getElementById("mainDivDis").classList.remove("d-none");


    
  }
  return (
    <>

     <div className="container-fluid">

       {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>What does <span>{localStorage.getItem("dogName")}</span>'s body look like?</h3>
        <p className='headerPera1 text-center'>So we can send her the right amount of food.</p>
        </div>
        <div className="col-md-2"></div>
       </div>
          {/* header end */}

         

          <h1 className="text-center mt-5 h1Bold">
          ------------<span>{localStorage.getItem("dogName")}</span> is.------------
          </h1>

          {/* images */}
          <div className="row text-center my-4">

            <div className='col-md-12'>
             
                <div className='dogDiv ' id="dog1" onClick={dog1Handler}>
                  <img className="img-fluid " src={dog1} alt="" id='dog1Colorless' />
                  <img className="img-fluid d-none" id='colordog1' src={colordog1} alt="" />
                  </div>
                <div className='dogDiv ' id="dog2" onClick={dog2Handler}>
                  <img className="img-fluid d-none" src={dog2} alt="" id='dog2Colorless' />
                  <img className="img-fluid " src={colordog2} alt="" id='dog2WithColor' />

                  </div>
                <div className='dogDiv ' onClick={dog3Handler} id="dog3"> 
                <img className="  img-fluid" id='sizeDog3' src={dog3} alt="" />
                <img className="img-fluid d-none" id='sizeColorDog3' src={colordog3} alt="" />
                </div>

            </div>


          </div>

          {/* images */}

          <div className="row " id='mainDivDis'>
            <div className="col-md-3"></div>
            <div className="col-md-6 dogDis text-center py-3 ">
              <div id='skinnyDis' className='d-none h4aP'>
              <h4>A little skinny</h4>
              <p className='peraDis'>Narrow waistline and you can clearly see her ribs. </p>
              </div>
              <div id='justRightDis' className='h4aP'>
              <h4>Just right</h4>
              <p className='peraDis'>Visible waistline with some fat cover but her ribs are easy to feel.</p>
              </div>

              <div id='chubbyDis' className='d-none h4aP'>
              <h4>A bit chubby</h4>
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
            <NavLink  to='/help' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink onClick={""} to='/dog-Weight'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>




    </div>
    
    </>
  )
}

export default BodyLook