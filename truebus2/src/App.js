import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import AdminLog from './components/Admin/AdminLog'
import AddBus from './components/AddBus/AddBus';
import Package from './components/Package/Package'
import Service from './components/Service/Service'
import Pricing from './components/Pricing/Pricing';
import FilterForm from './components/FilterForm/FilterForm';
import Contact from './components/Contact/Contact'
import Review from './components/Review/Review'
import Blog from './components/Blog/Blog';
import Map from './components/Map/Map'

function App() {

  

// let loginForm = document.querySelector('.login-form')

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// let searchForm = document.querySelector('.search-form')

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// let themeBtn = document.querySelector('#theme-btn');

// themeBtn.onclick = () =>{
//     themeBtn.classList.toggle('fa-sun');

//     if(themeBtn.classList.contains('fa-sun')){
//         document.body.classList.add('active');
//     }else{
//         document.body.classList.remove('active');
//     }

// };

// var swiper = new Swiper(".review-slider", {
//     loop:true,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 5500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

  return (
    <Router>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/adminlog' element={<AdminLog/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="/addBus" element={<AddBus/>}/>
        <Route path="/package" element={<Package/>}/>
        <Route path='/filterform' element={<FilterForm/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='review' element={<Review/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='Map' element={<Map/>}/> 
        <Route path='blog' element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
