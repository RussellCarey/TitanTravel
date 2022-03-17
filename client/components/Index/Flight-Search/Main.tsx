import React, { FunctionComponent, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { FlightSearchArea, InputArea } from "./MainStyled";
import Modal from "../../Modal/Main";
import ModalContext from "../../../context/modal-context/ModalContext";
import FlightContext from "../../../context/flight-context/FlightContext";
import FlightDataContext from "../../../context/flight-data-context/FlightDataContext";
import FlightSearchInput from "./Input";
import FlightSeachButton from "./Button";

const Main: FunctionComponent<{}> = () => {
  const router = useRouter();
  const flightContext = useContext(FlightContext);
  const {
    flightState,
    setDepartureHub,
    setDestinationHub,
    setDepartureDate,
    setReturnDate,
    setPassengerNumber,
    searchFlights,
    setFlexibleNumber,
  } = flightContext;

  // Contexts
  const flightDataContext = useContext(FlightDataContext);
  const { setSearchedFlights } = flightDataContext;
  const modalContext = useContext(ModalContext);
  const { modalState, showModal } = modalContext;

  const searchForFlights = async () => {
    const searchRequest = await searchFlights();

    if (searchRequest.data.status === "success") {
      setSearchedFlights(searchRequest.data.data);
      router.push("/results");
    }

    if (searchRequest.data.status === "fail") showModal("Error collecting flight data, please try again.", "fail");
  };

  return (
    <FlightSearchArea>
      {modalState.show ? <Modal /> : null}
      <InputArea>
        <FlightSearchInput
          text={"Departure Hub"}
          setState={setDepartureHub}
          state={flightState.departureHub}
          type="text"
          placeText="Enter a starting hub. Eg. Earth Station One"
        />
        <FlightSearchInput
          text={"Return Hub"}
          setState={setDestinationHub}
          state={flightState.destinationHub}
          type="text"
          placeText="Enter a destination hub. Eg. Moon Station One"
        />
        <FlightSearchInput
          text={"Departure Date"}
          setState={setDepartureDate}
          state={flightState.departureDate}
          type="date"
          placeText="Enter Date"
        />
        <FlightSearchInput
          text={"Return Date"}
          setState={setReturnDate}
          state={flightState.returnDate}
          type="date"
          placeText="Enter Date"
        />
        <FlightSearchInput
          text={"Passengers"}
          setState={setPassengerNumber}
          state={flightState.passengers}
          type="number"
          placeText="0"
        />
        <FlightSearchInput
          text={"Flexi-days"}
          setState={setFlexibleNumber}
          state={flightState.flexible}
          type="number"
          placeText="0"
        />
        <FlightSeachButton text="search" onClick={() => searchForFlights()} />
      </InputArea>
    </FlightSearchArea>
  );
};

export default Main;
