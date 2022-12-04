import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
} from "./components";
import "./App.css";

function App() {
    return (
    <div className="app">
    <div className="navbar">
        <Navbar />
    </div>

    <div className="main">
        <Layout>
        <div className="routes">
            <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
            />


            </Routes>
        </div>
        </Layout>

        <div className="footer">
        <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
        >
            CN <br />
            All Right reserved
            <br />
            <br />
            made with love by Nada Elsharqwy 🦋🔮
        </Typography.Title>
        </div>
    </div>
    </div>
    );
}

export default App;
