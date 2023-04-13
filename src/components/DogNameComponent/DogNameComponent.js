import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import carrot from "../../images/carrot.svg";
import './dogName.css'
import { Alert, Button } from "react-bootstrap";

// import deleteIcon from "./deleteIcon.svg";

const Validation = Event => {

  var letters = /^[A-Za-z]+$/;
  if(document.getElementById("dogName1Id").value.match(letters) && document.getElementById("dogName1Id").value !== "" 
  && document.getElementById("dogName1Id").value.length <=20 )
  {
    document.getElementById("dogName1Id").classList.add("is-valid");
    localStorage.setItem("dogName", document.getElementById("dogName1Id").value)    
  }
  else{
    Event.preventDefault();
    document.getElementById("dogName1Id").classList.add("is-invalid"); 
    alert(`
    Name couldn't be a number!
    Name couldn't be greater than 20 characters
    Name couldn't be empty
    `)
  }
}

const DogNameComponent = () => {
const [dogName2, setDogName2] = useState("");
const [dogName3, setDogName3] = useState("");
const [closeButton, setCloseButton] = useState(false);
const [buttonState, setButtonState] = useState(0);



  let anotherDogHandler1 = () => {
    if(buttonState===0){
      // alert("anotherDogHandler1");
      document.getElementById("form2").classList.remove("d-none");
      setButtonState(1);
      console.log(buttonState,"button");
      setCloseButton(true);
    }
    else if (buttonState===1){
      setButtonState(2);
      document.getElementById("form3").classList.remove("d-none");
    }
  };

  let remove = (e)=>{
    console.log(e);
    if(e===1||e==="1"){
      document.getElementById("form1").classList.add("d-none");
      setButtonState(buttonState-1);
      if (buttonState===1){
        setCloseButton(false);
      }
    }
    else if(e===2||e==="2"){
      document.getElementById("form2").classList.add("d-none");
      setButtonState(buttonState-1);
      if (buttonState===1){
        setCloseButton(false);
      }
    }
    else{
        document.getElementById("form3").classList.add("d-none");
        setButtonState(buttonState-1);
        if (buttonState===1){
          setCloseButton(false);
        }
      }
      console.log(buttonState);
  }

  return (
    <>
      <div className="container-fluid">
    

      
          {/* header */}
       <div className="row header py-5">
        
        <div className="row">
          <div className="col-md-12">
          <NavLink to="/Login"  id="headerHeading2">Sign In</NavLink>
          </div>
        </div>
        <div className="row my-3">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h3 className='text-center headerHeading'>First, what's your dog's name?</h3>
        </div>
        <div className="col-md-2"></div>
       </div></div>
          {/* header end */}

       
         {/* form 1 start */}
        <div className="row" id="form1">
          <div className="col-md-3"></div>
            <div className="col-md-6 ">
            <div className="form-card mt-5 mb-2">
              <div className="card shadow-sm border-0 cardFirstPage">
                <div className="card-body">
                  <label htmlFor="" className="nameLabel mb-2">
                    My dog is called... 
                  </label>

                  <Alert show={closeButton} variant="outline-light" className="alertFirstPage">              
                  <Button variant="outline-light" className="float-end close" value="1" onClick={(e)=>{remove(e.target.value)}}>X</Button>
                  </Alert>

                  <input
                    className="form-control inputName py-3"
                    type="text"
                    id="dogName1Id"
                    placeholder="Your dog's name"
                  />

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>



        {/* form 1 end */}

        {/* form 2 start */}
        <div className="row d-none" id="form2">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-card mt-4 mb-2">
              <div className="card shadow-sm border-0 cardFirstPage">
                <div className="card-body">
                  <label htmlFor="" className="nameLabel">
                    My dog is called...
                  </label>
                  <Alert show={closeButton} variant="outline-light"   className="alertFirstPage">              
                  <Button variant="outline-light" className="float-end close" value="2" onClick={(e)=>{remove(e.target.value)}}>X</Button>
                  </Alert>
                  <input
                    className="form-control inputName py-3"
                    type="text"
                    placeholder="Your dog's name"
                    value={dogName2}
                    onChange={(e)=>setDogName2(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* form 2 end */}

        {/* form 3 start */}
        <div className="row d-none" id="form3">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-card mt-4 mb-2">
              <div className="card shadow-sm border-0 cardFirstPage">
                <div className="card-body">
                  <label htmlFor="" className="nameLabel">
                    My dog is called...
                  </label>
                  <Alert show={closeButton} variant="outline-light"  className="alertFirstPage">              
                  <Button variant="outline-light" className="float-end close" value="3" onClick={(e)=>{remove(e.target.value)}}>X</Button>
                  </Alert>
                  <input
                    className="form-control inputName py-3"
                    type="text"
                    placeholder="Your dog's name"
                    value={dogName3}
                    onChange={(e)=>setDogName3(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* form 3 end */}

 {/* Add Dog button */}
            <div className="row mb-5">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <button
                type="button"
                className="btn btn-link float-end anotherDogBtn"
                id="anotherDogBtn1"
                onClick={anotherDogHandler1}
                >
                I have another dog
                </button>
              
              </div>
              <div className="col-md-3"></div>
            </div>
 {/* Add Dog button */}

        <div className="row freshRow ">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          
          <h3 className="freshFact">Fresh Fact</h3> 
          <img className="float-end" src={carrot} alt="" />
          <p className="p2"><strong>The story of Butternut Box begins with a farting Staffie called Rudie. Only home-cooked meals could help her terrible farts, and the rest, as they say, is history.</strong></p>
        </div>
        <div className="col-md-3"></div>

       </div>

{/* footer */}
<div className="footer shadow  text-center py-4">
    
    <NavLink to='/Gender' type="button" className="btn px-3 py-2 start-btn" onClick={Validation}>LET'S START</NavLink>

</div>

      </div>
    </>
  );
};

export default DogNameComponent;
