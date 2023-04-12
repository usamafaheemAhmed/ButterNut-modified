import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './MyOrder.css';

function MyOrder() {
  let Name = localStorage.getItem("UserName");
    const [OrdersList, setOrdersList] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:7000/Order`)
        .then((res)=> {setOrdersList(res.data)});
    },[]);

    function ChangeOrderDetails(){
      alert("Coming Soon!");
    }

    function ViewOrderDetails(Element){
      document.getElementById("Completeorder").classList.remove('d-none');

      document.getElementById("IdInput").value = Element.id;
      document.getElementById("DogNameInput").value = Element.DogName;
      document.getElementById("GenderInput").value = Element.Gender;
      document.getElementById("VaccinationInput").value = Element.Vaccination;
      document.getElementById("AgeBracketInput").value = Element.AgeBracket;
      document.getElementById("AgeYearInput").value = Element.AgeYear;
      document.getElementById("AgeMonthInput").value = Element.AgeMonth;
      document.getElementById("BreedInput").value = Element.Breed;
      document.getElementById("FoodTypeInput").value = Element.FoodType;
      document.getElementById("EaterTypeInput").value = Element.EaterType;
      document.getElementById("GoalsInput").value = Element.Goals;
      document.getElementById("BodyInput").value = Element.Body;
      document.getElementById("WeightInput").value = Element.Weight;
      document.getElementById("ActivityInput").value = Element.Activity;
      document.getElementById("AllergiesInput").value = Element.Allergies;
      document.getElementById("HealthInput").value = Element.Health;
      document.getElementById("SnacksInput").value = Element.Snacks;
      document.getElementById("LocationInput").value = Element.Location;
      document.getElementById("PostcodeInput").value = Element.Postcode;
      document.getElementById("PNameInput").value = Element.PName;
      document.getElementById("EmailInput").value = Element.Email;
      document.getElementById("AddressInput").value = Element.Address;
      document.getElementById("RecipePlanInput").value = Element.RecipePlan;
      document.getElementById("PromoInput").value = Element.Promo;
      document.getElementById("DiscountInput").value = Element.Discount;
      document.getElementById("DisRecPriceInput").value = Element.DisRecPrice;
      document.getElementById("RecPriceInput").value = Element.RecPrice;
      document.getElementById("DeliveryFeeInput").value = Element.DeliveryFee;
      document.getElementById("SavingsInput").value = Element.Savings;
      document.getElementById("TotalBillInput").value = Element.TotalBill;
    }

    function HideOrderDetails(){
      document.getElementById("Completeorder").classList.add('d-none');
    }

  return (
    <div className='container-fluid'>
      <div className="row header py-5">
        <div className="col-md-9">
          <h3 className='text-center headerHeading'>Hello {localStorage.getItem("UserName")}!</h3>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <NavLink to="/Login" className='text-center' id="headerHeading1">Logout</NavLink>
        </div>
      </div>
      <div className='row mt-5'></div>

      {/* Complete Details */}
      <div className='row my-5 d-none' id="Completeorder">
        <div className='col-md-2'></div>
        <div className='col-md-8'>

          <div className='row my-2'>
            <div className='col-md-12 text-center'>
              <h3 id='OrderHead'>My Order Details</h3>
            </div>
          </div>

          {/* 1st Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Id</label>
              <input id='IdInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Dog Name</label>
              <input id='DogNameInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Gender</label>
              <input id='GenderInput' className='m-0 form-control' readOnly />
            </div>
          </div>

          {/* 2nd Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Vaccination</label>
              <input id='VaccinationInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Age Bracket</label>
              <input id='AgeBracketInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Years</label>
              <input id='AgeYearInput' className='m-0 form-control' readOnly />
            </div>
          </div>
          
          {/* 3rd Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Month</label>
              <input id='AgeMonthInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Breed</label>
              <input id='BreedInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Food Type</label>
              <input id='FoodTypeInput' className='m-0 form-control' readOnly />
            </div>
          </div>
          
          {/* 4th Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Eating Type</label>
              <input id='EaterTypeInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
            <label>Goals</label>
              <input id='GoalsInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Body</label>
              <input id='BodyInput' className='m-0 form-control' readOnly />
            </div>
          </div>
          
          {/* 5th Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Weight</label>
              <input id='WeightInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
            <label>Activity</label>
              <input id='ActivityInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Allergies</label>
              <input id='AllergiesInput' className='m-0 form-control' readOnly />
            </div>
          </div>
          
          {/* 6th Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Health Issues</label>
              <input id='HealthInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
            <label>Snacks</label>
              <input id='SnacksInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Location</label>
              <input id='LocationInput' className='m-0 form-control' readOnly />
            </div>
          </div>
          
          {/* 7th Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Postcode</label>
              <input id='PostcodeInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Pup Parent</label>
              <input id='PNameInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Email</label>
              <input id='EmailInput' className='m-0 form-control' readOnly />
            </div>
          </div>
          
          {/* 8th Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Address</label>
              <input id='AddressInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
            <label>RecipePlan</label>
              <input id='RecipePlanInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Promo Code</label>
              <input id='PromoInput' className='m-0 form-control' readOnly />
            </div>
          </div>
          
          {/* 9th Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>Discount %</label>
              <input id='DiscountInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
            <label>Discounted Price</label>
              <input id='DisRecPriceInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>Recipe Price</label>
              <input id='RecPriceInput' className='m-0 form-control' readOnly />
            </div>
          </div>

          {/* 10th Row */}
          <div className='row mt-5'>
            <div className='col-md-4'>
              <label>DeliveryFee</label>
              <input id='DeliveryFeeInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
            <label>Savings</label>
              <input id='SavingsInput' className='m-0 form-control' readOnly />
            </div>
            <div className='col-md-4'>
              <label>TotalBill</label>
              <input id='TotalBillInput' className='m-0 form-control' readOnly />
            </div>
          </div>

          {/* Button Row */}
          <div className='row my-5'>
            <div className='col-md-12 text-center'>
              <button id="ChangeOrderButton" className='w-25' onClick={HideOrderDetails}>Done</button>
            </div>
          </div>
          
          <div className='row mb-5'></div>

        </div>
        <div className='col-md-2'></div>
      </div>
      {/* Complete Details */}
      
      {/* Table View */}
      <div className='row mt-5'>
        <div className='col-md-12'>
            <div className='table-repsonsive'>
                <table className='table table-bordered table-hover text-center'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Dog Name</th>
                    <th>Recipe Plan</th>
                    <th>Delivery Address</th>
                    <th>Price</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    OrdersList.map((Elem) => {
                      return(
                        (Name === Elem.PName)?
                        <tr>
                          <td>{Elem.id}</td>
                          <td>{Elem.DogName}</td>
                          <td>{Elem.RecipePlan}</td>
                          <td>{Elem.Address}</td>
                          <td>{Elem.DisRecPrice}</td>
                          <td>
                            <button id="ViewOrderButton" onClick={() => ViewOrderDetails(Elem)}>View Order Details</button>
                          </td>
                        </tr>:<tr></tr>
                      )
                    })
                  }
                </tbody>
                </table>  
            </div>
        </div>
      </div>
      {/* Table View */}
      
      <div className='row my-4'>
        <div className='col-md-12 text-center'>
          <button id="ChangeOrderButton" onClick={ChangeOrderDetails}>Change Order</button>
        </div>
      </div>
    </div>
  )
}

export default MyOrder;