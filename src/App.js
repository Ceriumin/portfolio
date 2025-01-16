import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './screens';
import { NavigationBar, Footer } from './components';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/about"/>
          <Route path="/contact"/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
