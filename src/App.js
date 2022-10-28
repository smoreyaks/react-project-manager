// React
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// Hooks
import { useAuthContext } from './hooks/useAuthContext'

// Style
import './App.css'

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
  const { user, authIsReady } = useAuthContext()

  return (

    <div className="App">
      {authIsReady && (
        
        <BrowserRouter>
          { user && <Sidebar /> }
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path="/" >
                { !user && <Redirect to="/login" /> }
                { user && <Dashboard /> }
              </Route>
              <Route path="/create">
                { !user && <Redirect to="/login" /> }
                { user && <Create /> }
              </Route>
              <Route path="/projects/:id">
                { !user && <Redirect to="/login" /> }
                { user && <Project /> }
              </Route>
              <Route path="/login">
                { user && <Redirect to="/" />}
                { !user && <Login /> } 
              </Route>
              <Route path="/signup">
                { user && <Redirect to="/" />}
                { !user && <Signup /> }
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
