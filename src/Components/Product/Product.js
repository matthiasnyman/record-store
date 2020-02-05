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

    const { artist, album, image, price, info, sale } = this.state.info;
    console.log(sale);
    const addToCart = () => {
      //variabler
      const newProducts = this.state.info
      let data = JSON.parse(localStorage.getItem('myData'));
      let oldProducts = data ? JSON.parse(localStorage.getItem('myData')) : [];
      
      oldProducts.push(newProducts);

      //add and format data
      localStorage.setItem('myData', JSON.stringify(oldProducts));
    }

    return (
      <div className="Product">
        <img className="Product-image" alt="record" src={ image } />

        <div className="Headers">
          <h1 className="describing-header">{ album }</h1>
          <h2 className="describing-header">{ artist }</h2>
        </div>

        <div className="pay">
          {sale == 0.0 ? <h2 className="describing-header">{ price } kr</h2>:
            <h2 className="describing-header sale">{ price * (1 - sale) } kr <small>ordinarie pris: {price}</small></h2>
          }
          <div onClick= { addToCart } className="addToCart">Add to Cart</div>
        </div>

        <div className="info-container">
          <h3 className="describing-header">FAKTA</h3>
          <p className="describing-fild">
            { info }
          </p>
        </div>
        <div className="song-list-container">
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
        </div>
      </div>
    );
  }
}

export default Product;
