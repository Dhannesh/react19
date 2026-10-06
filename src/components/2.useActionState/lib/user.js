const users = [
  {
    userName: "praveen",
    role: "user",
  },
  {
    userName: "dhanesh",
    role: "admin",
  },
  {
    userName: "chandrahas",
    role: "user",
  },
  {
    userName: "gaurav",
    role: "admin",
  },
];
export const addUser = (userName, role) => {
  const obj = { userName, role };
  users.push(obj);
};

export const isUserFoundInRole = (userName, role) => {
  const foundUser = users.find(
    (user) => user?.userName?.toLowerCase() === userName.toLowerCase(),
  );
  return foundUser ?? users.foundUser?.role === role;
};
