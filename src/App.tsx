import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings/Settings';
import Statistics from './pages/Statistics/Statistics';

import Sidebar from './containers/Sidebar';

import './assets/styles/app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/statistics" component={Statistics} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
