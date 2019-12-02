import React, { Component } from "react";
import axios from "axios";
import "../Styles/Reservaciones.css";
import "../Styles/global.css";
import Layout from "../Components/Layout";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import * as userActions from "../Actions/userActions";

class Reservar extends Component {
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
        {this.props.user.token === "" && <Redirect push to="/" />}
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
            <p className="sitios">
              Sitios disponibles {this.state.place.availableSits}
            </p>
            <p className="costo">$ {this.state.place.cost} por persona</p>
            <button
              className="button"
              onClick={async event => {
                event.preventDefault();
                const newSist = this.state.place.availableSits - 1;
                console.log(
                  newSist,
                  `http://localhost:8000/api/places/${this.props.match.params.placeId}`
                );

                const respone = await axios({
                  url: `http://localhost:8000/api/places/${this.props.match.params.placeId}`,
                  method: "PUT",
                  data: {
                    availableSits: newSist
                  }
                });

                console.log(respone);
              }}
            >
              Reservar mi lugar
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(Reservar);
