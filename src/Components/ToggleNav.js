import React from 'react';

function ToggleNav() {
    return (
        <div className='ToggleNav'>
            <button onClick={this_function()}> &lt; </button>
        </div>
    )
}

function this_function() {
    console.log("hi")
}

export default ToggleNav;