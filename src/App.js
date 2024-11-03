import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login'
import AllMatches from './components/AllMatches/AllMatches'
import Leagues from './components/Leagues/Leagues'
import MyBets from './components/MyBets/MyBets'
import OneMatch from './components/OneMatch/OneMatch'
import Register from './components/Register/Register'
import Standings from './components/Standings/Standings'
import Profile from './components/Profile/Profile'



import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navigation />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/AllMatches' element={<AllMatches />} />
          <Route path='/Leagues' element={<Leagues />} />
          <Route path='/MyBets' element={<MyBets />} />
          <Route path='/OneMatch' element={<OneMatch />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Standings' element={<Standings />} />
          <Route path='/Profile' element={<Profile />} />




        </Routes>
      </header>
    </div>
  );
}

export default App;
