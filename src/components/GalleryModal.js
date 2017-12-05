import React, { Component } from 'react';
export default class GalleryModal extends Component {
    render() {
        if (this.props.isOpen === false) {
         return null;
        }
       
        return(
        <div className='modal-overlay'>
            {this.props.children} 
            <span className='modal-close fa fa-times-circle-o' onClick={this.props.onClick}></span>
            <div className='modal-body'>   
                <img className='img-responsive' alt = 'foto' src={this.props.src} />     
            </div>
        </div> 
        )
       }
}
