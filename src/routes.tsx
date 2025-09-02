import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/layout/Layout";
import { type RouteObject } from "react-router-dom";



export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'about', element: <AboutPage/>},
            {path: '*', element: <h1>404 Not Found</h1>},
        ]
    }
]