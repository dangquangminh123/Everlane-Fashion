import {
  Outlet, createBrowserRouter,
  RouterProvider,Navigate
} from "react-router-dom";
import { useState, useEffect } from "react";
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
import About from './pages/About/About';
import Stores from './pages/Stores/Stores';
import Everworld from './pages/everWorld/everWorld';
import DetailEverword from './pages/DetailBlog/detailBlog';
import PageProduct from "./pages/listProduct/listProduct";
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
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    // Chỉ redirect nếu: có dấu "/" ở cuối && không phải route "/"
    if (currentPath !== "/" && currentPath.endsWith("/")) {
      const newPath = currentPath.slice(0, -1);
      window.location.replace(newPath);
    } 
  }, []);

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
          children: [
            { index: true, element: <About /> }, // /about
            { path: "stores", element: <Stores /> },   // /about/stores
            // { path: "factories", element: <Factories /> } // /about/factories
          ],
        },
        {
          path: "everworld",
          element: <Everworld />,
        },
        {
          path: "detail_blog",
          element: <DetailEverword />, 
        },
        {
          path: "list_product",
          element: <PageProduct />,
        }
        
      ],
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
