import "./App.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import LandingPage from "./components/LandingPage/LandingPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/videogames/:id" element={<Detail/>}/>
          <Route path="/videogames"/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
