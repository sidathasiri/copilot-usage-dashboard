export const mapUsersToProjects = (users = []) =>
  users.reduce((acc, user) => {
    if (!acc[user.projectId]) {
      acc[user.projectId] = [];
    }
    acc[user.projectId].push(user);
    return acc;
  }, {});
