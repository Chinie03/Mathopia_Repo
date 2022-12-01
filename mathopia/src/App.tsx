import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Support from './pages/Support'; 
import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs'; 
import Topics from './pages/Topics'; 
import Games from './pages/Games'; 
import MyScores from './pages/MyScores';
import Login from './pages/Login';



function App() {
  let component
  switch(window.location.pathname){
    case "/Home":
      component = <Home/>
      break
    case "/Support":
      component = <Support/>
      break
    case "/AboutUs":
      component = <AboutUs/>
      break
    case "/ContactUs":
      component = <ContactUs/>
      break
    case "/Topics":
      component = <Topics/>
      break
    case "/Games":
      component = <Games/>
      break
    case "/MyScores":
      component = <MyScores/>
      break
    case "/Login":
      component = <Login/>
      break
  }
  return (
    <>
        <Navbar/>
        {component}
    </>
  )
}

export default App;
