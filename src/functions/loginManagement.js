// import axios from "axios";
import SweetAlert from "../components/UI/SweetAlert";

const validateLogin = async (email, password) => {
  if (email === "challenge@alkemy.org" && password === "react") return true;

  SweetAlert({
    text: "Wrong credentials!",
  });
  return false;

  // COMMENTED OUT BECAUSE OF HTTP REQUEST
  // try {
  //   const response = await axios.post("http://challenge-react.alkemy.org", {
  //     email: email,
  //     password: password,
  //   });

  //   return response;
  // } catch (err) {
  //   SweetAlert({
  //     text: "Wrong credentials!",
  //   });

  //   return false;
  // }
};

const setTokenInLocalStorage = (token = "1") => {
  localStorage.setItem("isLoggedIn", `${token}`);
};

const removeTokenFromLocalStorage = (item) => {
  localStorage.removeItem(item);
};

export { validateLogin, setTokenInLocalStorage, removeTokenFromLocalStorage };
