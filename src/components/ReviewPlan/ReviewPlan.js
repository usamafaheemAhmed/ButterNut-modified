import React from 'react';
import './reviewplan.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

import pouch_with_sparks from '../../images/pouch_with_sparks.svg';
import explodingBox from '../../images/explodingBox.svg';
import calendarSimple from '../../images/calendarSimple.svg';

import beef from '../../images/beef.png';
import chicken from '../../images/chicken.png';
import gobble from '../../images/gobble.png';
import pork from '../../images/pork.png';
import duckChicken from '../../images/duckChicken.png';

import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

function ShowQuestion1(){
    document.getElementById("QuestionButtonPlus1").classList.add("d-none"); 
    document.getElementById("QuestionButtonMinus1").classList.remove("d-none");
    document.getElementById("Answer1").classList.remove("d-none");
  }
  function HideQuestion1(){
    document.getElementById("QuestionButtonMinus1").classList.add("d-none"); 
    document.getElementById("QuestionButtonPlus1").classList.remove("d-none");
    document.getElementById("Answer1").classList.add("d-none");
  }
  function ShowQuestion2(){
    document.getElementById("QuestionButtonPlus2").classList.add("d-none"); 
    document.getElementById("QuestionButtonMinus2").classList.remove("d-none");
    document.getElementById("Answer2").classList.remove("d-none");
  }
  function HideQuestion2(){
    document.getElementById("QuestionButtonMinus2").classList.add("d-none"); 
    document.getElementById("QuestionButtonPlus2").classList.remove("d-none"); 
    document.getElementById("Answer2").classList.add("d-none");
  }
  function ShowQuestion3(){
    document.getElementById("QuestionButtonPlus3").classList.add("d-none"); 
    document.getElementById("QuestionButtonMinus3").classList.remove("d-none");
    document.getElementById("Answer3").classList.remove("d-none");
  }
  function HideQuestion3(){
    document.getElementById("QuestionButtonMinus3").classList.add("d-none"); 
    document.getElementById("QuestionButtonPlus3").classList.remove("d-none"); 
    document.getElementById("Answer3").classList.add("d-none");
  }
  function ShowQuestion4(){
    document.getElementById("QuestionButtonPlus4").classList.add("d-none"); 
    document.getElementById("QuestionButtonMinus4").classList.remove("d-none");
    document.getElementById("Answer4").classList.remove("d-none");
  }
  function HideQuestion4(){
    document.getElementById("QuestionButtonMinus4").classList.add("d-none"); 
    document.getElementById("QuestionButtonPlus4").classList.remove("d-none"); 
    document.getElementById("Answer4").classList.add("d-none");
  }
  function ShowQuestion5(){
    document.getElementById("QuestionButtonPlus5").classList.add("d-none"); 
    document.getElementById("QuestionButtonMinus5").classList.remove("d-none");
    document.getElementById("Answer5").classList.remove("d-none");
  }
  function HideQuestion5(){
    document.getElementById("QuestionButtonMinus5").classList.add("d-none"); 
    document.getElementById("QuestionButtonPlus5").classList.remove("d-none"); 
    document.getElementById("Answer5").classList.add("d-none");
  }

