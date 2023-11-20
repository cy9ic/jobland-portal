import Dashboard from './components/job-page/dashboard/dashboard';
import './App.css';
import Home from './components/homepage/home';
import LoginPage from './components/login_signup/login_signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
  <>

  <Router>

<Routes>

  <Route path='/' element={
  <>
  <Home/>
  
  </>}>
  </Route>

  <Route path='/register-signin' element={<>
  
  <LoginPage/>
  </>}></Route>

  <Route path='/jobs' element={<>
    <Dashboard/>
  </>}>
    
  </Route>
</Routes>
  </Router>
  
  </>
  );
}

export default App;