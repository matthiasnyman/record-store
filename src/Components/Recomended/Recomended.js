import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Recommended.scss';

class Recomended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      Data: [],
    };
  }

  componentDidMount() {
    const API_ADDRESS = "http://localhost:5001";

    fetch(`${API_ADDRESS}/recommended`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          isLoaded: true,
          Data: result
        });
      })
      .catch(error => console.error(error));
  }

  render(){

    this.state.Data.forEach(item => console.log(item))
    const list = this.state.Data; 
    console.log(list)
    
    let array = [];
    
    if(list){

      for(let i=0; i < list.length; i++){
        let item = list[i];
        array.push(<ProductCard id={item.id} info={ item } />)
      };
    }
    return(
      <>
        <h3 class="recommeded-header">Recommended</h3>

        <div className="product-field">
          {array}

        </div>  
      </>
    )
  }
}

export default Recomended;