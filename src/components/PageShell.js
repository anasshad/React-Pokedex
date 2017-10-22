import React from 'react';
import react from '../images/react.svg';
import pokeball  from '../images/pokeball.png';

const PageShell = Page => {
    return props => 
    <div className='page'>
        <div className='header'>
            <img src={react} className='float-left' alt='react' style={{height: 150 , width: 150}} />
            <h1 >React Pokedex</h1>
            <img src={pokeball} className='float-right' alt='pokeball' style={{height: 150 , width: 150}} /> 
        </div>
        <Page {...props} />
    </div>
};

export default PageShell;