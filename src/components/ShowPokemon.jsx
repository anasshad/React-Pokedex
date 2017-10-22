import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ShowPokemon extends Component {

  render() {
    return (
      <div className='row text-center'  >
        <div className='col-3 card' >
          <img src={this.props.sprite} alt="Pokemon Sprite"  />
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card-header text-capitalize font-weight-bold' >{this.props.name}</div>
            <div className='card-block text-justify' >{this.props.description}</div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
    const name = state.query,
    sprite = state.sprite,
    description = state.description;

    return {
        name,
        sprite,
        description
    }
}

export default withRouter(connect(mapStateToProps, null)(ShowPokemon));