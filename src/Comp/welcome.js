import React, { Component } from 'react';
import './../Style/welcome.css'

class Log extends Component{
    render(){
        return(
            <div className='output'>
                <h1>Hello {this.props.id}</h1>
            </div>
        )
    }
}
export default Log