import React from 'react';
import './Recipes.css';
import Card from 'react-bootstrap/Card'; 

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import NoGrain from '../../images/NoGrain.svg';
import NoNasies from '../../images/NoNasies.svg';
import GentleDigestion from '../../images/GentleDigestion.svg';

import MealReccomendations from '../../images/MealReccomendations.PNG';

import BeefUp from '../../images/New folder/BeefUp.jpeg';
import PorkUp from '../../images/New folder/BeefUp.jpeg';
import ChickenUp from '../../images/New folder/ChickenUp.jpeg';
import ChickenJerky from '../../images/New folder/ChickenJerky.JPG';


import CBD_PeanutButter_Pumpkin from '../../images/New folder/CBD_PeanutButter_Pumpkin.JPG';
import PeanutButter_Carrots from '../../images/New folder/PeanutButter_Carrots.JPG';
import PeanutButter_Pumpkin from '../../images/New folder/PeanutButter_Pumpkin.JPG';

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


function Recipes() {
  return (
    <div class="container-fluid"  id="CenterPage">
      {/* Dog Name */}
      <div class="row mt-5" id="DogDesc">
        <div class="row mt-3"></div>
        
        {/* Step Row */}
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <p class="StepsHeading"> Step 1/4 </p>
          </div>
        </div>
        <div class="row mt-3"></div>
        
        {/* Recommendation Row */}
        <div class="row mt-3">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center">
            <p id="RecommendationHeading">Take a look at <span>{localStorage.getItem("dogName")}</span>'s recommended recipes
            </p>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>

      {/* Spacing Row */}
      <div class="row mt-5"></div>

      {/* Calories Row */}
      <div class="row mt-5">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <p id="CaloriesRow">
            <p>Recommended daily calorie intake:</p>
            <h5><b><span>Bruno</span> needs <span>1178</span> kcal/day</b></h5>
          </p>
        </div>
        <div class="col-md-3"></div>
      </div>

      {/* Speciality in Meals */}
      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <p id="MealsSpecialityRow">
            <p>All of our meals are:</p>
            <div class="row" id="MealsSpecialityRow">
              <div class="col-md-4">
                <img id="Meals" src={NoGrain} alt="" />
                <p class="text-center">Grain Free</p>
              </div>
              <div class="col-md-4">
                <img id="Meals" src={NoNasies} alt="" />
                <p class="text-center">No Nasties</p>
              </div>
              <div class="col-md-4 ">
                <img id="Meals" src={GentleDigestion} alt="" />
                <p class="text-center">Gentle Digestion</p>
              </div>
            </div>
          </p>
        </div>
      </div>

      {/* Lower Page */}
      <div class="row" id="LowerPage">

        <div class="row mt-3"></div>
        
        {/* Meals Instructions */}
        <div class="row mt-5">
          <div class="col-md-3"></div>
          <div class="col-md-6 text-center">
            <h3><b>Here's what we've chosen for <span>Bruno</span></b></h3>
            <img id="MealReccomendations" src={MealReccomendations} alt="" />
          </div>
          <div class="col-md-3"></div>
        </div>

        <div class="container" id="CardsContainer">
          {/* Meal Cards Row 1*/}
          <div class="row mt-5">
            <div class="col-md-4" >
              
              {/* Beef Card */}
            <Card style={{ width: '23rem', height: '28rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px' }} variant="top" src={BeefUp} />
              <Card.Body>
                <Card.Title id="CardHeading">Beef It Up</Card.Title>
                <Card.Text id="CardText">
                  Tender beef with sweet potatoes, peas and rosemary.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="BeefCard" value="Nothing" />
                      <label for="BeefCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

            </div>
            <div class="col-md-4">

              {/* Chicken Card */}
              <Card style={{ width: '23rem', height: '28rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px' }} variant="top" src={ChickenUp} />
              <Card.Body>
                <Card.Title id="CardHeading">Chicken Licking Good Plate</Card.Title>
                <Card.Text id="CardText">
                Succulent chicken with peas and a little sage.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="ChickenCard" value="Nothing" />
                      <label for="ChickenCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

            </div>
            <div class="col-md-4">

              {/* Turkey Card */}
            <Card style={{ width: '23rem', height: '28rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px', width: '326px', height: '224px', }} variant="top" src={ChickenJerky} />
              <Card.Body>
                <Card.Title id="CardHeading">Chicken Licking Jerky</Card.Title>
                <Card.Text id="CardText">
                  Lean turkey with carrots, peas & some rosemary.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="TurkeyCard" value="Nothing" />
                      <label for="TurkeyCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

            </div>
          </div>

          {/* Meal Cards Row 2 */}
          <div class="row mt-5 mb-5">
            <div class="col-md-4" >

              {/* Pork Card */}
            <Card style={{ width: '23rem', height: '28rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px' }} variant="top" src={PorkUp} />
              <Card.Body>
                <Card.Title id="CardHeading">Pork This Way</Card.Title>
                <Card.Text id="CardText">
                Juicy pork with carrots, butternut squash and sage.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="PorkCard" value="Nothing" />
                      <label for="PorkCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

            </div>
            <div class="col-md-4">

              {/* Duo of Duck and Chicken Card */}
              {/* <Card style={{ width: '23rem', height: '28rem', padding: '20px' }}>
                <Card.Img style={{ padding: '10px' }} variant="top" src={DuoDuckChicken} />
              <Card.Body>
                <Card.Title id="CardHeading">Duo of Duck & Chicken</Card.Title>
                <Card.Text id="CardText">
                  With butternut squash, green beans and cranberries.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="DuoDuckChickenCard" value="Nothing" />
                      <label for="DuoDuckChickenCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card> */}
            </div>
            <div class="col-md-4">
            </div>
          </div>
        </div>      
      </div>

      {/* Other Recipes */}
      <div class="row mt-5 mb-5">
          <div class="col-md-5"></div>
          <div class="col-md-2">
            <h3 id="OtherRecipesHeading"><b>Other Recipes</b></h3>
          </div>
          <div class="col-md-5"></div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">

          {/* Veggie Card */}
          <Card style={{ width: '23rem', height: '28rem', padding: '20px' }}>
                <Card.Img style={{ padding: '7px', width: '326px', height: '224px' }} variant="top" src={CBD_PeanutButter_Pumpkin} />
              <Card.Body>
                <Card.Title id="CardHeading">CBD PeanutButter with Pumpkin</Card.Title>
                <Card.Text id="CardText">
                  Hearty veg with fresh cheese, eggs and a pinch of parsley.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="VeggieCard" value="Nothing" />
                      <label for="VeggieCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

        </div>
        <div class="col-md-4">

          {/* Plant Card */}
          <Card style={{ width: '23rem', height: '28rem', padding: '20px' }} id="CardView">
                <Card.Img style={{ padding: '7px', width: '326px', height: '224px' }} variant="top" src={PeanutButter_Carrots} />
              <Card.Body>
                <Card.Title id="CardHeading">PeanutButter with Carrots</Card.Title>
                <Card.Text id="CardText">
                  A plant-based feast of tasty veg with butternut squash and linseed.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="PlantCard" value="Nothing" />
                      <label for="PlantCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

        </div>
        <div class="col-md-4">

          {/* Salmon Card */}
          <Card style={{ width: '23rem', height: '28rem', padding: '20px' }}>
                <Card.Img style={{ padding: '7px', width: '326px', height: '224px' }} variant="top" src={PeanutButter_Pumpkin} />
              <Card.Body>
                <Card.Title id="CardHeading">PeanutButter with Pumpkin</Card.Title>
                <Card.Text id="CardText">
                  Flaky salmon and white fish with diced potatoes, green beans and a dash of dill.
                </Card.Text>
              </Card.Body>
                <Card.Body>
                  <ul class="ks-cboxtags text-center SpinButton" >
                    <li>
                      <input type="checkbox" id="SalmonCard" value="Nothing" />
                      <label for="SalmonCard"></label>
                    </li>
                    </ul>
              </Card.Body>
            </Card>

        </div>
      </div>

      {/* Spacing Row */}
      <div class="row mt-5">
        <div class="col-md-12"></div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12"></div>
      </div>

      {/* Frequently Asked Questions */}
      <div class="row mt-3" id="LastSection">
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


    </div>
    <div class="row mb-5"></div>

    <footer className=" footer  shadow py-4">
           <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <NavLink  to='/petParent' type="button" className="btn  back py-2"><i className="fa fa-angle-left"></i>BACK</NavLink>
            
             <NavLink to='/plans-2'  type="button" className="btn  float-end continue py-2">CONTINUE <i className="fa fa-angle-right"></i></NavLink>
            </div>
            <div className="col-md-4"></div>
            </div>
           </footer>
  </div>
  )
}

export default Recipes