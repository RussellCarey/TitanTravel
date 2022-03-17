import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";

import ModalContext from "../context/modal-context/ModalContext";

export const useGetPartialList = (text: string) => {
  const timeoutRef = useRef(0);
  const [query, setQuery] = useState(text);
  const [list, setList] = useState([]);

  const modalContext = useContext(ModalContext);
  const { modalState, showModal } = modalContext;

  useEffect(() => {
    clearTimeout(timeoutRef.current);

    // Get data
    const fetchData = async () => {
      try {
        const result = await axios.request({
          method: "POST",
          url: `http://localhost:2222/api/flights/getallhubs/`,
          data: {
            partial: query,
          },
        });

        setList(result.data.data);
      } catch (error) {
        showModal("Error getting locations, please try again.", "fail");
      }
    };

    // If query is not null return the list found
    if (query !== "") timeoutRef.current = window.setTimeout(() => fetchData(), 200);
  }, [query]);

  return { list, setQuery };
};

export default useGetPartialList;
