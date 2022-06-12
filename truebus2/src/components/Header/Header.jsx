import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            <header className="header">
                
                <a href=" " className="logo"> <i class="fas fa-paper-plane"></i> travel </a>

            <form action="" class="search-form">
                <input type="search" nameName="" placeholder="search here..." id="searchBox"/>
                <label for="searchBox" class="fas fa-search"></label>
            </form>

            <div class="icons">
                <div className="fas fa-search" id="search-btn"></div>
                <div className="fas fa-moon" id="theme-btn"></div>
                <div className="fas fa-user" id="login-btn"></div>
                <div className="fas fa-bars" id="menu-btn"></div>
            </div>

            <nav class="navbar">
                <a href="#home">home</a>
                <a href="#packages">packages</a>
                <a href="#services">services</a>
                <a href="#pricing">pricing</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blogs">blogs</a>
            </nav>

            <Link to="adminlog" className="btn btn-primary">Admin</Link>

            <form action="" className="login-form">

                <div className="inputBox">
                    <span>username</span>
                    <input type="text" placeholder="enter your name"/>
                </div>

                <div className="inputBox">
                    <span>password</span>
                    <input type="password" placeholder="enter your password"/>
                </div>

                <div className="remember">
                    <input type="checkbox" name="" id="login-remember"/>
                    <label for="login-remember">remember me</label>
                </div>

                <input type="submit" className="btn" value="login"/>

                

            </form>

            </header>

        </div>
    );
}

export default Header;
