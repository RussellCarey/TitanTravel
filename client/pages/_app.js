import "../styles/globals.css";
import FlightState from "../context/flight-context/flightState";
import FlightDataState from "../context/flight-data-context/flightDataState";
import ModalState from "../context/modal-context/modalState";

function MyApp({ Component, pageProps }) {
  return (
    <ModalState>
      <FlightDataState>
        <FlightState>
          <Component {...pageProps} />
        </FlightState>
      </FlightDataState>
    </ModalState>
  );
}

export default MyApp;
