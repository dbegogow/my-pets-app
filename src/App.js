import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
