import React, { useReducer } from 'react';
import './App.css';
import wizard from './wizard.png';
import { Routes, Route } from "react-router-dom";
import {Home, About} from './pages';
import {  GiFullPizza } from 'react-icons/gi';
// https://react-icons.github.io/react-icons/icons?name=gi

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export function AboutComp() {
  return (
    <section>
      <h1>About Srcerise</h1>
      <p>This is a community project with the aim of bypassing shortcomings of capital based philanthropy. By accessing material needs directly from entities that have a surplus we bypass the need to "buy" things with "money" at stores and rather just give the community a vehicle to resource itself.</p>
      <h2>Contribute to the code on Github</h2>
      <a href="https://github.com/elmunoz42/in-kind-react" target="_blank">->Github repository</a>
    </section>
  );
}

function Header() {
  return (
    <header>
      <h1>srcerise</h1>
      <img src={wizard} alt="wizard in action" height={200}></img>
    </header>
  );
}

const sourcerings = [{
    id: 1,
    "amount": 15,
    "unit": "lbs",
    "type": "food",
    "name": "canned beans",
    "description": "any kind"
  },
  {
    id : 2,
    "amount": 3,
    "unit": "units",
    "type": "appliance",
    "name": "generator",
    "description": "1500 Watts or more, gasoline, diesel or solar."
  }
]
// console.log(sourcerings);
function Main(props) {
  return (
    <section>
      <h3>Internet srcery that helps your activist group src important material needs to create safety and wellness for sentient beings... </h3>
      <br></br>
      <h4>Things to srcerise for your effort...</h4>
      <GiFullPizza/>
      <table className="sourcerings">
        <thead>
          <tr>
            <td>Amount:</td>
            <td>Unit:</td>
            <td>Name:</td>
            <td>Type:</td>
            <td>Description:</td>
          </tr>
        </thead >
        {/* {console.log(props.sourcerings)} */}
        <tbody>
            {Object.keys(props.sourcerings).map( (key) => {
              return <tr key={props.sourcerings[key].id} className={"item-" + props.sourcerings[key].id}><td>{props.sourcerings[key].amount}</td>
                <td>{props.sourcerings[key].unit}</td>
                <td>{props.sourcerings[key].name}</td>
                <td>{props.sourcerings[key].type}</td>
                <td>{props.sourcerings[key].description}</td>
             </tr> 
          })}
        </tbody>
      </table>
    </section>
    
  );
}

function Form() {
   const [itemAdded, toggleItemAdded] = useReducer((itemAdded) => !itemAdded, false);
   return (
     <section>
       {itemAdded ? <p className="notification">item added</p> : ""}
       <form>
         <fieldset>
           <label>
             <p>Amount</p>
             <input name="quantity" type="number"/>
           </label>
           <label>
             <p>Unit</p>
             <select name="unit">
               <option>Pounds</option>
               <option>Gallons</option>
               <option>Count</option>
               <option>People</option>
               <option>Yards</option>
             </select>
           </label>
           <label>
             <p>Name</p>
             <input name="name" />
           </label>
           <label>
             <p>Description</p>
             <input name="description" />
           </label>
           <label>
             <p>Type</p>
             <input name="type" />
           </label>
         <button onClick={toggleItemAdded}>Submit</button>
         </fieldset>
       </form>
     </section>
   )
}

function Login() {
  const [entering, toggleEntering] = useReducer((entering) => !entering, false);
  return (
    <section>
      {entering ? <p className="notification">the src is strong with you</p> : ""}
      <form>
        <fieldset>
          <label>
            <p>Email</p>
            <input name="email" />
          </label>
          <label>
            <p>Password</p>
            <input name="password" />
          </label>
          <button onClick={toggleEntering}>Submit</button>
        </fieldset>
      </form>
    </section>
  )
}


function Footer(props) {
  return (
    <footer>
      <p>
        Open src since {props.year}
      </p>
      <p>Thanks pixabay for the free wizard image</p>

    </footer>
  );
}

export function HomeComp(props) {

  
  return (
    <div className="Home">
      <Header/>
      <Main sourcerings={sourcerings} />
      { props.authorized ? <Form />  : <Login /> }
      <Footer year="2021"/>
    </div>
  );
}

export default App;
