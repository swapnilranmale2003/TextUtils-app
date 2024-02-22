//props in functional component
// import React from "react";
// export default function Hello(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Welcome {props.name}</h1>
//       {props.children}
//     </div>
//   );
// }

//props in class component
import React, { Component } from 'react'

export class Hello extends Component {
  render() {
    return (
      <div>
       <h1>Good bye {this.props.name}</h1> 
      </div>
    )
  }
}

export default Hello
