import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Sourcerize</h1>

    </header>
  );
}
function Main() {
  return (
    <section>
      <h3>Internet sourcery that helps your activist group source important material needs to create safety and wellness for sentient beings thus supporting a deeper connection to source.</h3>
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
      <Main />
      <Footer year="2021"/>
    </div>
  );
}

export default App;
