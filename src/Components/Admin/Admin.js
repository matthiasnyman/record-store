import React from 'react';
import './Admin.scss';
import NewRecord from './RecordAdmin/NewRecord';
import NewUser from './UserAdmin/createUser';
 

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: []
    };
  }

  componentDidMount() {
    const API_ADDRESS = "http://localhost:5001";

    fetch(`${API_ADDRESS}/order`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          Orders: result
        });
      })

      .catch(error => console.error(error));

  }

  render() {
    const orders = this.state.Orders;
    console.log(orders);
    return( 
      <div  className="admin">
        <h1>Hej värden</h1>
        <NewRecord  />
        <NewUser  />
      </div>
    )
  }
}

export default Admin;

