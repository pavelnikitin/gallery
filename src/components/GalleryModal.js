import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        if (this.props.isOpen === false) {
         return null;
        }
       
        return(
        <div className='modal-overlay'>
            <span className='modal-close fa fa-times-circle-o' onClick={this.props.onClick}></span>
            <span className='modal-close fa fa-arrow-left' onClick={this.props.nextFoto}></span>
            <span className='modal-close fa fa-arrow-right' onClick={this.props.prevFoto}></span> 
            <div className='modal-body'>   
                <img className='img-responsive' src={this.props.src} />     
            </div>
        </div> 
        )
       }
}
