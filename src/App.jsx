import {
  Outlet, createBrowserRouter,
  RouterProvider, useNavigate
} from "react-router-dom";
import { useState } from "react";
import './styles/reset.css'
import './styles/global.css'
import './styles/main.css'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";


const Layout = () =>{
  return (
    <div className='layout-app'>
      <Header />
      <Outlet/>
      {/* <Footer /> */}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <NotFound />,

      children: [
        { index: true, element: <Home /> },
        // {
        //   path: "contact",
        //   element: <ContactPage />,
        // },
        // {
        //   path: "book/:slug",
        //   element: <BookPage />,
        // }
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
