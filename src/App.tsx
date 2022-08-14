import React, { useState } from "react";
import { GiVikingHelmet } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CustomerCard from "./app/components/CustomerCard";
import ReservationCard from "./app/components/ReservationCard";
import { RootState } from "./app/store";
import { addReservation } from "./features/reservationSlice";


function App() {

const [reservationNameInput, setReservationNameInput] = useState("");

const reservations = useSelector((state: RootState) => state.reservations.value);

const customers = useSelector((state: RootState) => state.customers.value);

const dispatch = useDispatch();

const handleAddReservation = () => {
   if(!reservationNameInput) return;
   dispatch(addReservation(reservationNameInput));
   setReservationNameInput("");
}

  return (
    <div className="App">
      
      <h1><GiVikingHelmet className="viking-helmet"/>iking Table</h1>
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
              <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)}/>
              <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
            {customers.map(customer => {
              return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default App;