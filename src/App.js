import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Screens from './screens';
import { NavigationBar } from './components';
import './index.css';

function App() {
  return (
    <Router>
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

          {/*404 Page*/}
          <Route path="*" element={<Screens.Error/>}/>
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
