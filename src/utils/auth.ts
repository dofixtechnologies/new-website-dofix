export const loginUser = () => {
  localStorage.setItem("dofix_user", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("dofix_user");
};

export const isLoggedIn = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("dofix_user");
  }
};