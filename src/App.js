import Navbar from "./Components/Navbar";
import {Routes,Route} from "react-router-dom";
import Products from "./Components/Products";
// import Ourstory from "./Components/Ourstory";
import Pricing from "./Components/Pricing";
function App() {
  return (
    <>
     <Navbar></Navbar>
     <Routes>
      <Route  path="/" element={<Products></Products>}/>
      <Route  path="/pricing" element={<Pricing></Pricing>}/>
      </Routes>     
    </>
  );
}

export default App;
