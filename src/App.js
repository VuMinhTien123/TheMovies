
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Intro from './components/Intro/Intro';

// import Menu from './components/Menu/Menu';
// import Contents from './components/Content/Contents';
// import MoviesDetall from './MoviesDetall/MoviesDetall';
import { useSelector } from 'react-redux';
import SearchMovie from './components/SearchMovie/SearchMovie';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const {MovieDetall} = useSelector(state => state.inforMovies)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route  path='/search' element={<Search />} />
      </Routes>
      </BrowserRouter>
      {/* <Intro />
      <Contents />
      <Menu />
      <MoviesDetall movie = {MovieDetall} showModal = {MovieDetall ? true : false} /> */}
      {/* <SearchMovie /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
