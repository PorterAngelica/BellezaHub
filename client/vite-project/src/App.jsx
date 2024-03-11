import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {BrowserRouter, Routes, Route, Outlet, Navigate, useNavigate, createBrowserRouter, RouterProvider} from "react-router-dom"
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './style.scss'
import { useContext, useState } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/AuthContext'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



// function App() {
//   const { currentUser } = useContext(AuthContext);

//   const { darkMode } = useContext(DarkModeContext);

//   const queryClient = new QueryClient();

//   const Layout = () => {
//     return (
//       <QueryClientProvider client={queryClient}>
//         <div className={`theme-${darkMode ? "dark" : "light"}`}>
//           <NavBar />
//           <div style={{ display: "flex" }}>
//             <LeftBar />
//             <div style={{ flex: 6 }}>
//               <Outlet />
//             </div>
//             <RightBar />
//           </div>
//         </div>
//       </QueryClientProvider>
//     );
//   };

//   const ProtectedRoute = ({ children }) => {
//     if (!currentUser) {
//       return <Navigate to="/login" />;
//     }

//     return children;
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <ProtectedRoute>
//           <Layout />
//         </ProtectedRoute>
//       ),
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/profile/:id",
//           element: <Profile />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/register",
//       element: <Register />,
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

function App() {

    const queryClient = new QueryClient();
  // const currentUser = false;
  // const Navigate = useNavigate()
  const currentUser = null;

  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode)

  const Layout = () =>{
    return (
      <QueryClientProvider client={queryClient}>
      <div className={` theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{display:'flex'}}> 
        <LeftBar/>
        <div style={{flex:6}}>
        <Outlet />
        </div>
        <RightBar />
        </div>
      </div>
      </QueryClientProvider>
    );

  };

  // const ProtectedRoute = ({children}) => {
  //   if(!currentUser){
  //     return <Navigate to="/login" />
  //   }else{
  //     return children
  //   }
  // }


  return (
    <>
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/login'  element={<Login />}/>

      <Route path="/home" element={ <Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/home/profile/:id" element={<Profile />} />
          </Route>

    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App
