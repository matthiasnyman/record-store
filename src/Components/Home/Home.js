import React from "react";
import "./Home.scss";
import Carousel from "../Carousel/Carousel";
import Loading from "../Loading/Loading";
import recordImg from "../../images/recordImg.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      records: [],
      sale: [],
      recommended: []
    };
  }

  componentDidMount() {    
    //Get all record
    const API_ADDRESS = "http://localhost:5001";
    fetch(`${API_ADDRESS}/record`)
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
    });

    fetch(`${API_ADDRESS}/recommended`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Usuccessful request to api");
      }
      return response.json();
    })
    .then(result => {
      this.setState({
        recommended: result
      });
    });

    fetch(`${API_ADDRESS}/sale`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Usuccessful request to api");
      }
      return response.json();
    })
    .then(result => {
      this.setState({
        sale: result
      });
    })
  }


  render() {
    const { error, isLoaded, records, recommended, sale } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <>
          <div>
            <img className="record-header" alt="Home" src={recordImg} />
          </div>

          <div className="splitter">
            <h4>Recommended</h4>
          </div>

          <Carousel records={recommended} />

          <div className="splitter">
            <h4>Sale</h4>
          </div>

          <Carousel records={sale} />

          <div className="splitter">
            <h4>pop</h4>
          </div>

          <Carousel records={records} />
        </>
      );
    }
  }
}

export default Home;
