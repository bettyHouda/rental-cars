import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import RentCar from '../pages/RentCar';
import CarDetails from '../pages/CarDetails';
import About from '../pages/About';
import Services from '../pages/Services';
import Condition from "../pages/Condition"
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to={'/home'} />} ></Route>
        {/* <Route index element={<Home />}></Route> */}
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/rent' element={<RentCar />} ></Route>
        <Route path='/service' element={<Services />} ></Route>
        <Route path='/cars/:slug' element={<CarDetails />} ></Route>
        <Route path='/condition' element={<Condition />}></Route>
      </Routes>
    </div>
  );
}
