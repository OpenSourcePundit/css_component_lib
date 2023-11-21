import {Routes,Route} from 'react-router-dom'
import './App.css';



import {AvatarComponent} from './components/Avatar/Avatar'
import LandingPage from './pages/landingPage';
import InstallationPage from './pages/installationPage';
import NavBar from './pages/components/navbar';



function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/installation' element={<InstallationPage/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
