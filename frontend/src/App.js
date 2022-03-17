import './App.css';
import {Route} from 'react-router-dom';
import Problems from './components/Problems';
import Welcome from './components/Welcome';
import Problem from './components/SingleProblem/Problem';

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
