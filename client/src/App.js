import "./App.css";
import { Routes,Route, useLocation} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import LandingPage from "./components/LandingPage/LandingPage";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";

function App() {
const location = useLocation()  
  return (
    <div>
      {location.pathname!=="/"&&<NavBar/>}
    
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/videogames/:id" element={<Detail/>}/>
          <Route path="/videogames"/>
          <Route path="/create" element={<Form/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
