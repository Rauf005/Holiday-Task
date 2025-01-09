import About from "../pages/User/About/About";
import Basket from "../pages/User/Basket/Basket";
import Blog from "../pages/User/Blog/Blog";
import Contact from "../pages/User/Contact/Contact";
import Favorites from "../pages/User/Favorites/Favorites";
import Home from "../pages/User/Home/Home";
import ProductDetail from "../pages/User/ProductDetail/ProductDetail";
import Service from "../pages/User/Service/Service";
import Shop from "../pages/User/Shop/Shop";
import UserRoot from "../pages/UserRoot";
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Detail from "../pages/Admin/Detail/Detail";
import Edit from "../pages/Admin/Edit/Edit";
import Products from "../pages/Admin/Products/Products";
import AdminRoot from "../pages/Admin/AdminRoot";

const Routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "basket",
        element: <Basket />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "favorites",
        element: <Favorites />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "shop/:id",
        element: <ProductDetail />
      }
    ]
  },
  {
    path:"/admin",
    element:<AdminRoot/>,
    children:[
   {
    path:"",
    element:<Dashboard/>
   },
   {
    path:"addproduct",
    element:<AddProduct/>
   },
   {
    path:"detail/:id",
    element:<Detail/>
   },
   {
    path:"edit/:id",
    element:<Edit/>
   },
   {
    path:"products",
    element:<Products/>
   }
]}
];

export default Routes;
