import React from 'react';
import '../Form.scss';

class NewRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      album: "",
      image: "https://www.bengans.se/bilder/artiklar/liten/2572243_S.jpg",
      price: 0,
      sale: 0.0,
      id: 0,
      info: "skivan fins i lager"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('An essay was submitted: ' + this.state.artist);
    this.postRecord();
  }

  postRecord(){
    const { album, artist, image, price } = this.state;

    const API_ADDRESS = "http://localhost:5001";
    let data = {
      "album": `${album}`,
      "artist": `${artist}`,
      "image": `${image}`,
      "price": price
    }
  
    fetch(`${API_ADDRESS}/Record`, {
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
  
  render(){
    return(
      <>
        <h2>Create new record</h2>
        <form className="form" onSubmit={this.handleSubmit}>

          <label>Album</label>
          <input type="text" name="album" onChange={this.handleChange} />

          <label>Artist</label>
          <input type="text" name="artist" onChange={this.handleChange} />
          
          <label>image link</label>
          <input type="text" name="link" onChange={this.handleChange} />

          <label>Price</label>
          <input type="number" name="price" onChange={this.handleChange} />
{/* 
          <label>Sale</label>
          <input type="number" name="sale" onChange={this.handleChange} /> */}
{/* 
          <label>Description</label>
          <textarea value={this.state.info} onChange={this.handleChange} /> */}

          <input type="submit" value="Submit" />

        </form>
      </>
    )
  }
}

export default NewRecord;