import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FaHotjar, FaStar} from 'react-icons/fa'
import {GiNinjaHeroicStance, GiGhost, GiRomanToga, GiBandageRoll} from 'react-icons/gi'
import {MdTheaterComedy} from 'react-icons/md'
import styled from 'styled-components'
import MenuItem from './MenuItem'
const Menu = (props) => {
  return (
    <MenusPane>
      <MenuItem name = 'Netflix' Icon = {AiFillHome} to = 'netflix' />
      <MenuItem name = 'Trending' Icon = {FaHotjar} to = 'trendingMovies' />
      <MenuItem name = 'Top rates' Icon = {FaStar} to = 'topRated'/>
      <MenuItem name = 'Action Movies' Icon = {GiNinjaHeroicStance} to = 'actionMovies'/>
      <MenuItem name = 'Comedy Movies' Icon = {MdTheaterComedy} to = 'comedyMovies'/>
      <MenuItem name = 'Horror Movies' Icon = {GiGhost} to = 'horrorMovies' />
      <MenuItem name = 'Romance Movies' Icon = {GiRomanToga} to = 'romanceMovies' />
      <MenuItem name = 'Documentaries' Icon = {GiBandageRoll} to = 'documentaries' />
    </MenusPane>
  )
}

export default Menu;

const MenusPane = styled.div `
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(0, 0 ,0 , 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;

    &:hover {
        width: 180px;
        background: rgba(0, 0 ,0 , 0.5);
    }

    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);

            &:hover {
                color: #fff;
            }
        }

    }
`;