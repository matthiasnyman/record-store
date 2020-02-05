import React from 'react';
import './user.scss';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    const API_ADDRESS = "http://localhost:5001";

    fetch(`${API_ADDRESS}/user`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          user: result
        });
      })

      .catch(error => console.error(error));

  }

  render() {
    console.log(this.state.user);
    let fild = [];
    this.state.user.forEach(element => {
      fild.push(<li>{element.id}: {element.firstName}</li>)
    });

    return(
      <div className="User">
        <h1>User</h1>
        <ul>
          { fild }

        </ul>
      </div>
    ) 
  }
}

export default User;