const ReviewPlan = () => {

  function PayNow(){
   let DogName= window.localStorage.getItem('dogName')
   let Gender= window.localStorage.getItem('Gender')
   let Vaccination= window.localStorage.getItem('genderSex')
   let AgeBracket= window.localStorage.getItem('dogType')
   let AgeYear= window.localStorage.getItem('1stInputBox')
   let AgeMonth= window.localStorage.getItem('2ndInputBox')
   let Breed= window.localStorage.getItem('Breed')
   let FoodType= window.localStorage.getItem('currentlyEating')
   let EaterType= window.localStorage.getItem('EaterType')
   let Goals= window.localStorage.getItem('Goals')
   let Body= window.localStorage.getItem('bodyLook')
   let Weight= window.localStorage.getItem('dogWeight')
   let Activity= window.localStorage.getItem('activeDog')
   let Allergies= window.localStorage.getItem('Allergies')
   let Health= window.localStorage.getItem('Health')
   let Snacks= window.localStorage.getItem('Snacks')
   let Location= window.localStorage.getItem('Location')
   let Postcode= window.localStorage.getItem('PostCode')
   let PName= window.localStorage.getItem('PName')
   let Email= window.localStorage.getItem('Email')
   let Address= window.localStorage.getItem('Address')
   let RecipePlan = "1 week"
   let Promo = "qwery987"
   let Discount = 15
   let DisRecPrice = 1200
   let RecPrice = 1000
   let DeliveryFee = 0
   let Savings = 200
   let TotalBill = 1000

   let NewOrder={
    id: 5,
    DogName:DogName,
    Gender:Gender,
    Vaccination:Vaccination,
    AgeBracket:AgeBracket,
    AgeYear:AgeYear,
    AgeMonth:AgeMonth,
    Breed:Breed,
    FoodType:FoodType,
    EaterType:EaterType,
    Goals:Goals,
    Body:Body,
    Weight:Weight,
    Activity:Activity,
    Allergies:Allergies,
    Health:Health,
    Snacks:Snacks,
    Location:Location,
    Postcode:Postcode,
    PName:PName,
    Email:Email,
    Address:Address,
    RecipePlan:RecipePlan,
    Promo:Promo,
    Discount:Discount,
    DisRecPrice:DisRecPrice,
    RecPrice:RecPrice,
    DeliveryFee:DeliveryFee,
    Savings:Savings,
    TotalBill:TotalBill
   }
      
      axios
      .post("http://localhost:7000/Order/Add-Order", NewOrder)
      .then((res)=> console.log(res.data)) 
  };

  function PromoFunc() {
    localStorage.setItem("PromoCode", document.getElementById("PromoCODE").value);
  }

let introBoxHandler=()=>{


    document.getElementById("introBox").classList.remove("introBox");
    document.getElementById("introBox").classList.add("introBoxSelected");

    document.getElementById("afterIntro").classList.remove("afterIntroSelected");
    document.getElementById("afterIntro").classList.add("afterIntro");
    document.getElementById("promoSummery").classList.remove("d-none");
    document.getElementById("recipesBlockId").classList.remove("d-none");

     document.getElementById("recipesBlockId2").classList.add("d-none");


    document.getElementById("week2Heading").innerHTML="week2";


}

let afterIntro=()=>{
    
    document.getElementById("introBox").classList.add("introBox");
    document.getElementById("introBox").classList.remove("introBoxSelected");
    document.getElementById("afterIntro").classList.remove("afterIntro");
    document.getElementById("afterIntro").classList.add("afterIntroSelected");
    document.getElementById("promoSummery").classList.add("d-none");
    document.getElementById("recipesBlockId").classList.add("d-none");

    document.getElementById("recipesBlockId2").classList.remove("d-none");

    document.getElementById("week2Heading").innerHTML="week 3";


    
}

let HideRecipeHandler=()=>{
   let r = document.getElementById("recipeBlock").classList;
   if(r.contains("d-none")){
    r.remove("d-none");
    document.getElementById("recipeBtnId").innerHTML="Hide her recipe selection"
   }
   else{
    r.add("d-none");
    document.getElementById("recipeBtnId").innerHTML="See her recipe selection"
   }    
}


  return (
    <div className='container-fluid'>
         <div className='row headerStep4 text-center py-5'>
            <div className="col-12">
            <span className='step px-1'>STEP 4/4</span>
        <h2 className='headingStep4 m-0 p-0'>Lastly, review her plan</h2>
        </div>
        </div>

<div className="row  px-2">
   <div className="col-md-3"></div>
   <div className="col-md-6  ">
    <div className='text-center my-3'>
        <button onClick={introBoxHandler} type="button" class="introBoxSelected" id='introBox'>Intro box</button>
        <button onClick={afterIntro} type="button " class="  afterIntro" id='afterIntro'>After intro</button>
        </div>

        <div className=' row py-2 shadow px-5  '>
            
<div id='weekbefore' className="col-12">
<h2 className='week2Heading' id='week2Heading'>2 weeks intro box</h2>
            <p id='week2Pera1' className='week2Pera1'>We’ll start slowly by sending you 2 weeks of meals to help with your pup’s transition. Easy.</p>
</div>


            
           
            <div className="col-12 ">
            <div className="row text-center ">
               
                    
                <div className=" col-4  p-0  ">
                    <img className='img1' src={pouch_with_sparks} alt="" />
                    <p className='imgPera m-0'>1 x 600g</p>
                    <p className='imgPera2'>daily serving</p>
                </div>
                <div className="col-4  p-0 ">
                <img src={explodingBox} alt="" />
                    <p className='imgPera m-0'>14</p>
                    <p className='imgPera2'>pouches per box</p>
                </div>
                <div className=" col-4 p-0  ">
                <img className='mb-3' src={calendarSimple} alt="" />
                    <p className='imgPera m-0'>2 weeks</p>
                    <p className='imgPera2'>worth of food</p>
                </div>
                
                
            </div>
            </div>

            {/*Replacemet block of Recipes block */}



            <div id='recipesBlockId2' className=" col-12">
                <p>
                We’ll give you a heads-up when your next box is nearly ready, so you’ve got time to tweak her meals if there’s one she particularly loves.
                </p>
            </div>

            

            {/* Recipes block */}
            <div id='recipesBlockId' className=''>
          
            <div id='recipeBlock' className='d-none'>

            <div className="col-12">
            <div className="row">
            

                <div className="col-4 ">

                    <h6 className='recipes'>Recipes</h6>
                </div>
                <div className="col-4"></div>

                <div className="col-4 ">
                    <h6 className='serving float-end'>14 servings</h6>
                </div>
            <div className="col-1"></div>

            </div>
            </div>


{/*Recipes img1 */}
   {/* img1 */}
   <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={beef} alt="" />
                                  <p className='myp'>Beef It Up</p>
                              </div>
                              <div >
                              <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img1 */}
            <hr id="SimpleLine"/>

{/*Recipes img2 */}
           {/* img2 */}
           <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={chicken} alt="" />
                                  <p className='myp'>Chicken You Out</p>
                              </div>
                              <div >
                              <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img2 */}
            <hr id="SimpleLine"/>

            {/*Recipes img3 */}
            {/* img3 */}
            <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={gobble} alt="" />
                                  <p className='myp'>Gobble Gobble Turkey</p>
                              </div>
                              <div >
                              <p className='imgDis mt-2 mb-0 pb-0'>2 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img3 */}
           <hr id="SimpleLine"/>
            
            {/* img4 */}
            <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={pork} alt="" />
                                  <p className='myp'>Pork This Way</p>
                              </div>
                              <div >
                                  
                                  <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
            
