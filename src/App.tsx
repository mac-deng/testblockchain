import React from 'react';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from  './Page/Layout';
import ThreeColumns from  './Page/threeColumns';
import Drops from  './Page/Drops';
import CreateAccount from  './Page/CreateAccount';

function App() {
  return (
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<ThreeColumns />}></Route>
          <Route path="drops" element={<Drops />}></Route>
          <Route path="createAccount" element={<CreateAccount />}></Route>
        </Route>
      </Routes>
  );
}

export default App;
