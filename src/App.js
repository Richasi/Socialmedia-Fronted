import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>Evaluation</h1> */}
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