{/* img4 */}

<hr id="SimpleLine"/>
            {/* img5 */}
            <div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <img className='mybeef' src={duckChicken} alt="" />
                                  <p className='myp'>Duo of Duck & Chicken</p>
                              </div>
                              <div >
                                  <p className='imgDis mt-2 mb-0 pb-0'>3 servings</p>
                                  <p className='imgDis m-0 p-0 '>800g</p>
                              </div>
                           </div>
                 </div>
              </div>
{/* img5 */}

            </div>
<div className="col-12 my-3">
<button id='recipeBtnId' onClick={HideRecipeHandler}  type="button" class="btn btn-link">See her recipe selection
</button>
</div>

            </div>
           {/* resipi block end */}
<div className="col-12 text-center my-4">
  <span className='spanChange py-2 px-1'>You can change, pause or cancel her plan anytime.</span>
</div>


{/* promo summery div */}
<div id='promoSummery' className=''>

{/* refer */}
<div className="col-12">
    <h3>Referral or promo code?</h3>
    <div className='promoBorder py-2 '>
    <input placeholder='Sherlock Bones' onChange={PromoFunc} type="text" id="PromoCODE" className='promoInput form-control w-75'/> 
    <button  type="button" className="btn btn-outline-danger  float-end">Apply</button>
    </div>
    
</div>



{/* Order summary */}
<div className="col-12 my-3">
<div className="row">
    <div className="col-6">
        <h4>Order summary</h4>
    </div>
    <div className="col-6">
        <span className='percentOff float-end'>15% off</span>
    </div>

</div>

</div>



{/* intro */}
<div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <h4 className=' summaryData mb-0 pb-0'>Intro price</h4>
                              </div>
                              <div >
                                  <del className='sumrypriceDel mx-2  mb-0 pb-0'>£3.92/day</del>
                                  <p className='sumryprice m-0 p-0 '>£3.33/day</p>
                              </div>
                           </div>
                 </div>
              </div>


