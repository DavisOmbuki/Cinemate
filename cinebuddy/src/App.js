import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Browse from './pages/Browse';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Watchlist from './pages/Watchlist';
import Details from './Components/Details';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/tvshows/:id" element={<Details />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
