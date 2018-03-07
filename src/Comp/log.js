import React, { Component } from 'react';

class Log extends Component{
    constructor(){
    super();
    this.state = {user:'Hello Stranger'};
    }
    click(){
    this.setState({user:this.refs.name.value});
    }
    render(){
        return(
            <div>
                <form>
                    <div className='form-group'>
                        <label for="nama"> Nama Lengkap </label>
                        <input class="form-control" type="text" id="nama"ref='name' placeholder='type your name here'/>
                    </div>
                    <button className='btn btn-primary' onClick={()=>{this.click()}}>Submit</button>   
                </form>
            </div>
        )
    }
}
export default Log