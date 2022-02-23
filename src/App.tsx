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
          <Route path="threeColumns" element={<ThreeColumns />}></Route>
          <Route path="drops" element={<Drops />}></Route>
          <Route path="createAccount" element={<CreateAccount />}></Route>


          {/*<Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />*/}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
         {/* <Route path="*" element={<NoMatch />} />*/}
        </Route>
      </Routes>
  );
}

export default App;
