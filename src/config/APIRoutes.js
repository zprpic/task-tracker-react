export const APIRoutes = {
  route: "http://localhost:5000/",
  getTasks: function (id) {
    if (id) {
      return `${this.route}tasks/${id}`;
    } else {
      return `${this.route}tasks/`;
    }
  },
};
