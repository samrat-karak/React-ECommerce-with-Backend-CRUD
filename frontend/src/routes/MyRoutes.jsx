import {createBrowserRouter} from 'react-router-dom';
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";
import Layout from "../components/Layout";
import Home from '../components/Home';
import Products from '../components/Products';
import UserPrivate from './UserPrivate';

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
                element:<UserPrivate>
                    <Home/>
                </UserPrivate>
            },{
                path:'/products',
                element:<UserPrivate>
                    <Products/>
                </UserPrivate>
            }
        ]
    },
    {
        path:"*",
        element:<h1>Not Found</h1>
        }
]
)

export default myRoutes