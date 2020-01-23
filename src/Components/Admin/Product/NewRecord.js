// import React from 'react';

// class NewRecord extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       artist: "",
//       album: "",
//       image: "",
//       price: 0,
//       sale: 0.0,
//       info: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange (evt) {
//     // check it out: we get the evt.target.name (which will be either "email" or "password")
//     // and use it to target the key on our `state` object with the same name, using bracket syntax
//     this.setState({ [evt.target.name]: evt.target.value });
//   }

//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
  
//   render(){
//     return(
//       <Form onSubmit={this.handleSubmit}>

//         <label>Album</label>
//         <input type="text" name="album" />

//         <label>Artist</label>
//         <input type="text" name="artist" />
        
//         <label>image link</label>
//         <input type="text" name="link" />

//         <label>Price</label>
//         <input type="number" name="price" />

//         <label>Sale</label>
//         <input type="number" name="sale" />

//         <label>SDescription</label>
//         <textarea value={this.state.info} onChange={this.handleChange} />

//         //send
//         <input type="submit" value="Submit" />

//       </Form>
//     )Gul = Backend
//   }
// }

// export default NewRecord;