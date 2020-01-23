import React from "react";
import "./Cart.scss";

class Cart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Orders: []
    };
  }

  handlePost = () => {
    const API_ADDRESS = "http://localhost:5001";
    let data = {
      "cartId": 3,
      "userId": 1
    }
  
    console.log('hej')
  
    fetch(`${API_ADDRESS}/order`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  };

  render(){
    
    return (
      <>
        <h1 className="hej">Hej hallå </h1>
        <button onClick={ this.handlePost }>Posta på mannen</button>
      </>
    );
  }
};

export default Cart;
