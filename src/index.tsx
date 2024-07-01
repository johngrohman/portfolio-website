import React from 'react';
import ReactDOM from 'react-dom/client';
// import ErrorBoundary from './Components/ErrorBoundary';

import Projects from './pages/Projects';
import App from './app';
import './index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/projects',
        element: <Projects />
    },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <RouterProvider router={router} />
    );
} else {
    console.log('Element with id root not found in the document');
}
