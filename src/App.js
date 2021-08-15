import './App.css';
import wizard from './wizard.png';

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
      <p>...thus supporting a deeper connection to src.</p>
      <br></br>
      <h4>Things to srcerise for your effort...</h4>
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
   return (
     <section>
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
         <button type="submit">Submit</button>
         </fieldset>
       </form>
     </section>
   )
}

function Login() {
  return (
    <section>
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
        <button type="submit">Submit</button>
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
      <p>Thanks pixabay for the image</p>

    </footer>
  );
}

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Main sourcerings={sourcerings} />
      { props.authorized ? <Form />  : <Login /> }
      <Footer year="2021"/>
    </div>
  );
}

export default App;
