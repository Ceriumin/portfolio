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
          <Route path="/about" element={<Screens.About />}/>
          <Route path="/projects" element={<Screens.Projects />}/>
          <Route path="/" element={<Screens.Home />}/>
          <Route path="/project/:id" element={<Screens.Project />}/>
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
