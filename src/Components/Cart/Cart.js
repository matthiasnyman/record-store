import React from "react";
import "./Cart.scss";
import CartCard from "./CartCard";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: []
    };
  }
  componentDidMount() {
    this.setState({
      Orders: JSON.parse(localStorage.getItem("myData"))
    });
  }
  
  render() {
    const list = this.state.Orders;
    let array = []
    let price = []

    let i = 0;

    list.forEach(item => {
      i++;
      price.push(item.price);
      array.push(<CartCard key={i} data={ item } />)
    });


    return (
      <div className="cart-view">
        <div className="cart-pruduct">
          { array }
        </div>
        <div className="cart-checkout">
          {price.reduce((a,b) => a + b, 0)}
        <button onClick={this.handlePost}>Köp</button>
        </div>
      </div>
    );
  }
}

export default Cart;
