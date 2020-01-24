import React from "react";
import "../Form.scss";

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstName: "",
      lastName: "",
      email: ""
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postRecord();

    this.setState = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  postRecord() {
    const { firstName, lastName, email } = this.state;

    const API_ADDRESS = "http://localhost:5001";
    let data = {
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      email: `${email}`
    };

    fetch(`${API_ADDRESS}/User`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => err);
  }

  render() {
    return (
      <>
        <h2>Create new User</h2>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>First name</label>
          <input type="text" name="firstName" onChange={this.handleChange} />

          <label>Last name</label>
          <input type="text" name="lasrName" onChange={this.handleChange} />

          <label>email</label>
          <input type="text" name="email" onChange={this.handleChange} />

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default NewUser;
