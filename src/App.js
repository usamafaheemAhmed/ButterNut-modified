import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import DogNameComponent from './components/DogNameComponent/DogNameComponent';
import BoyGirl from './components/boyGirl2nd/BoyGirl';
import CurrentlyEating from './components/currentlyeating5/CurrentlyEating';
import BodyLook from './components/bodyLook8/BodyLook';
import Age from './components/Age/Age';
import Breed from './components/Breed/Breed';
import Eater from './components/Eater/Eater';
import ActiveDog from './components/Activedog/ActiveDog';
import Goals from './components/Goals/Goals';
import Help from './components/Help/Help';
import DogWeight from './components/DogWeight/DogWeight';
import Allergies from './components/Allergies/Allergies';
import HealthIssues from './components/HealthIssues/HealthIssues';
import Snacks from './components/Snacks/Snacks';
import Location from './components/Location/Location';
import PetParent from './components/PetParent/PetParent';
import Recipes from './components/Recipes/Recipes';
import Recipes2 from './components/Recipes2/Recipes2';
import ExtraPlan from './components/ExtraPlan/ExtraPlan';
import ReviewPlan from './components/ReviewPlan/ReviewPlan';
import Login from './components/Login';
import OrderList from './components/OrderList';
import Dashboard from './components/Dashboard';
import AddUserList from './components/AddUserList';
import AddUser from './components/AddUser';
import MyOrder from './components/MyOrder';
// import PayFast from './components/PayFast';


function App() {
  return (


    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DogNameComponent/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path="/My-Orders" element={<MyOrder />}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Gender' element={<BoyGirl/>}/>
          <Route path='/Age' element={<Age/>}/>
          <Route path='/Breed' element={<Breed/>}/> 
          <Route path='/Food-Type' element={<CurrentlyEating/>}/>
          <Route path='/Eating-type' element={<Eater/>}/> 
          <Route path='/Eating-goals' element={<Goals/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/body-look' element={<BodyLook/>}/>
          <Route path='/dog-Weight' element={<DogWeight/>}/>
          <Route path='/Activity' element={<ActiveDog/>}/>
          <Route path='/Allergies' element={<Allergies/>}/>
          <Route path='/health-issues' element={<HealthIssues/>}/>
          <Route path='/snacks' element={<Snacks/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/petParent' element={<PetParent/>}/>
          <Route path='/plans-1' element={<Recipes />}/>
          <Route path='/plans-2' element={<Recipes2 />}/>
          <Route path='/plans-3' element={<ExtraPlan />}/>
          <Route path='/plans-4' element={<ReviewPlan />}/>
          <Route path='/View-Orders' element={<OrderList />}/>
          <Route path='/View-Users' element={<AddUserList />}/>
          <Route path='/Add-User' element={<AddUser />}/>
        </Routes> 
      </BrowserRouter>
      {/* <PayFast /> */}
    </div>
  );
}

export default App;
