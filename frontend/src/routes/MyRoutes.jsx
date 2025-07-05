import {createBrowserRouter} from 'react-router-dom';
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";
import Layout from "../components/Layout";
import Home from '../components/Home';
import Products from '../components/Products';

let myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
            index:true,
            element:<RegisterPage/>
            },{
            path:"/login",
            element:<LoginPage/>
            },{
                path:'/home',
                element:<Home/>
            },{
                path:'/products',
                element:<Products/>
            }
        ]
    }
]
)

export default myRoutes