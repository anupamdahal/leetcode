import './App.css';
import {Route} from 'react-router-dom';
import Problem from './components/Problem';
import Problems from './components/Problems';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
        <Route path='/' exact>
          <Welcome />
        </Route>
        <Route path="/problems" exact>
            <Problems />
        </Route>
        <Route path="/problem/:id" exact>
            <Problem />
        </Route>
    </div>
  );
}

export default App;
