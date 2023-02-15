import React from "react"
import './app.css'
import ReactDOM from 'react-dom/client'
import Header from "./Src/components/header/header"
import Body from "./Src/components/Body/Body"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Contact from "./Src/components/contact/Contact"
import About from "./Src/components/about/About"
import Footer from "./Src/components/Footer/Footer"
import Error from "./Src/components/error/Error"
import RestaurantDetail from './Src/components/restaurantDetail/RestaurantDetail'

function AppLayOut() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut />,
        errorElement : <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },            
            {
                path: "/restaurant/:id",
                element: <RestaurantDetail />
            }
        ]
    }
])



let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter}/>)