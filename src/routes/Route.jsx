import React from 'react'
import { About, Cocktail, Landing, Newsletter, Error } from '../pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout'
import {loader as landingLoader} from '../pages/Landing'
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement:<Error/>,
        children: [
            {
                index: true,
                element: <Landing />,
                laoder:landingLoader
            },

            {
                path: 'about',
                element: <About />,
                
                children: [
                    {
                        index: true,
                        element: <h1>Header</h1>
                    },
                    {
                        path: "person",
                        element: <h1>PErson</h1>
                    }
                ]
            },

            {
                path: "cocktail",
                element: <Cocktail />

            },

            {
                path: 'newsletter',
                element: <Newsletter />
            },

            {
                path: 'error',
                element: <Error />
            }
        ]
    }
])
const route = () => {
    return <RouterProvider router={router} />
}

export default route