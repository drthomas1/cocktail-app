import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

import Home from './Home';
import Group from './Group';
import Cocktail from './Cocktail';
import Searched from './Searched';


export default function Routs() {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <Routes location = {location} key = {location.pathname} >
            <Route path="/" element={<Home />} />
            <Route path="/group/:type" element={<Group />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/cocktail/:name" element={<Cocktail />} />
        </Routes>
      </AnimatePresence>
  )
} 
