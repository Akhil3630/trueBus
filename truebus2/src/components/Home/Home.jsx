import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import FilterForm from '../FilterForm/FilterForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Land from '../Land/Land';
import Package from '../Package/Package';
import Pricing from '../Pricing/Pricing';
import Review from '../Review/Review';
import Service from '../Service/Service';

import UserBus from '../UserBus/UserBus';
const Home = () => {
    return (
        <div>
           <Header/>
           <Land/>
           <FilterForm/>
           <UserBus/>
           <Package/>
           <Service/>
           <Pricing/>
           <Review/>
           <Contact/>
           <Blog/>
           <Footer/>
        </div>
    );
}

export default Home;
