import React, {Component} from 'react';
import {connect} from 'react-redux';
import {makeApiCall} from '../actions';
import {withRouter} from 'react-router-dom';
import Loader from 'react-loader-advanced';
import ShowPokemon from './ShowPokemon';

class Pokedex extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput : '',
        }
    }

    handleGo(){
        const userInput = this.state.userInput
        this.props.makeApiCall(userInput.toLowerCase());   
    }

    render(){
        return (
            <Loader show={this.props.root.show_loader} message='loading'>
                <div className='card text-center row'>
                    <div className='card-title pt-3'>Search For Your Favorite Pokemon</div>
                    <div className = 'card-block' >
                        <div className='input-group'>
                            <input className='form-control' onKeyUp={event => {if(event.key === 'Enter'){this.handleGo()}}} onChange={event => this.setState({userInput:event.target.value})}/>
                            <span className='input-group-btn'><button className='btn btn-danger' onClick={()=>this.handleGo()}>Go!</button></span>
                        </div>
                        {this.props.root.error ? <div className='text-danger'><em>No such Pokemon exists!!! May be you spelled it wrong.</em></div> : null}
                    </div>
                </div>
                {this.props.root.sprite ? <ShowPokemon /> : null}                       
            </Loader>
            
        )
    }
}

function mapStateToProps(root){
    return {
        root
    }
}

export default withRouter(connect(mapStateToProps,{makeApiCall})(Pokedex));