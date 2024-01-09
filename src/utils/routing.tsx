import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/RootLayout'
import React from 'react';
import Start from '../pages/Start'
import Research from '../pages/Research'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Start />,
            },
            {
                path:"research",
                element: <Research />
            },
        ]

    }
])