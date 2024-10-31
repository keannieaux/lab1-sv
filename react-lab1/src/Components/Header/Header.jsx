import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Include other imports as necessary
import './Header.css';
import cartIcon from './image/shopping_cart.svg';
import searchIcon from './image/search.svg';

function Header() {
    return (
        <header className="header">
            <div className="header1">
                <div className="burger-menu" id="burgerMenu">
                    <span></span><span></span><span></span>
                </div>
                <div className="header-block1">
                    <nav className="header-nav">
                        <Link to="/" className="dm-sansFont text-a">Home</Link>
                        <Link to="/about" className="dm-sansFont text-a">About</Link>
                        <Link to="/courses" className="dm-sansFont text-a">Courses</Link>
                        <Link to="/reviews" className="dm-sansFont text-a">Reviews</Link> {/* Add Reviews link */}
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

export default Header;
