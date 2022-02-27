import axios from "axios";
import SweetAlert from "../UI/SweetAlert";

const validateLogin = async (email, password) => {
  try {
    const response = await axios.post("http://challenge-react.alkemy.org", {
      email: email,
      password: password,
    });

    return response;
  } catch (err) {
    SweetAlert({
      text: "Wrong credentials!",
    });

    return false;
  }
};

const setTokenInLocalStorage = (token) => {
  localStorage.setItem("isLoggedIn", `${token}`);
};

const removeTokenFromLocalStorage = (item) => {
  localStorage.removeItem(item);
};

export { validateLogin, setTokenInLocalStorage, removeTokenFromLocalStorage };
