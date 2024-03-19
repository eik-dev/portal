import { useContext, lazy, Suspense } from 'react'
import { Context } from './ContextProvider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Skeletons from './components/common/skeletons.jsx'
import Login from './components/login/login.jsx'
import Register from './components/login/register.jsx'
import Recover from './components/login/recover.jsx'

//TODO: Implement conditional import based on the user role
export default function App() {
  let {User} = useContext(Context)

  let Home = lazy(()=>import(`./components/${User[0].role}/home.jsx`));


  let router = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<Skeletons/>}>
                 <Home/>
               </Suspense>
    },
    { path: '/login', element: <Login/> },
    { path: '/register', element: <Register/> },
    { path: '/recover-account', element: <Recover/> },
  ])
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}