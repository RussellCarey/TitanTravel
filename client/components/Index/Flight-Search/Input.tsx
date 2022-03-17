import React, { useState, useContext, useEffect, ChangeEvent } from "react";
import useGetPartialList from "../../../utils/useGetPartialList";
import FlightContext from "../../../context/flight-context/FlightContext";
import { Container, Text, InputDate, InputText, LocationBox, LocationElement } from "./InputStyled";
import "react-datepicker/dist/react-datepicker.css";
import { FunctionComponent } from "react";
import { theme } from "../../../styles/theme";
import ReactDatePicker from "react-datepicker";

interface IHubData {
  hub_name: string;
}

const FlightSearchInput: FunctionComponent<{
  text: string;
  setState: Function;
  // any for now, need to find the date pickers type.. string | number | picker type
  state: any;
  type: "date" | "text" | "number";
  placeText: string;
}> = ({ text, state, setState, type, placeText }) => {
  const flightContext = useContext(FlightContext);
  const { flightState } = flightContext;

  const { list, setQuery } = useGetPartialList("");
  const [showList, setShowList] = useState(false);

  // On change..
  const onChangeHandler = async (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      setState(target.value);
    } else {
      setState("");
    }

    if (type === "text") {
      const searchQuery = await setQuery(target.value);
      if (list !== null) setShowList(true);
    }
  };

  // Reset dates on load as the starting data format is not correct..
  useEffect(() => {
    if (type === "date") {
      onChangeDateHandler("");
    }
  }, []);

  // For dates
  const onChangeDateHandler = (e: any) => {
    // Remove the time from the date and convert it to UNIX time.. Manage on the server..
    const parsedDate = Date.parse(e.toString());
    setState(parsedDate);
  };

  const onCLickLocationhandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setState(target.innerText);
    setShowList(false);
  };

  return (
    <Container>
      <Text theme={theme}>{text}</Text>
      {type === "text" ? (
        <InputText placeholder={placeText} value={state} onChange={(e) => onChangeHandler(e)} />
      ) : null}
      {type === "date" ? <InputDate selected={state} onChange={(e) => onChangeDateHandler(e)} /> : null}
      {type === "number" ? (
        <InputText type="number" placeholder={placeText} value={state} onChange={(e) => onChangeHandler(e)} />
      ) : null}

      <LocationBox className="locationbox">
        {list !== null && showList
          ? list.map((location: IHubData) => {
              return (
                <LocationElement
                  className="locationbox-element"
                  key={location.hub_name}
                  onClick={(e: React.MouseEvent<HTMLElement>) => onCLickLocationhandler(e)}
                >
                  {location.hub_name}
                </LocationElement>
              );
            })
          : null}
      </LocationBox>
    </Container>
  );
};

export default FlightSearchInput;
