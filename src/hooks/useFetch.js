import { useState, useEffect } from "react";
import { fetchJSON } from "../helpers/fetchJSON";

export const useFetch = (url) => {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [errorLoadingData, setErrorLoadingData] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJSON(url);
        setData(data);
        console.log(data);
      } catch (error) {
        setErrorLoadingData(error);
      } finally {
        setIsLoadingData(false);
      }
    };
    fetchData();
  }, [url]);
  return { isLoadingData, errorLoadingData, data };
};
