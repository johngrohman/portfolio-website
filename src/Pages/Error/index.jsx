import React from 'react';
import { useRouteError } from 'react-router-dom';
import './error.scss';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <i className='error'>{error.status} {error.statusText}</i>
            <p>
                {
                    error.status == 404?(
                        'This page does not exist'
                    ):(
                        'Unknown Error'
                    )
                }
            </p>
        </div>
    );
}