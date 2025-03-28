import {
  Outlet, createBrowserRouter,
  RouterProvider, useNavigate
} from "react-router-dom";
import { useState } from "react";
import './styles/reset.css'
import './styles/global.css'
import './styles/main.css'
import './App.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer'
import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import About from './pages/About/About'

const Layout = () =>{
  return (
    <div className='layout-app'>
      <Header />
      <Outlet/>
      <Footer />
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
        {
          path: "about",
          element: <About />,
        },
        // {
        //   path: "book/:slug",
        //   element: <BookPage />,
        // }
      ],
    },
    // {
    //   path: "/about",
    //   element: <About />,
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
