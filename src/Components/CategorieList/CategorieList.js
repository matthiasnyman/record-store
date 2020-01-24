import React from 'react';
import './CategorieList.scss';
import ProductCard from '../ProductCard/ProductCard';


class CategorieList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      records: []
    };
  }

  componentDidMount() {
    const API_ADDRESS = "http://localhost:5001";
    let Id = this.props.id;
    
    fetch(`${API_ADDRESS}/Genre/${Id}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          isLoaded: true,
          records: result
        });
      })

      .catch(error => console.error(error));

  }

  render(){
    const list = this.state.records.productsInGenre; 
    const array = [];
    
    for(let item in list){
      
      let product = list[item];

      let item = <ProductCard key={product.id} info = { product } />;
      array.push(item);
    }
    
    
    return(
      <>
        <h1>Hello there!</h1>

        <div className="product-field">
          { array }
        </div>
      </>
    )
  }


}

export default CategorieList;