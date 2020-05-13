import React, { Component } from 'react'
import Header from './Header';

export default class ShowBeer extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    console.log('ShowBeer.js - component did mount');
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({ beer: result })
      })
      .catch(e => console.log(e))
    }
  render() {
    return (
      <React.Fragment>
      <Header />
      <div>
                    <h1>{this.state.beer.name}</h1>
                    <img src={this.state.beer.image_url} alt={this.state.beer.name} className='beerimg' />
                    <h2>{this.state.beer.tagline}</h2>
                    <h3>First brewed {this.state.beer.first_brewed}</h3>
                    <h4>Attenuation level {this.state.beer.attenuation_level}</h4>
                    <p>{this.state.beer.description}</p>
                    <p>{this.state.beer.contributed_by}</p>
      </div>
      </ React.Fragment>
    )
  }
}
