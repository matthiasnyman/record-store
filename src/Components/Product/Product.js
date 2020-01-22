import React from "react";
import "./Product.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      isLoaded: true,
      info: []
    };
  }

  componentDidMount() {
    const API_ADDRESS = "http://localhost:5001";
    let Id = this.props.id;
    

    fetch(`${API_ADDRESS}/record/${Id}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          isLoaded: true,
          info: result
        });
      })

      .catch(error => console.error(error));
  }

  render() {

    const { artist, album, image, price } = this.state.info;
    
    return (
      <>
        <div>
          <img className="Product-image" alt="record" src={ image } />

          <h1 className="describing-header">{ album }</h1>
          <h2 className="describing-header">{ artist }</h2>
          <h2 className="describing-header">{ price } kr</h2>
          <div className="addToCart">Add to Cart</div>
        </div>

        <h3 className="describing-header">FAKTA</h3>
        <p className="describing-fild">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio
          libero, convallis eu mauris et, mollis vehicula dolor. Nullam dictum
          bibendum leo id luctus. Nunc porttitor semper tellus in congue.
          Pellentesque imperdiet diam vitae eleifend tincidunt. Duis a fermentum
          quam. Vivamus a egestas felis, ac aliquet nunc. Aenean ullamcorpe
        </p>

        <h3 className="describing-header">Låtar</h3>

        <ul className="song-list">
          <li>hej</li>
          <li>hur</li>
          <li>Är</li>
          <li>det</li>
          <li>med</li>
          <li>dig</li>
          <li>är</li>
          <li>du</li>
        </ul>
      </>
    );
  }
}

export default Product;
