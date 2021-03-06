/* import { useState, useEffect } from "react";

export const useFetch = (url, defaultOptions, watch = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const watchChanges = Array.isArray(watch) ? watch : [];

  const fetchRequest = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, { ...defaultOptions, ...options });
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (watch === false) return;
    fetchRequest();
  }, watchChanges);

  return { loading, error, data, fetchRequest };
};
 */
