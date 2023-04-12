import React from 'react';
import './Help.css';

import { NavLink } from "react-router-dom";

import Help1 from '../../images/Help1.PNG';
import Help2 from '../../images/Help2.PNG';
import FreshFact6 from '../../images/FreshFact6.PNG';

function Help() {
  return (
    <div class="container-fluid">
           

             {/* header */}
       <div className="row header py-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>How we may help you?</h3>
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

      {/* Instructions */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <img src={Help1} alt=""/>
        </div>
        <div class="col-md-2"></div>
      </div>

      {/* Doctor's Message */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <img id="Help2" src={Help2} alt=""/>
        </div>
        <div class="col-md-2"></div>
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
              <img id="FreshFact6" src={FreshFact6} />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>50% of Butternutters started out fussy, but now love mealtimes thanks to our fresh and tasty meals. 
                We love turning fusspots into foodies, and don’t worry, you’ll get a trial box first!</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div> */}

<div className="row mt-5 freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={FreshFact6} alt="" />
          <p className="p2  ">50% of Butternutters started out fussy, but now love mealtimes thanks to our fresh and tasty meals. 
                We love turning fusspots into foodies, and don’t worry, you’ll get a trial box first!</p>
        </div>
        <div className="col-md-3"></div>

       </div>
      
      <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/Eating-goals' type="button" className="btn  back py-2"><i class="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/body-look'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    </div>
  )
}

export default Help