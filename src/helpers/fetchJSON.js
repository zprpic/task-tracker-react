export const fetchJSON = async (url) => {
  const response = await fetch(url);
  return response.json();
};
