import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrememnt(){
        this.setState({

            count:this.state.count+1

        },()=>{
            console.log("Callback value ",this.state.count)
        })
            console.log(this.state.count)

      
    }
    decrememnt(){
        this.setState({

            count:this.state.count-1

        })
            console.log(this.state.count)

      
    }
    
  render() {
    return (
      <div>
        count - {this.state.count} <br />
        <button onClick={()=>this.incrememnt()}>Increment</button>
        <button onClick={()=>this.decrememnt()}>Decrememnt</button>

      </div>
    )
  }
}

export default Counter
