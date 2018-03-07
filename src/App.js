import React, { Component } from 'react';
import Log from './Comp/log.js'
import Welcome from './Comp/welcome.js'
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state = {user:''};
    }
    click(){
    this.setState({user:this.refs.name.value});
    }
  render(){
      return(<div className="container col-lg-6 col-lg-push-3">
      <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#log">Login</a></li>
          <li><a data-toggle="tab" href="#welcome">Welcome</a></li>
      </ul>
      <div className="tab-content">
          <div id="log" className="tab-pane">
            <div className='inbox'>
              <div className='form-group'>
              <label for="nama"> Nama Lengkap </label>
              <input class="form-control" type="text" id="nama"ref='name' placeholder='type your name here'/>
              </div>
              <button className='btn btn-primary' onClick={()=>{this.click()}}>Submit</button>
            </div>
          </div>
          <div id="welcome" className="tab-pane">
            <div className='inbox'>
              <Welcome id={this.state.user}/>
            </div>
          </div>
      </div>
      harus ganti ke welcome lalu balik ke login agar terlihat, tidak mengerti saya
  </div>
      )
  }
}

export default App;
