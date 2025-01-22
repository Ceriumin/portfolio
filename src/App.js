import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Screens from './screens';
import { NavigationBar, Footer } from './components';
import './index.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <Routes>
          <Route path="/about" Component={Screens.About}/>
          <Route path="/contact"/>
          <Route path="/" Component={Screens.Home}/>
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
