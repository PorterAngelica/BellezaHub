import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom"
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'


function App() {

  const Layout = () =>{
    return (
      <div>
        
        <NavBar />
        <div style={{display:'flex'}}> 
        <LeftBar/>
        <div style={{flex:6}}>
        <Outlet />
        </div>
        <RightBar />
        </div>
      </div>
    );

  };


  return (
    <>
    <BrowserRouter>
    <div className="App">
    <Routes>

      <Route path='/register'  element={<Register/>}/>
      <Route path='/login'  element={<Login/>}/>

      <Route path='/home'  element={<Layout/> }> 
          <Route path='/home' element={<Home/>} />
          <Route path='/home/profile/:id' element={< Profile/>} />
      </Route>

    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App
