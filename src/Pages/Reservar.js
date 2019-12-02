import React, { Component } from "react";
import axios from "axios";
import "../Styles/Reservaciones.css";
import "../Styles/global.css";
import Layout from "../Components/Layout";

class Home extends Component {
  state = {
    place: {
      availableSits: 0,
      cost: 0,
      countryName: "",
      cover: "",
      description: "",
      name: ""
    }
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:8000/api/places/${this.props.match.params.placeId}`
    );
    let place = data.data;
    this.setState({ place });
  }

  render() {
    
    return (
      <Layout>
        <nav>
          <h6 className="navBarTitle">Agéndalo</h6>
        </nav>
        <nav className="nav2">
          <h6 className="navBarSubtitle"> Reservar Destino </h6>
        </nav>

        <div className="Wrapper_Container">
          <img src={this.state.place.cover} alt="" className="Cover" />
          <div className="column">
            <h2 className="title">Viaja a {this.state.place.name}</h2>
            <p className="description"></p>
            {this.state.place.description}
            <p className="sitios">Sitios disponibles {this.state.place.availableSits}</p>
            <p className="costo">$ {this.state.place.cost} por persona</p>
            <button className="button">Reservar mi lugar</button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
