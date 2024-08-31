export const mapUsersToProjects = (users = []) =>
  users.reduce((acc, user) => {
    if (!acc[user.projectId]) {
      acc[user.projectId] = [];
    }
    acc[user.projectId].push(user);
    return acc;
  }, {});

export const countMetricPerDay = (data) => {
  const totalCountByDate = {};

  for (const person in data) {
    data[person].forEach((entry) => {
      const { count, date } = entry;
      if (totalCountByDate[date]) {
        totalCountByDate[date] += count;
      } else {
        totalCountByDate[date] = count;
      }
    });
  }

  return Object.keys(totalCountByDate)
    .sort()
    .map((key) => ({
      date: key,
      count: totalCountByDate[key],
    }));
};

export const getTotalAcceptedSuggestions = (data = []) =>
  data.reduce((sum, current) => sum + current.count, 0);
