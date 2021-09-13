export const APIRoutes = {
  route: "http://localhost:5000",
  getTasks() {
    return `${this.route}/tasks/`;
  },
  getTask(id) {
    return `${this.route}/tasks/${id}`;
  },
};
