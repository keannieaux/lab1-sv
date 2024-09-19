import React, {Component} from 'react';
import './Header.css';
import cartIcon from './image/shopping_cart.svg';
import searchIcon from './image/search.svg';


class Header extends Component {

    render() {
      return (
        <header className="header">
          <div className="header1">
            <div className="burger-menu" id="burgerMenu">
              <span></span><span></span><span></span>
            </div>
            <div className="header-block1">
              <nav className="header-nav">
                <a href="../home/KR_Khutsaidze_web.html" className="dm-sansFont text-a">Home</a>
                <a href="../home/KR_Khutsaidze_web.html" className="dm-sansFont text-a">About</a>
                <a href="../home/KR_Khutsaidze_web.html" className="dm-sansFont text-a">Blog</a>
                <a href="../home/KR_Khutsaidze_web.html" className="dm-sansFont text-a">Contact</a>
                <a href="../home/KR_Khutsaidze_web.html" className="dm-sansFont text-a">Courses</a>
                <div className="search">
                <img src={searchIcon} alt="search" />
                  <p className="dm-sansFont text-search">Search</p>
                </div>
                <div className="shopping_cart">
                <img src={cartIcon} alt="shopping_cart" />
                <p className="dm-sansFont text-shopping-cart">Cart</p>
                </div>
                <div className="block-sign">
                  <p className="dm-sansFont text-sign">Sign Up</p>
                </div>
                <div className="block-sign">
                  <p className="dm-sansFont text-sign">Log In</p>
                </div>
              </nav>
            </div>
          </div>
        </header>
      );
    }
  }
  
  export default Header;