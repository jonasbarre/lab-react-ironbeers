import Header from './Header';
import React, { Component } from 'react'

export default class NewBeer extends Component {

    state = {
        newName: '',
        newTagLine: '',
        newContributor: ''
    }

    addNew = (e) => {
        e.preventDefault();
        console.log('addNew fired')
    }

    handleInput = (e) => {
        console.log('handleInput fired')
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <Header />

                <form onSubmit={this.addNew}>
                    <label>Name</label>
                    <input
                        value={this.state.newName}
                        name="newName"
                        onChange={this.handleInput}
                    />

                    <label>Tagline</label>
                    <input
                        value={this.state.newTagLine}
                        name="newTagLine"
                        onChange={this.handleInput}
                    />

                    <label>Contributor</label>
                    <input
                        value={this.state.newContributor}
                        name="newContributor"
                        onChange={this.handleInput}
                    />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}