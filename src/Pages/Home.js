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
          <h6 className="navBarSubtitle"> Home </h6>
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
          <h3 className="Title">Nuevos lugares por descubir!</h3>
          <CardsGrid places={this.state.places.slice(0, 4)}></CardsGrid>
        </div>
        <div className="Welcome">
          <div>
            <h3 className="Title">No esperes mas</h3>
            <img
              src="https://i.etsystatic.com/10919371/r/il/b7fc54/1567098053/il_570xN.1567098053_h1sa.jpg"
              alt=""
              className="plane"
            />
          </div>
          <p className="welcomeMessage">
            Bienvenido a Agéndalo, un sitio donde puedes visualizar los países
            más visitados en todo el mundo. Registrate y obten acceso a todos
            los hoteles en los lugares mas exclusivos. Agéndalo: tu habitación
            perfecta a sólo un click de distancia.
          </p>
        </div>
        <div className="NewPlaces">
          <h3 className="Title">Lo mas visitado</h3>
          <CardsGrid places={this.state.places.slice(4, 8)}></CardsGrid>
        </div>
        <div className="callToAction">
          <h3 className="TitleCall">Reserva Ya</h3>
        </div>
      </Layout>
    );
  }
}

export default Home;
