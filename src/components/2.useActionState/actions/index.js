"use server";
import { isUserFoundInRole, addUser } from "../lib/user";

export const addUserToRole = async (prevState, formData) => {
  const userName = formData.get("userName");
  const role = formData.get("role");
  if (isUserFoundInRole(userName, role)) {
    await new Promise((res) => setTimeout(res, 2000));
    return `The user ${userName} exists for the role ${role} already. can't add it again.`;
  } else {
    addUser(userName, role);
    return `Added the user ${userName} to the role ${role} successfully`;
  }
};
