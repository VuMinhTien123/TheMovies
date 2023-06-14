import React from 'react'
import SearchMovie from '../SearchMovie/SearchMovie';
import MoviesDetall from '../../MoviesDetall/MoviesDetall';
import { useSelector } from 'react-redux';

const Search = (props) => {
  const {MovieDetall} = useSelector(state => state.inforMovies)
  return (
    <div>
      <SearchMovie />
      <MoviesDetall showModal = {MovieDetall ? true : false} movie= {MovieDetall} />
    </div>
  )
}

export default Search;
