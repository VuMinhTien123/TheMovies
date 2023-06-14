import React, { useEffect, useState } from 'react'
import Intro from '../Intro/Intro'
import Contents from '../Content/Contents'
import Menu from '../Menu/Menu'
import MoviesDetall from '../../MoviesDetall/MoviesDetall'
import { useSelector } from 'react-redux'


const Home = (props) => {

    const {MovieDetall} = useSelector(state => state.inforMovies)
    const [isShowMovieDetall, setIsShowMovieDetall] = useState(false);

    useEffect(() => {
        setIsShowMovieDetall(MovieDetall ? true : false)
    }, [MovieDetall])

  return (
    <div>
     
      <Intro />
      <Contents />
      <Menu />
      <MoviesDetall movie = {MovieDetall} showModal = {isShowMovieDetall} />
    </div>
  )
}

export default Home
