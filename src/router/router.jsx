import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../component/Login/Login";
import NotFound from "../component/NotFound/NotFound";
import Signup from "../component/SignUp/Signup";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Services from "../pages/Services/Services";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/services',
                    element:<Services/>
                },
                {
                    path:'/skills',
                    element:<Skills/>
                },
                {
                    path:'/projects',
                    element:<Projects/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
            ]
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'*',
            element:<NotFound/>
        },
    ]
)

export default router;

// const router = createBrowserRouter(
//     [
//         {
//             path:'/',
//             element:<App/>,
//             children:[
//                 {
//                     path:'/',
//                     element:<Home/>
//                 },
//                 {
//                     path:'/about',
//                     element:<About/>
//                 },
//                 {
//                     path:'/contact',
//                     element:<Contact/>
//                 },
               
//                 {
//                     path:'/skills',
//                     element:<Skills/>
//                 },
//                 {
//                     path:'/Project',
//                     element:<Projects/>
//                 },
                
//             ]
//         },
//         {
//             path:'/login',
//             element:<Login/>
//         },
//         {
//             path:'/signup',
//             element:<Signup/>
//         },
//         {
//             path:'*',
//             element:<NotFound/>
//         },
//     ]
// )

// export default router;