import React from 'react';
import './Recipes2.css';
import Card from 'react-bootstrap/Card'; 

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


// import MostlyButterNut from '../../images/MostlyButterNut.webp';
// import AllButterNut from '../../images/AllButterNut.webp';

import AllButterNut from '../../images/New folder/AllGourmet.jpg';
import  MostlyButterNut from '../../images/New folder/MostlyGourmet.jpg';

import OngoingPlanImage from '../../images/OngoingPlanImage.PNG'

import PerfectStash from '../../images/PerfectStash.webp';
import LowestDailyPrice from '../../images/LowestDailyPrice.webp';


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
  


function Recipes2() {
  return (
    <div class="container-fluid"  id="StartPage">
      
      {/* Dog Name */}
      <div class="row mt-5" id="DogDesc">
        <div class="row mt-3"></div>
        {/* Step Row */}
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <p class="StepsHeading"> Step 2/4 </p>
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

      {/* Spacing Row */}
      <div class="row mt-5"></div>

      {/* Plan Header */}
      <div class="row mt-2">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
            <p id="PlanHeading"><b>Feed All Butternut for a complete, healthy diet</b></p>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Card Row */}
      <div class="row mt-5">
        <div class="col-md-2"></div>
        <div class="col-md-4">

            {/* All Butternut Card */}
        <Card style={{ width: '23rem', height: '38rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px' }} variant="top" src={AllButterNut} />
              <Card.Body>
                <Card.Title id="CardHeading">All Gourmet</Card.Title>
                <Card.Text id="CardText">
                  <p>800g/day</p>
                  <button id="RecommendButton">Recommended</button>
                  <p id="MostlyButterNutDesc">Everything he needs</p>
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="AllButternutCard" value="Nothing" />
                      <label for="AllButternutCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

        </div>
        <div class="col-md-4">

            {/* Mostly Butternut Card */}
            <Card style={{ width: '23rem', height: '38rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px' }} variant="top" src={MostlyButterNut} />
            <Card.Body>
                <Card.Title id="CardHeading">Half Gourmet</Card.Title>
                <Card.Text id="CardText">
                  <p>500g/day</p>
                  <p id="MostlyButterNutDesc">Mix Butternut with his current foods</p>
                  <a id="MostlyButterNutDesc" href="AA">How can I mix?</a>
                </Card.Text>
            </Card.Body>
                <Card.Body>
                <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                    <input type="checkbox" id="MostlyButternutCard" value="Nothing" />
                    <label for="MostlyButternutCard"></label>
                    </li>
                    </ul>
            </Card.Body>
            </Card>

        </div>
        <div class="col-md-2"></div>
      </div>

      
      <div class="row mt-5" id="CenterPage">
        {/* Delivery Question? */}
        <div class="row mt-5">
          <div class="col-md-3"></div>
          <div class="col-md-6 text-center">
            <p id="PlanHeading"><b>How often we deliver?</b></p>
          </div>
          <div class="col-md-3"></div>
        </div>

        {/* Intro Box */}
        <div class="row mt-3 mb-3">
          <div class="col-md-3"></div>
          <div class="col-md-6" id="IntroBox">
            <div class="row">
                <div class="col-md-12">
                <p id="IntroDiscount">15% off</p>
                    <h5><b>His Intro Box</b></h5>
                </div>
            </div>
            <div class="row">
                <p>We’ll firstly send you a 1-week box designed to help him transition.</p>
            </div>
            <div class="row">
                <p id="PauseOrCancel">Pause or cancel anytime.</p>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>

        {/* Ongoing Plan Heading */}
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <p id="PlanHeading"><b>His ongoing plan after that</b></p>
            </div>
        </div>

        {/* Ongoing Plan Image */}
        <div class="row mt-2">
            <div class="col-md-12 text-center">
                <img id="OngoingPlanImage" src={OngoingPlanImage} alt="" />
            </div>
        </div>

        {/* Card Row */}
      <div class="row mt-5 mb-5">
        <div class="col-md-2"></div>
        <div class="col-md-4">

            {/* Lowest Daily Price Card */}
        <Card style={{ width: '23rem', height: '29rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px', height:'223px' }} variant="top" src={LowestDailyPrice} />
              <Card.Body>
                <Card.Title id="CardHeading">Lowest daily price</Card.Title>
                <Card.Text id="CardText">
                  <p id="MostlyButterNutDesc">2 weeks worth of food</p>
                  <a id="MostlyButterNutDesc" href="abc">StorageSpace?</a>
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="LowestPriceCard" value="Nothing" />
                      <label for="LowestPriceCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

        </div>
        <div class="col-md-4">

            {/* Perfect Stash Card */}
            <Card style={{ width: '23rem', height: '29rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px', height:'223px' }} variant="top" src={PerfectStash} />
            <Card.Body>
                <Card.Title id="CardHeading">The Perfect Stash</Card.Title>
                <Card.Text id="CardText">
                  <p id="MostlyButterNutDesc">1 week worth of food</p>
                  <a id="MostlyButterNutDesc" href="abc">How can I mix?</a>
                </Card.Text>
            </Card.Body>
                <Card.Body>
                <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                    <input type="checkbox" id="PerfectStashCard" value="Nothing" />
                    <label for="PerfectStashCard"></label>
                    </li>
                    </ul>
            </Card.Body>
            </Card>

        </div>
        <div class="col-md-2"></div>
      </div>


      
      {/* Frequently Asked Questions */}
      <div class="row" id="LastSection">
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
        <div class="col-md-5">
          <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus1" onClick={ShowQuestion1}/>
          <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus1" onClick={HideQuestion1}/>
          <p><b>How did you calculate my dog plan?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer1">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <p>
            Dogs are like snowflakes - no two are the same (and that's where the comparison ends really). We use details about your dog, 
            such as their age and their activity levels, in order to work out the perfect portion sizes and recipe mixes for them.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-5">
          <hr id="Line1"/>
        </div>
      </div>


      {/* Question 2 */}
      <div class="row mt-3" id="Question2">
        <div class="col-md-3"></div>
        <div class="col-md-5">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus2" onClick={ShowQuestion2}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus2" onClick={HideQuestion2}/>
          <p><b>How many recipes can I choose?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer2">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <p>
          You can choose up to 7 recipes for your Intro box. We’ve already pre-selected 
          the recipes that we think are most suitable for your dog.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-5">
          <hr id="Line2"/>
        </div>
      </div>


      {/* Question 3 */}
      <div class="row mt-3" id="Question3">
        <div class="col-md-3"></div>
        <div class="col-md-5">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus3" onClick={ShowQuestion3}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus3" onClick={HideQuestion3}/>
          <p><b>Can I change my recipe selection later?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer3">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <p>
            Yes - as a Butternut customer you will have your own account. You can log 
            in to your account at any time and adjust your chosen recipes.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-5">
          <hr id="Line3"/>
        </div>
      </div>


      {/* Question 4 */}
      <div class="row mt-3" id="Question4">
        <div class="col-md-3"></div>
        <div class="col-md-5">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus4" onClick={ShowQuestion4}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus4" onClick={HideQuestion4}/>
          <p><b>Why is the gram amount different to my current food?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer4">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <p>
          The calorie density of different foods can vary quite a bit. With this in mind you may find that your dog requires a 
          different volume of our food to their current food in order to provide the correct number of calories for them.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-5">
          <hr id="Line4"/>
        </div>
      </div>


      {/* Question 5 */}
      <div class="row mt-3" id="Question5">
        <div class="col-md-3"></div>
        <div class="col-md-5">
        <FontAwesomeIcon icon={faPlus} id="QuestionButtonPlus5" onClick={ShowQuestion5}/>
        <FontAwesomeIcon icon={faMinus} class="d-none" id="QuestionButtonMinus5" onClick={HideQuestion5}/>
          <p><b>How much storage will I need?</b></p>
        </div>
      </div>
      <div class="row d-none" id="Answer5">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <p>
          You can store meals for up to 7 days in your fridge and the remaining pouches in the freezer to keep them fresh. 
          It depends on your dog's individual calorie intake but it usually takes up the amount of space that a loaf of bread might.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row mb-5">
      <div class="col-md-3"></div>
        <div class="col-md-5">
          <hr id="Line5"/>
        </div>
      </div>

      <div class="row mb-5"></div>
    </div>
    

    </div>
    <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/plans-1' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/plans-3'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
    
    </div>
  )
}

export default Recipes2