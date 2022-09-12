import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Project from './pages/Project/Project'

// Components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
