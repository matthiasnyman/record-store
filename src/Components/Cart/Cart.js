import React from "react";
import "./Cart.scss";
import CartCard from "./CartCard";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: [],
      id: 8,
      firstName: "",
      LastName: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.postRecord = this.postRecord.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    this.setState({
      Orders: JSON.parse(localStorage.getItem("myData"))
    });
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  clearCart() {
    localStorage.clear();
    this.setState({
      Orders: []
    });
  }

  postRecord() {
    const { Orders, user } = this.state;
    if (Orders) {
      const API_ADDRESS = "http://localhost:5001";

      let products = [];
      Orders.forEach(item => products.push({ recordId: item.id }));

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
        .then(() => {
          this.setState({ Orders: [] });
        })
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
      <div className="cart-view">
        <div className="cart-pruduct">
          <h1 className="cart-header">Produkter</h1>
          {array}
          <button onClick={this.clearCart}>Clear cart</button>
        </div>

        <div className="cart-checkout">
          <label className="form" onSubmit={this.handleSubmit}>
            <label>First name</label>
            <input type="text" name="firstName" onChange={this.handleChange} />

            <label>Last name</label>
            <input type="text" name="lasrName" onChange={this.handleChange} />

            <label>Email</label>
            <input type="text" name="email" onChange={this.handleChange} />

            <label>Id</label>
            <input type="numver" name="id" onChange={this.handleChange} />

            <input type="submit" value="Submit" onClick={this.postRecord} />
          </label>
          {price.reduce((a, b) => a + b, 0)}
        </div>
      </div>
    );
  }
}

export default Cart;
