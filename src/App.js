import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/shared/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
var isAuth = false;
var isActivate = false;

function App() {


    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path='/'
                    element={<Home/>}/> {/* <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} /> */}
                <Route path='/authenticate'
                    element={
                        <GuestRoute><Authenticate/></GuestRoute>
                    }/>

                <Route path='/activate'
                    element={
                        <SemiPrivtaeRoute><Activate/></SemiPrivtaeRoute>
                    }/>

                <Route path='/rooms' 
                element={
                  <PrivtaeRoute>
                    <Rooms/>

                  </PrivtaeRoute>
                }
                />    
            </Routes>



        </BrowserRouter>
    );
}

const GuestRoute = ({children}) => {
    return isAuth ? <Navigate to="/rooms" replace/> : children;

}

const SemiPrivtaeRoute = ({children}) => {
    if (isAuth) {
        return(!isActivate) ? children : <Navigate to="/rooms"/>;
    } else {
        return <Navigate to="/authenticate"/>
    }

}

const PrivtaeRoute = ({children}) => {
  if (isAuth) {
      return(! isActivate ) ? <Navigate to="/activate"/> : children;
  } else {
      return <Navigate to="/authenticate"/>
  }

}

export default App;

