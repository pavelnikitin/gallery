import React, { Component } from 'react'

export default class NavRight extends Component {
    render() {
        return (
            
                <span onClick= {this.props.onClick}  className = 'fa fa-arrow-right'></span>
            
        )
    }
}