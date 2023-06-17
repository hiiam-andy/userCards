import React from 'react'
import { Navigate, Route, Routes, Switch } from "react-router-dom";

import About from "./About";
import Users from "./Users";
import Error from "./Error";


export default function AppRouter() {
  return (
    <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path='*' element={<Navigate to='/error' replace/>}/>
      </Routes>
  )
}
