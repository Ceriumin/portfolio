import React from 'react';
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import * as Screens from './screens';
import { NavigationBar } from './components';
import './index.css';

function App() {

  return (
    <HashRouter>
      <div className='App'>
        <NavigationBar />
        <Routes>
          {/*Tab Bar Screems are defined here*/}
          <Route path="/about" element={<Screens.About />}/>
          <Route path="/projects" element={<Screens.Projects />}/>
          <Route path="/" element={<Screens.Home />}/>

          {/*All the project pages are defined here*/}
          <Route path="/projects/underglow" element={<Screens.Underglow />}/>
          <Route path="/projects/planable" element={<Screens.Planable />}/>
          <Route path="/projects/resurgence" element={<Screens.Resurgence />}/>
          <Route path="/projects/portfolio" element={<Screens.Portfolio />}/>
          <Route path="/projects/poppleton dog show" element={<Screens.Dogshow />}/>

          {/*All the product pages are defined here*/}
          <Route path="/projects/guitarpal" element={<Screens.GuitarPal />}/>

          {/*404 Page*/}
          <Route path="*" element={<Screens.Error/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
