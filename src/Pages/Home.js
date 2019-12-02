import React, { Component } from "react";
import axios from "axios";
import CardsGrid from "./CardsGrid";
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
    console.log(this.state.places);
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
          <CardsGrid places={this.state.places.slice(0,4)}></CardsGrid>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic
            tempora dolorum minus dolor magni voluptas a necessitatibus, in
            cupiditate possimus voluptatem nemo? Facilis aliquam quia velit
            debitis saepe veniam.
          </p>
        </div>
        <div className="NewPlaces">
          <h3 className="Title">Lo mas visitado</h3>
          <CardsGrid places={this.state.places.slice(4,8)}></CardsGrid>
        </div>
        <div className="callToAction">
          <h3 className="TitleCall">Reserva Ya</h3>
        </div>
      </Layout>
    );
  }
}

export default Home;
