import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/public/Home';
import AuthProvider from './context/AuthProvider';
import RegisterRider from './pages/auth/RegisterRider';
import Login from './pages/auth/Login';
import RegisterLearner from './pages/auth/RegisterLearner';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register-rider' component={RegisterRider} />
            <Route exact path='/register-learner' component={RegisterLearner} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
