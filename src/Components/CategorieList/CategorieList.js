import React from 'react';
import './CategorieList.scss';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';


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
    const { error, isLoaded }= this.state;
    
    let array = [];
    
    if(list){

      for(let i=0; i < list.length; i++){
        let item = list[i];
        // console.log('item', item)
        array.push(<ProductCard key={item.id} info = { item.record } />)
      };
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
    return(
      <>
        <div className="product-field">
          { array }
        </div>
      </>
    )
    }
  }

}

export default CategorieList;