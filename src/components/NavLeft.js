import React, { Component } from 'react'

export default class NavLeft extends Component {
    render() {
        return (
            
                <span onClick= {this.props.onClick} className = 'fa fa-arrow-left'></span>
            
        )
    }
}
