import React from "react";
import "./Cart.scss";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: [],
      total: 0
    };
  }
  componentDidMount() {
    this.setState({
      Orders: localStorage.getItem("myData")
    });
  }

  

  render() {
    console.log(this.state.Orders);
    return (
      <>
        <h1 className="hej">{this.state.Orders} </h1>
        <button onClick={this.handlePost}>Posta på mannen</button>
      </>
    );
  }
}

export default Cart;
