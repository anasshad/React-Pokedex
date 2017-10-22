import React from 'react';
import {Link} from 'react-router-dom';
import Pokedex from './Pokedex';

const Home = () => (
    <div class="jumbotron jumbotron-fluid text-center">
        <h1 class="display-3">Welcome to <br /> React Pokedex</h1>
        <p class="lead">A simple Web App implementing<br/>ReactJS, Redux, Redux Saga and React Router 4</p>
        <p class="lead">
            <Link to='/pokedex' component={Pokedex} className='btn btn-lg btn-danger'>Enter Pokedex</Link>
        </p>
    </div>
)

export default Home;