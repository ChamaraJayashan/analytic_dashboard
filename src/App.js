import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Login/>}/>
          <Route path='home'>
            <Route index element={<Home/>}/>
          </Route>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
