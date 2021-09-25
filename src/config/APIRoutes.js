export const APIRoutes = {
  base_URL: "http://localhost:5000",
  getTasks() {
    return this.base_URL + "/tasks";
  },
  getTask(id) {
    return this.base_URL + "/tasks/" + id;
  },
  createTask() {
    return this.base_URL + "/tasks";
  },
  deleteTask(id) {
    return this.base_URL + "/tasks/" + id;
  },
  updateTask(id) {
    return this.base_URL + "/tasks/" + id;
  },
};
