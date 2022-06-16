import React, { Component } from "react";

class Warning extends Component {
   constructor() {
      super();
      this.display = this.display.bind(this);
   }
   display = (name) => {
      alert(`Welcome to handling event ${name}`);
   };
   render() {
      return (
         <div>
            <button onClick={() => this.display("Co Yeu")}>Click Me</button>
         </div>
      );
   }
}

export default Warning;
