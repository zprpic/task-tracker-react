import React from "react";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [errorLoadingData, setErrorLoadingData] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
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
