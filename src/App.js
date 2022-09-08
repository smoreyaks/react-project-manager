import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Project from './pages/Project/Project'

function App() {
  return (

    <div className="App">
      <BrowserRouter className='container'>
          <Switch>
            <Route exact path="/" >
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
