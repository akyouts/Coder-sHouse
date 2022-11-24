
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/shared/Navigation';

import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Card from './components/shared/Cards/Card';
import { Loader } from './components/shared/Loader/Loader';
import { Room } from './pages/Room/Room';

var isAuth = false;
var isActivate = false;

function App() {
  const { Loading } = useLoadingWithRefresh();
  

  

    return (
        Loading? <Loader message='Loding Please Wait'/>: 
        (<BrowserRouter>
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
                <Route path='/room/:id' 
                element={
                  <PrivtaeRoute>
                    <Room/>

                  </PrivtaeRoute>
                }
                />    
            </Routes>



        </BrowserRouter>)
    );
}

const GuestRoute = ({children}) => {
    const {isAuth , user} = useSelector((state)=> state.auth)
    return isAuth ? <Navigate to="/rooms" replace/> : children;

}

const SemiPrivtaeRoute = ({children}) => {
    const {isAuth , user} = useSelector((state)=> state.auth)
    if (isAuth) {
        return(!isActivate) ? children : <Navigate to="/rooms"/>;
    } else {
        return <Navigate to="/authenticate"/>
    }

}

const PrivtaeRoute = ({children}) => {
    const {isAuth , user} = useSelector((state)=> state.auth)
  if (isAuth) {
      return(! user.activated ) ? <Navigate to="/activate"/> : children;
  } else {
      return <Navigate to="/authenticate"/>
  }

}

export default App;

