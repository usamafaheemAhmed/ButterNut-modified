import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './OrderList.css';
import Dashboard from "./Dashboard";

import * as Yup from "yup";
import "yup-phone";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
const OrderList = () => {
  const [myList, setMyList] = useState([]);
  const [myId, setMyId] = useState("");
  const [myDogName, setMyDogName] = useState("");
  const [myGender, setMyGender] = useState("");
  const [myVaccination, setMyVaccination] = useState("");
  const [myAgeBracket, setMyAgeBracket] = useState("");
  const [myAgeYear, setMyAgeYear] = useState("");
  const [myAgeMonth, setMyAgeMonth] = useState("");
  const [myBreed, setMyBreed] = useState("");
  const [myFoodType, setMyFoodType] = useState("");
  const [myEaterType, setMyEaterType] = useState("");
  const [myGoals, setMyGoals] = useState("");
  const [myBody, setMyBody] = useState("");
  const [myWeight, setMyWeight] = useState("");
  const [myActivity, setMyActivity] = useState("");
  const [myAllergies, setMyAllergies] = useState("");
  const [myHealth, setMyHealth] = useState("");
  const [mySnacks, setMySnacks] = useState("");
  const [myLocation, setMyLocation] = useState("");
  const [myPostcode, setMyPostcode] = useState("");
  const [myPName, setMyPName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [myRecipePlan, setMyRecipePlan] = useState("");
  const [myPromo, setMyPromo] = useState("");
  const [myDiscount, setmyDiscount] = useState("");
  const [myDisRecPrice, setMyDisRecPrice] = useState("");
  const [myRecPrice, setMyRecPrice] = useState("");
  const [myDeliveryFee, setMyDeliveryFee] = useState("");
  const [mySavings, setMySavings] = useState("");
  const [myTotalBill, setMyTotalBill] = useState("");

  const [updatedValues, setUpdatedValues] = useState(false);

  useEffect(() => {
    axios.get(` http://localhost:7000/Order`).then((res) => {
      setMyList(res.data);
      console.log(res.data);
    });
  }, []);

  let updateHandler = (elem) => {
     document.getElementById("formikContainer").classList.remove("d-none");
     
    setMyId(elem.id);
    setMyDogName(elem.DogName);
    setMyGender(elem.Gender);
    setMyVaccination(elem.Vaccination);
    setMyAgeBracket(elem.AgeBracket);
    setMyAgeYear(elem.AgeYear);
    setMyAgeMonth(elem.AgeMonth);
    setMyBreed(elem.Breed);
    setMyFoodType(elem.FoodType); // checkbox to be Added
    setMyEaterType(elem.EaterType);
    setMyGoals(elem.Goals);
    setMyBody(elem.Body);
    setMyWeight(elem.Weight);
    setMyActivity(elem.Activity);
    setMyAllergies(elem.Allergies);
    setMyHealth(elem.Health);
    setMySnacks(elem.Snacks);
    setMyLocation(elem.Location);
    setMyPostcode(elem.Postcode);
    setMyPName(elem.PName);
    setMyEmail(elem.Email);
    setMyAddress(elem.Address);
    setMyRecipePlan(elem.RecipePlan);
    setMyPromo(elem.Promo);
    setmyDiscount(elem.Discount);
    setMyDisRecPrice(elem.DisRecPrice);
    setMyRecPrice(elem.RecPrice);
    setMyDeliveryFee(elem.DeliveryFee);
    setMySavings(elem.Savings);
    setMyTotalBill(elem.TotalBill);

    setUpdatedValues(true);
  };

  const initialValues = {
    foodId: updatedValues ? myId : "",
    DogName: updatedValues ? myDogName : "",
    Gender: updatedValues ? myGender : "",
    Vaccination: updatedValues ? myVaccination : "",
    AgeBracket: updatedValues ? myAgeBracket : "",
    AgeYear: updatedValues ? myAgeYear : "",
    AgeMonth: updatedValues ? myAgeMonth : "",
    Breed: updatedValues ? myBreed : "",
    FoodType: updatedValues ? myFoodType : "", // checkbox to be added
    EaterType: updatedValues ? myEaterType : "",
    Goals: updatedValues ? myGoals : "",
    Body: updatedValues ? myBody : "",
    Weight: updatedValues ? myWeight : "",
    Activity: updatedValues ? myActivity : "",
    Allergies: updatedValues ? myAllergies : "",
    Health: updatedValues ? myHealth : "",
    Snacks: updatedValues ? mySnacks : "",
    Location: updatedValues ? myLocation : "",
    Postcode: updatedValues ? myPostcode : "",
    PName: updatedValues ? myPName : "",
    Email: updatedValues ? myEmail : "",
    Address: updatedValues ? myAddress: "",
    RecipePlan: updatedValues ? myRecipePlan : "",
    Promo: updatedValues ? myPromo : "",
    Discount: updatedValues ? myDiscount : "",
    DisRecPrice: updatedValues ? myDisRecPrice : "",
    RecPrice: updatedValues ? myRecPrice : "",
    DeliveryFee: updatedValues ? myDeliveryFee : "",
    Savings: updatedValues ? mySavings : "",
    TotalBill: updatedValues ? myTotalBill : "",
  };

  const onSubmit = (values, action) => {
    let AddFood = {
      id: values.foodId,
      DogName: values.DogName,
      Gender: values.Gender,
      Vaccination: values.Vaccination,
      AgeBracket: values.AgeBracket,
      AgeYear: values.AgeYear,
      AgeMonth: values.AgeMonth,
      Breed: values.Breed,
      FoodType: values.FoodType,
      EaterType: values.EaterType,
      Goals: values.Goals,
      Body: values.Body,
      Weight: values.Weight,
      Activity: values.Activity,
      Allergies: values.Allergies,
      Health: values.Health,
      Snacks: values.Snacks,
      Location: values.Location,
      Postcode: values.Postcode,
      PName: values.PName,
      Email: values.Email,
      Address : values.Address, 
      RecipePlan: values.RecipePlan,
      Promo: values.Promo,
      Discount: values.Discount,
      DisRecPrice: values.DisRecPrice,
      RecPrice: values.RecPrice,
      DeliveryFee: values.DeliveryFee,
      Savings: values.Savings,
      TotalBill: values.TotalBill,
    };
    console.log(AddFood);
    let foodId = values.foodId;

    axios
      .patch(` http://localhost:7000/Order/Update-Order/${foodId}`, AddFood)

      .then((res) => {
        toast.success(`Id no " ${foodId} " updated successfully`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setTimeout(function () {
          // action.resetForm();
          window.location.reload();
        }, 1000);

        action.resetForm();
      });
  };

  const validationSchema = Yup.object({
    foodId: Yup.number()
      .required("Required")
      .test(
        "Is positive?",
        "Id must be a positive number",
        (value) => value > -1
      ),
      DogName:Yup.string().required("Required"),
      Breed:Yup.string().required("Required"),
      Promo:Yup.string().required("Required"),


      AgeYear: Yup.number()
      .required("Required")
      .test(
        "Is positive?",
        "Year must be a positive number",
        (value) => value > -1
      ),
      AgeMonth: Yup.number()
      .required("Required")
      .test(
        "Is positive?",
        "Month must be a positive number",
        (value) => value > 0
      ),
      
      Weight: Yup.number()
      .required("Required")
      .test(
        "Is positive?",
        "Weight must be a positive number",
        (value) => value > -1
      ),
      FoodType:Yup.string().required("Required"),
      Health:Yup.string().required("Required"),
      Location:Yup.string().required("Required"),
      Postcode: Yup.string()
      .required("Required"),

    Allergies: Yup.string().required("Required"),
    PName: Yup.string().required("Required"),
    Address: Yup.string().required("Required"),
    DisRecPrice: Yup.number()
    .required("Required")
    .test(
      "Is positive?",
      "Discount recipe price must be a positive number",
      (value) => value > -1
    ),

    RecPrice: Yup.number()
    .required("Required")
    .test(
      "Is positive?",
      "Recipe price must be a positive number",
      (value) => value > -1
    ),

    DeliveryFee: Yup.number()
    .required("Required")
    .test(
      "Is positive?",
      "Delivery fee must be a positive number",
      (value) => value > -1
    ),

    Savings: Yup.number()
    .required("Required")
    .test(
      "Is positive?",
      "Saving must be a positive number",
      (value) => value > -1
    ),
    Promo: Yup.string().required("Required"),
    Discount: Yup.number()
    .required("Required")
    .test(
      "Is positive?",
      "Discount must be a positive number",
      (value) => value > -1
    ),

    TotalBill: Yup.number()
    .required("Required")
    .test(
      "Is positive?",
      "Total bill must be a positive number",
      (value) => value > -1
    ),



    Email: Yup.string().email("Invalid email format").required("Required"),
  });

  let deleteHandler = (elem) => {
    // console.log(elem)
    if (window.confirm("Are you sure to want to delete " + elem.id)) {
      var obj = elem.id;
      axios.delete(`http://localhost:7000/Order/Delete-Order/${obj}`).then((res) => {
        //    console.log(res)
      });

      toast.success("Order deleted successfully", {
        position: "top-center",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(function () {
        // action.resetForm();
        window.location.reload();
      }, 1000);
    }
  };
  let Navigate = useNavigate();
  function HOMEPAGE(){
    Navigate('/Dashboard');
  }
  
  
  const [PageNumber, setPageNumber] = useState(0);
  const OrdersPerPage = 1;
  const PageVisited = PageNumber * OrdersPerPage;
  const PageCount = Math.ceil(myList.length/OrdersPerPage);
  const ChangePage = ({selected}) => {
    setPageNumber(selected);
  };

  return (
    <>    <Dashboard/>
    <div className="container-fluid">

      <ToastContainer />
<div className="d-none shadow mt-3" id="formikContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue, setValues }) => (
          <Form className="mt-5">
             <div className='row mt-4 py-4'>
        <div className="col-md-12 headerHeading">       
        <h3 id="NavTitle" className='text-center headerHeading1'>Update Order List</h3>
        </div>
        </div>
<div className="p-3">
            {/* 1st row */}
            <div className="row">
              <div className="col-md-3">
                {/* Food Id  */}
                <div className="mb-2">
                  <label htmlFor="foodId" >Id</label>
                  <Field
                    readOnly
                    type="number"
                    className="form-control m-0"
                    id="foodId"
                    value={values.foodId}
                    onChange={(e) => setFieldValue("foodId", e.target.value)}
                  />
                  <ErrorMessage name="foodId" />
                </div>
                {/* Food Id */}
              </div>
              <div className="col-md-3 ">
                {/* DogName */}
                <div className="mb-2">
                  <label  htmlFor="DogName">Dog Name</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="DogName"
                    value={values.DogName}
                    onChange={(e) => setFieldValue("DogName", e.target.value)}
                  />
                  <ErrorMessage className="text-danger" name="DogName" />
                </div>
                {/* DogName */}
              </div>
              {/*Gender  */}
              <div className="col-md-3 ">
                <label htmlFor="Gender">Gender</label>
                <Field
                  as="select"
                  className="form-select  m-0"
                  id="Gender"
                  value={values.Gender}
                  onChange={(e) => setFieldValue("Gender", e.target.value)}
                  aria-label="Default select example"
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                </Field>
                <ErrorMessage name="Gender" />
              </div>
              {/* Gender */}
              {/* Vaccination  */}

              <div className="col-md-3">
                <div className="mb-2">
                  <label htmlFor="Vaccination">Vaccination</label>
                  <Field
                    as="select"
                    className="form-select  m-0"
                    id="Vaccination"
                    value={values.Vaccination}
                    onChange={(e) =>
                      setFieldValue("Vaccination", e.target.value)
                    }
                    aria-label="Default select example"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Field>
                </div>
              </div>
              {/* Vaccination */}
            </div>
            {/* 1st row */}

            {/* 2nd row */}
            <div className="row">
              {/* AgeBracket  */}
              <div className="col-md-3">
                <div className="mb-2">
                  <label htmlFor="AgeBracket">Dog Type</label>
                  <select
                    as="select"
                    className="form-select  m-0"
                    id="AgeBracket"
                    value={values.AgeBracket}
                    onChange={(e) =>
                      setFieldValue("AgeBracket", e.target.value)
                    }
                    aria-label="Default select example"
                  >
                    <option value="puppy">A puppy</option>
                    <option value="adult">An adult</option>
                    <option value="senior">A senior</option>
                  </select>
                </div>
              </div>
              {/* AgeBracket */}

              {/* AgeYear  */}
              <div className="col-md-3 ">
                <div className="mb-2">
                  <label htmlFor="AgeYear">Year</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="AgeYear"
                    value={values.AgeYear}
                    onChange={(e) => setFieldValue("AgeYear", e.target.value)}
                  />
                  <ErrorMessage name="AgeYear" />
                </div>
              </div>
              {/* AgeYear */}

              <div className="col-md-3 ">
                {/* AgeMonth */}
                <div className="mb-2">
                  <label htmlFor="AgeMonth">Month</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="AgeMonth"
                    value={values.AgeMonth}
                    onChange={(e) => setFieldValue("AgeMonth", e.target.value)}
                  />
                  <ErrorMessage name="AgeMonth" />
                </div>
                {/* AgeMonth */}
              </div>

              {/* Breed */}
              <div className="col-md-3 ">
                <div className="mb-2">
                  <label htmlFor="Breed">Breed</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="Breed"
                    value={values.Breed}
                    onChange={(e) => setFieldValue("Breed", e.target.value)}
                  />
                  <ErrorMessage name="Breed" />
                </div>
              </div>
              {/* Breed */}
            </div>
            {/* 2nd row */}

            {/* 3rd row */}
            <div className="row">
              <div className="col-md-3">
                {/* FoodType */}
                <div className="mb-2">
                  <label htmlFor="FoodType">Food Type</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="FoodType"
                    value={values.FoodType}
                    onChange={(e) => setFieldValue("FoodType", e.target.value)}
                  />
                  <ErrorMessage name="FoodType" />
                </div>
                {/* FoodType*/}
              </div>
              <div className="col-md-3 ">
                {/* EaterType  */}
                <div className="mb-2">
                  <label htmlFor="EaterType">Eater Type</label>
                  <select
                    as="select"
                    className="form-select  m-0"
                    id="EaterType"
                    value={values.EaterType}
                    onChange={(e) => setFieldValue("EaterType", e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="foodie">A foodie</option>
                    <option value="good eater">A good eater</option>
                    <option value="Can be fussy">Can be fussy</option>
                    <option value="Very fussy">Very fussy</option>
                  </select>
                </div>
                {/* EaterType */}
              </div>
              <div className="col-md-3 ">
                {/* Goals  */}
                <div className="mb-2">
                  <label htmlFor="Goals">Goals</label>
                  <select
                    as="select"
                    className="form-select  m-0"
                    id="Goals"
                    value={values.Goals}
                    onChange={(e) => setFieldValue("Goals", e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="The ease of ordering and receiving it (just when I need it).">
                      The ease of ordering and receiving it (just when I need
                      it).
                    </option>
                    <option value="The food meets her special health needs.">
                      The food meets her special health needs.
                    </option>
                    <option value="The food contains the best ingredients for Milo.">
                      The food contains the best ingredients for Milo.
                    </option>
                    <option value="Dog loves the taste of the food and is happy to eat it.">
                      Dog loves the taste of the food and is happy to eat it.
                    </option>
                  </select>
                </div>
                {/* Goals */}
              </div>

              <div className="col-md-3 ">
                {/* Body  */}
                <div className="mb-2">
                  <label htmlFor="Body">Body</label>
                  <select
                    as="select"
                    className="form-select  m-0"
                    id="Body"
                    value={values.Body}
                    onChange={(e) => setFieldValue("Body", e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="A little skinny">A little skinny</option>
                    <option value="Just right">Just right</option>
                    <option value="A bit chubby">A bit chubby</option>
                  </select>
                </div>
                {/* Body */}
              </div>
            </div>
            {/* 3rd row */}

            {/* 4th row */}
            <div className="row">
              <div className="col-md-3">
                {/* Weight */}
                <div className="mb-2">
                  <label htmlFor="Weight">Weight</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="Weight"
                    value={values.Weight}
                    onChange={(e) => setFieldValue("Weight", e.target.value)}
                  />
                  <ErrorMessage name="Weight" />
                </div>
                {/* Weight */}
              </div>
              <div className="col-md-3">
                {/* Activity  */}
                <div className="mb-2">
                  <label htmlFor="Activity">Activity</label>
                  <select
                    as="select"
                    className="form-select  m-0"
                    id="Activity"
                    value={values.Activity}
                    onChange={(e) => setFieldValue("Activity", e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="A working dog">A working dog</option>
                    <option value="A serial snoozer">A serial snoozer</option>
                    <option value="Somewhat active">Somewhat active</option>
                    <option value="Active">Active</option>
                    <option value="Very active">Very active</option>
                    <option value="Full of energy">Full of energy</option>
                  </select>
                </div>
                {/* Activity */}
              </div>
              <div className="col-md-3 ">
                {/* Allergies */}
                <div className="mb-2">
                  <label htmlFor="Allergies">Allergies</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="Allergies"
                    value={values.Allergies}
                    onChange={(e) => setFieldValue("Allergies", e.target.value)}
                  />
                  <ErrorMessage name="Allergies" />
                </div>
                {/* Allergies */}
              </div>
              {/* Health */}

              <div className="col-md-3 ">
                <div className="mb-2">
                  <label htmlFor="Health">Health</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="Health"
                    value={values.Health}
                    onChange={(e) => setFieldValue("Health", e.target.value)}
                  />
                  <ErrorMessage name="Health" />
                </div>
              </div>
              {/* Health*/}
            </div>
            {/* 4th row */}

            {/* 5th row */}
            <div className="row">
                {/* Snacks  */}
              <div className="col-md-3">
                <div className="mb-2">
                  <label htmlFor="Snacks">Snacks</label>
                  <select
                    as="select"
                    className="form-select  m-0"
                    id="Snacks"
                    value={values.Snacks}
                    onChange={(e) => setFieldValue("Snacks", e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="Doesn't eat any">Doesn't eat any</option>
                    <option value="Has some (1-3 times a day)">
                      Has some (1-3 times a day)
                    </option>
                    <option value="Has lots (4+ times a day)">
                      Has lots (4+ times a day)
                    </option>
                  </select>
                </div>
              </div>
                {/* Snacks */}

                {/* Location  */}
              <div className="col-md-3 ">
                <div className="mb-2">
                  <label htmlFor="EaterType">Location</label>
                  <select
                    as="select"
                    className="form-select  m-0"
                    id="Location"
                    value={values.Location}
                    onChange={(e) => setFieldValue("Location", e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="Great Britain">Great Britain</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Republic of Ireland">Republic of Ireland</option>
                    <option value="Northern Ireland">Northern Ireland</option>
                    <option value="Netherlands">Netherlands</option>

                  </select>
                </div>
              </div>
                {/* Location*/}

                {/* Postcode  */}
              <div className="col-md-3 ">
                <div className="mb-2">
                  <label htmlFor="Postcode">Post Code</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="Postcode"
                    value={values.Postcode}
                    onChange={(e) => setFieldValue("Postcode", e.target.value)}
                  />
                  <ErrorMessage name="Postcode" />
                </div>
              </div>
                {/*Postcode */}

                {/* PName  */}
              <div className="col-md-3 ">
                <div className="mb-2">
                  <label htmlFor="PName">Pup Name</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="PName"
                    value={values.PName}
                    onChange={(e) => setFieldValue("PName", e.target.value)}
                  />
                  <ErrorMessage name="PName" />
                </div>
              </div>
                {/*PName */}

            </div>
            {/* 5th row */}

            {/* 6th row */}
            <div className="row">
              <div className="col-md-3">
                {/* Email */}
                <div className="mb-2">
                  <label htmlFor="Email">Email</label>
                  <Field
                    type="Email"
                    className="form-control m-0"
                    id="Email"
                    value={values.Email}
                    onChange={(e) => setFieldValue("Email", e.target.value)}
                  />
                  <ErrorMessage name="Email" />
                </div>
                {/* Email */}
              </div>
              <div className="col-md-3">
                {/* RecipePlan  */}
                <div className="mb-2">
                  <label htmlFor="RecipePlan">Recipe Plan</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="RecipePlan"
                    value={values.RecipePlan}
                    onChange={(e) =>
                      setFieldValue("RecipePlan", e.target.value)
                    }
                  />
                  <ErrorMessage name="RecipePlan" />
                </div>
                {/* RecipePlan */}
              </div>

              {/* Address */}
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="Address">Address</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="Address"
                    value={values.Address}
                    onChange={(e) => setFieldValue("Address", e.target.value)}
                  />
                  <ErrorMessage name="Address" />
                </div>
              </div>
              {/* Address */}

            
            </div>
            {/* 6th row */}

            {/* 7th row */}
            <div className="row">
              <div className="col-md-3">
                {/* DisRecPrice  */}
                <div className="mb-2">
                  <label htmlFor="DisRecPrice">Discount Recipe Price</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="DisRecPrice"
                    value={values.DisRecPrice}
                    onChange={(e) =>
                      setFieldValue("DisRecPrice", e.target.value)
                    }
                  />
                  <ErrorMessage name="DisRecPrice" />
                </div>
                {/* DisRecPrice */}
              </div>
              <div className="col-md-3">
                {/* RecPrice */}
                <div className="mb-2">
                  <label htmlFor="RecPrice">Recipe Price</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="RecPrice"
                    value={values.RecPrice}
                    onChange={(e) => setFieldValue("RecPrice", e.target.value)}
                  />
                  <ErrorMessage name="RecPrice" />
                </div>
                {/* RecPrice */}
              </div>
              <div className="col-md-3 ">
                {/* DeliveryFee */}
                <div className="mb-2">
                  <label htmlFor="DeliveryFee">Delivery Fee</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="DeliveryFee"
                    value={values.DeliveryFee}
                    onChange={(e) =>
                      setFieldValue("DeliveryFee", e.target.value)
                    }
                  />
                  <ErrorMessage name="DeliveryFee" />
                </div>
                {/* DeliveryFee */}
              </div>

              <div className="col-md-3 ">
                {/* Savings */}
                <div className="mb-2">
                  <label htmlFor="Savings">Savings</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="Savings"
                    value={values.Savings}
                    onChange={(e) => setFieldValue("Savings", e.target.value)}
                  />
                  <ErrorMessage name="Savings" />
                </div>
                {/* Savings */}
              </div>
            </div>
            {/* 7th row */}

            {/* 8th row */}
            <div className="row">
            <div className="col-md-3 ">
                {/* Promo */}
                <div className="mb-2">
                  <label htmlFor="Promo">Promo</label>
                  <Field
                    type="text"
                    className="form-control m-0"
                    id="Promo"
                    value={values.Promo}
                    onChange={(e) => setFieldValue("Promo", e.target.value)}
                  />
                  <ErrorMessage name="Promo" />
                </div>
                {/* Promo */}
              </div>

              <div className="col-md-3 ">
                {/* Discount  */}
                <div className="mb-2">
                  <label htmlFor="Discount">Discount</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="Discount"
                    value={values.Discount}
                    onChange={(e) => setFieldValue("Discount", e.target.value)}
                  />
                  <ErrorMessage name="Discount" />
                </div>
                {/* Discount */}
              </div>
                {/* TotalBill  */}
              <div className="col-md-3">
                <div className="mb-2">
                  <label htmlFor="TotalBill">Total Bill</label>
                  <Field
                    type="number"
                    className="form-control m-0"
                    id="TotalBill"
                    value={values.TotalBill}
                    onChange={(e) => setFieldValue("TotalBill", e.target.value)}
                  />
                  <ErrorMessage name="TotalBill" />
                </div>
              </div>
                {/* TotalBill  */}


            </div>
            {/* 8th row */}

            <div className="row mt-3">
              <div className="col-md-12 text-center">
              <button type="submit" id="HomeButton">
              Update
            </button>
              </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      <div className="row my-3 p-0 mx-1">
        
        {/* table */}
        <div className="table-responsive m-0 p-0">
          <table className="table border table-bordered table-hover text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>DogName</th>
                <th>Gender</th>
                <th>Vaccination</th>
                <th>AgeBracket</th>
                <th>Year</th>
                <th>Month</th>
                <th>Breed</th>
                <th>FoodType</th>
                <th>EaterType</th>
                <th>Goals</th>
                <th>Body</th>
                <th>Weight</th>
                <th>Activity</th>
                <th>Allergies</th>
                <th>Health</th>
                <th>Snacks</th>
                <th>Postcode</th>
                <th>PupName</th>
                <th>Email</th>
                <th>Location</th>
                <th>Address</th>
                <th>RecipePlan</th>
                <th>Promo</th>
                <th>Discount</th>
                <th>DiscountRecipePrice</th>
                <th>RecipePrice</th>
                <th>DeliveryFee</th>
                <th>Savings</th>
                <th>TotalBill</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {myList
              .slice(PageVisited, PageVisited + OrdersPerPage)
              .map((elem, index) => {
                return (
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.DogName}</td>
                    <td>{elem.Gender}</td>
                    <td>{elem.Vaccination}</td>
                    <td>{elem.AgeBracket}</td>
                    <td>{elem.AgeYear}</td>
                    <td>{elem.AgeMonth}</td>
                    <td>{elem.Breed}</td>
                    <td>{elem.FoodType}</td>
                    <td>{elem.EaterType}</td>
                    <td>{elem.Goals}</td>
                    <td>{elem.Body}</td>
                    <td>{elem.Weight}</td>
                    <td>{elem.Activity}</td>
                    <td>{elem.Allergies}</td>
                    <td>{elem.Health}</td>
                    <td>{elem.Snacks}</td>
                    <td>{elem.Postcode}</td>
                    <td>{elem.PName}</td>
                    <td>{elem.Email}</td>
                    <td>{elem.Location}</td>
                    <td>{elem.Address}</td>
                    <td>{elem.RecipePlan}</td>
                    <td>{elem.Promo}</td>
                    <td>{elem.Discount}</td>
                    <td>{elem.DisRecPrice}</td>
                    <td>{elem.RecPrice}</td>
                    <td>{elem.DeliveryFee}</td>
                    <td>{elem.Savings}</td>
                    <td>{elem.TotalBill}</td>
                    <td>
                        <div className="text-center my-1">
                        <button
                        type="btn"
                        onClick={() => updateHandler(elem)}
                        id="UpdateButton"
                      >
                        Update
                      </button>
                      </div>
                      <div className="text-center">
                      <button
                        onClick={() => deleteHandler(elem)}
                        type="btn"
                        id="DeleteButton"
                      >
                        Delete
                      </button>
                      

                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* table */}
      </div>
      <div className="row my-4">
        <div className="col-md-12 text-center">
          <ReactPaginate 
          previousLabel = {"Prev"}
          nextLabel = {"Next"}
          pageCount = {PageCount}
          onPageChange = {ChangePage}
          containerClassName = "PaginationButtons" 
          />
        </div>
      </div>
    </div>
    </>

  );
};

export default OrderList;
