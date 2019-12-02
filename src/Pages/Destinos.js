import React, { Component } from "react";
import axios from "axios";
import CardsGrid from "../Components/CardsGrid";
import "../Styles/Home.css";
import "../Styles/global.css";
import Layout from "../Components/Layout";

class Home extends Component {
  state = {
    places: []
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:8000/api/places");
    let places = data.data;
    this.setState({ places });
  }

  render() {
    return (
      <Layout>
        <nav>
          <h6 className="navBarTitle">Agéndalo</h6>
        </nav>
        <nav className="nav2">
          <h6 className="navBarSubtitle"> Destinos </h6>
        </nav>

        <div className="hero">
          <div className="mask"></div>
          <img
            className="imagenAbs"
            src="https://inversian.com/wp-content/uploads/2017/08/Estudiar-turismo-1.jpg"
            alt="imagen"
          />
          <div className="heroTitleContainer">
            <h2 className="heroTitleP">Agéndalo</h2>
          </div>
        </div>

        <div className="NewPlaces">
          <h3 className="Title">Elige entre cientos de destinos!</h3>
          <CardsGrid places={this.state.places}></CardsGrid>
        </div>
      </Layout>
    );
  }
}

export default Home;
