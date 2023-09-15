import { Navigate } from "react-router-dom";
import { MainApp } from './MainApp';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { ErrorPage } from './ErrorPage';

export const routesConfig = [
    {
        path: "/",
        element: <MainApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <Navigate to="/about" replace />,
            }
        ]
    }
];
