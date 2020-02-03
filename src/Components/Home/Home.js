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
      records: []
    };
  }

  componentDidMount() {
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
      })

      .catch(error => console.error(error));

  }

  render() {

    const { error, isLoaded, records } = this.state;

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
            <h4>Reconmended</h4>
          </div>

          <Carousel  records = { records }  />

          <div className="splitter">
            <h4>Sale</h4>
          </div>

          <Carousel records = { records }  />

          <div className="splitter">
            <h4>pop</h4>
          </div>

          <Carousel records = { records }  />


        </>
      );
    }
  };
}

export default Home;
