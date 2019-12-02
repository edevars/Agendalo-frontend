import React, { Component } from "react";
import "../Styles/Home.css";
import "../Styles/global.css";
import Layout from '../Components/Layout'

class Home extends Component {
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
            <h2 className="heroTitleP" >Agéndalo</h2>
          </div>
        </div>
        

  
       
      </Layout>
    );
  }
}

export default Home;