{/* Naturally Tasty Lamb Treats*/}
<div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <h4 className=' summaryData mb-0 pb-0'>Naturally Tasty Lamb Treats</h4>
                              </div>
                              <div >
                                  <del className='sumrypriceDel mx-2  mb-0 pb-0'>£3.80 </del>
                                  <p className='sumryprice m-0 p-0 '>£3.23</p>
                              </div>
                           </div>
                 </div>
              </div>


{/*Delivery Fee*/}
<div className="col-md-12">
                 <div className="row">
                           <div className='flexContainer'>
                              <div className="flexItem">
                                  <h4 className=' summaryData mb-0 pb-0'>Naturally Tasty Lamb Treats</h4>
                              </div>
                              <div >
                                  <del className='sumrypriceDel mx-2  mb-0 pb-0'>£3.99 </del>
                                  <p className='sumryprice m-0 p-0 '>FREE</p>
                              </div>
                           </div>
                 </div>
              </div>

{/*Total savings*/}
<div className="col-12 my-3">
<div className="row py-2 totalSaving">
    <div className="col-6">
        <h5 className='totalSaving ' >Total savings</h5>
    </div>
    <div className="col-6">
       <span className=' float-end'>-£10.86</span>
    </div>
</div>
</div>


{/*Box Total */}
<div className="col-12 my-3">
<div className="row ">
    <div className="col-6">
        <h4>Box Total</h4>
    </div>
    <div className="col-6">
       <span className=' float-end'>£38.93</span>
    </div>
</div>

<div className='row my-4'>
  <div className='col-md-12 text-center'>
    <button onClick={PayNow} id="CardButton">Confirm Order</button>
  </div>
</div>

</div>

</div>




        </div>
   </div>
   <div className="col-md-3"></div>
   </div>
   {/* Frequently Asked Questions */}
   <div class="row mt-5" id="LastSection">
      <div class="row mt-4"></div>  
      <div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <h3 id="FreqQuestionsHeading">Frequently Asked Questions</h3>
        </div>
      </div>

      {/* Question 1 */}
      <div class="row mt-3" id="Question1">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus1" onClick={ShowQuestion1}/>
          <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus1" onClick={HideQuestion1}/>
          <p><b>How did you calculate my dog plan?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer1">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p>
            Dogs are like snowflakes - no two are the same (and that's where the comparison ends really). We use details about your dog, 
            such as their age and their activity levels, in order to work out the perfect portion sizes and recipe mixes for them.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-6">
          <hr id="Line1"/>
        </div>
      </div>


      {/* Question 2 */}
      <div class="row mt-3" id="Question2">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus2" onClick={ShowQuestion2}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus2" onClick={HideQuestion2}/>
          <p><b>How many recipes can I choose?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer2">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p>
          You can choose up to 7 recipes for your Intro box. We’ve already pre-selected 
          the recipes that we think are most suitable for your dog.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-6">
          <hr id="Line2"/>
        </div>
      </div>


      {/* Question 3 */}
      <div class="row mt-3" id="Question3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus3" onClick={ShowQuestion3}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus3" onClick={HideQuestion3}/>
          <p><b>Can I change my recipe selection later?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p>
            Yes - as a Butternut customer you will have your own account. You can log 
            in to your account at any time and adjust your chosen recipes.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-6">
          <hr id="Line3"/>
        </div>
      </div>


      {/* Question 4 */}
      <div class="row mt-3" id="Question4">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus4" onClick={ShowQuestion4}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus4" onClick={HideQuestion4}/>
          <p><b>Why is the gram amount different to my current food?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer4">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p>
          The calorie density of different foods can vary quite a bit. With this in mind you may find that your dog requires a 
          different volume of our food to their current food in order to provide the correct number of calories for them.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-6">
          <hr id="Line4"/>
        </div>
      </div>


      {/* Question 5 */}
      <div class="row mt-3" id="Question5">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus5" onClick={ShowQuestion5}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus5" onClick={HideQuestion5}/>
          <p><b>How much storage will I need?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer5">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p>
          You can store meals for up to 7 days in your fridge and the remaining pouches in the freezer to keep them fresh. 
          It depends on your dog's individual calorie intake but it usually takes up the amount of space that a loaf of bread might.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row mb-5">
      <div class="col-md-3"></div>
        <div class="col-md-6">
          <hr id="Line5"/>
        </div>
      </div>

      <div class="row mb-5"></div>
    </div>

    <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/plans-3' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/plans-4'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>

   </div>        
  )
}

export default ReviewPlan