import React, { useState } from "react";
import { GiVikingHelmet } from "react-icons/gi";
import { useSelector } from "react-redux";
import "./App.css";
import ReservationCard from "./app/components/ReservationCard";
import { RootState } from "./app/store";


function App() {

const reservations = useSelector((state: RootState) => state.reservations.value);

  return (
    <div className="App">
      
      <h1><GiVikingHelmet className="viking-helmet"/>iking Table</h1>
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map(name => {
                return <ReservationCard name={name} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input />
            <button>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;