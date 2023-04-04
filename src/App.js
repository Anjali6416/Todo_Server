import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App" style={{background: "linear-gradient(to bottom, white 0%,  rgb(28, 1, 29) 100%)",height:"1000px"}}>
      <Navbar/>
     <AllRoutes/>
    </div>
  );
}
// rgb(250, 250, 250 )
export default App;
