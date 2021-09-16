export const getTask = async (route, id) => {
  return await fetch(route + id);
};
