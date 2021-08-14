import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import Team from './pages/Team'
import Features from './pages/Features'
import Food from './pages/Information/Food'
import Personal from './pages/Information/Personal'
import  Venn from './pages/Information/Venn'
import  Community from './pages/Information/Community'
import  AdoptInfo from './pages/Information/AdoptInfo'
import  About from './pages/About'
import  Adopt from './pages/Information/Adopt'
import  Location from './pages/Information/Location'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute"
function App() {
  return (
      <AuthProvider>
    <>
      <Router>
      <Navbar/>
        <Switch>
          <PrivateRoute path='/' exact component={HeroSection} />
          <Route path='/about' exact component={About} />
          <Route path='/team' exact component={Team} />
          <Route path='/features' exact component={Features} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/login' exact component={Login} />
          <Route path='/foodlog' exact component={Food} />
          <Route path='/personal' exact component={Personal} />
          <Route path='/venn' exact component={Venn} />
          <Route path='/community' exact component={Community} />
          <Route path='/adopt' exact component={Adopt} />
          <Route path='/location' exact component={Location} />
          <Route path='/adoptinfo' exact component={AdoptInfo} />
        </Switch>
      </Router>
      </>
      </AuthProvider>
  )
}

export default App;

