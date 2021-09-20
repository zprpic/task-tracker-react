export const convertArrayToObjectList = (data) => {
  let normalizedTasks = data.reduce((tasksHolder, task) => {
    const id = task._id;
    tasksHolder[`${id}`] = { ...task };
    return tasksHolder;
  }, {});
  return normalizedTasks;
};
