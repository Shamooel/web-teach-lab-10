import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import './Components/All.css'
import User from './Components/User';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/footer';



function App() {
return (
<Router>
<div>
    
<Navbar/>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/user/:userId" element={<User />} />
<Route path="/Login" element={<Login />} />
<Route path="/Signup" element={< Signup/>} />

</Routes>
<Footer/>
</div>
</Router>
);
}
export default App;
