export const APIRoutes = {
  route: "http://localhost:5000",
  getTasks: function () {
    return `${this.route}/tasks/`;
  },
  getTask: function (id) {
    return `${this.route}/tasks/${id}`;
  },
};
