
import './App.css';
import { Routes, Route , Link, Navigate} from "react-router-dom";

import Home from "./components/home"
import About from "./components/about"
import Gallery from "./components/gallery"
import Login from "./components/login"
import Signup from "./components/signup"
import { useState } from 'react';


function App() {


const [isLogin, setIsLogin]=useState(false);

  return (
    <div className="App">
      
    <button onClick={()=>{
      setIsLogin(!isLogin)
    }}>Toggle login test</button>

    {
      (isLogin)?
      <ul>
      <li> <Link to= {`/`}> Home </Link> </li>
      <li> <Link to= {`gallery`}> Gallery </Link> </li>
      <li> <Link to= {`about`}> About </Link> </li>
      <li> <Link to= {`profile`}> Profile </Link> </li>
    </ul>
    :
    <ul>
    <li> <Link to= {`/`}> login </Link> </li>
    <li> <Link to= {`signup`}> SignUp </Link> </li>
  </ul>
    }
   
   

    {
    (isLogin)?
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="gallery" element={<Gallery />} />
    <Route path="*" element={<div>Page not Found! </div>}/>
      </Routes>
      :
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="signup" element={<Signup />}/>
      <Route path="*" element={<Navigate to="/" replace={true} /> }/>
        </Routes>
    }


    </div>
  );
}

export default App;
