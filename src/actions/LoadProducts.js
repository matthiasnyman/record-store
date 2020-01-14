const API_ADDRESS = 'https://localhost:5001';


const fetchProducts = () => {
  fetch(`${API_ADDRESS}/record`)

  .then(response => {
    if(response.status !== 200 ) {
      throw new Error('Usuccessful request to api') 
    }
    return response.json();
  })

  .then(json => console.log(json))

  .catch(error => console.log(error));

}

export default fetchProducts;
