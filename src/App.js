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

// I can have A Routes component seperately and just call it here
//const App = () => {}  is  arrow function
const App = () => (
  <Router>
    <Header />
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/:movieId' element={<Movie/>} /> //can name this param as I like, does not have to be the name of the colum in the database
      <Route path ='/*' element={<NotFound/>} /> // any other Route that does not exist
    </Routes>
    <GlobalStyle />
  </Router>
  );

export default App;
