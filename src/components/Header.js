import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

export const Header = () => { 
      
  return (
    <div className='header'>
          <div className='header__leftSide'>
            <h2 className='header__leftSide__title'>
             POC Project
            </h2>
          </div>
          <div className='header__rightSide'> 
            <ul className='header__rightSide__items'>
               <li className='header__rightSide__items__item'>
                  <Link to='/'>Home</Link>
              </li>
              <li className='header__rightSide__items__item'>
                  <Link to='/Users'>Users</Link>   
              </li> 
            </ul>
          </div>
    </div>
  )
}


export default Header;
