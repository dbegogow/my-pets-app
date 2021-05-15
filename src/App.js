import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Header path="/dashboard" navigationButtonContent="Dashboard" />
          <Home />
        </Route>
        <Route path="/dashboard">
          <Header path="/home" navigationButtonContent="Home" />
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
