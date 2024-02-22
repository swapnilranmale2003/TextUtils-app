import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
      super()
    
      this.state = {
         message : "Welcome "
      }
     
    }
     clickSubscribe(){
        this.setState({
            message : "bye"
        })
     }
    
  render() {
   
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.clickSubscribe()} >Subscribe</button>
      </div>
    )
  }
}

export default Message
