import React, { Component } from "react";

class Store extends Component {
   constructor(props) {
      super(props);
      //   this.state = {
      //      Items: "rose",
      //      number: 1000,
      //   };
      this.getItem = this.getItem.bind(this);
   }
   getItem = () => {
      //   this.setState({ number: this.state.number - 1 });
      this.props.onChangeNumber();
   };
   render() {
      return (
         <div>
            <h1>Itemname: {this.props.itemName}</h1>
            <h2>Number of roses in stock: {this.props.number}</h2>
            <button onClick={this.getItem}>Add to cart</button>
         </div>
      );
   }
}

export default Store;
