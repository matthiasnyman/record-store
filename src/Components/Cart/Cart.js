import React from "react";
import "./Cart.scss";
import CartCard from "./CartCard";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: [],
      user: 8
    };
    this.postRecord = this.postRecord.bind(this);
    this.clearCart = this.clearCart.bind(this);

  }

  componentDidMount() {
    this.setState({
      Orders: JSON.parse(localStorage.getItem("myData"))
    });
  }

  clearCart() {
    localStorage.clear();
    this.setState({
      Orders: []
    })
  }

  postRecord() {
    const { Orders, user } = this.state;
    if (Orders) {

      const API_ADDRESS = "http://localhost:5001";

      let products = []
      Orders.forEach( item => products.push({recordId: item.id}) )

      let data = {
        cart: products,
        userId: user
      };

      fetch(`${API_ADDRESS}/order`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(() => {
          localStorage.clear("myData");
        })
        .then(() => {  this.setState({Orders: []})   })
        .catch(err => err);
    }
  }

  render() {
    const list = this.state.Orders;
    let array = [];
    let price = [];
    let i = 0;

    if (list) {
      list.forEach(item => {
        i++;
        price.push(item.price);
        array.push(<CartCard key={i} data={item} />);
      });
    }

    return (
      <>
        <div className="cart-view">
          <div className="cart-pruduct">
            <h1 className="cart-header">Produkter</h1>
            {array}
          </div>
          <div className="cart-checkout">
            <input />

            {price.reduce((a, b) => a + b, 0)}
            <button onClick={this.postRecord}>Köp</button>
          </div>
        </div>
        <button  onClick={this.clearCart}>Clear cart</button>
      </>
    );
  }
}

export default Cart;
