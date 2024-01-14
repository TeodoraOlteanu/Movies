import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';

//Components
import Header from './components/Header';
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound';
import Teaching from './components/Teaching';
import Aboutme from './components/Aboutme';
import Menu from "./components/Menu";
import Footer from './components/Footer';
import Contact from './components/Contact';

// I can have A Routes component seperately and just call it here
//const App = () => {}  is  arrow function
const App = () => (
  <Router>
    <Header />
    <Menu />
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/:movieId' element={<Movie/>} /> //can name this param as I like, does not have to be the name of the colum in the database
      <Route path ='/*' element={<NotFound/>} /> // any other Route that does not exist
      <Route path = '/Teaching' element={<Teaching/>} />
      <Route path = '/AboutMe' element={<Aboutme/>}/>
      <Route path = '/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    <GlobalStyle />
  </Router>
  );

export default App;
