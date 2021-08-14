import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>sourcerise</h1>

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
      <h3>Internet sourcery that helps your activist group source important material needs to create safety and wellness for sentient beings thus supporting a deeper connection to source.</h3>
      <br></br>
      <h4>Things to source...</h4>
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
              return <tr key={key}><td>{props.sourcerings[key].amount}</td>
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
function Footer(props) {
  return (
    <footer>
      <p>
        Open source since {props.year}
      </p>

    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Main sourcerings={sourcerings} />
      <Footer year="2021"/>
    </div>
  );
}

export default App;
