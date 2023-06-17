import React from "react";
import './styles/style.css'

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./pages/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
