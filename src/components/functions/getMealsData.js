import axios from "axios";
import SweetAlert from "../UI/SweetAlert";

const getMealsData = async (link) => {
  try {
    const response = await axios.get(link);

    const data = await response.data.results;

    return data;
  } catch (err) {
    if (err.message.includes("402")) {
      SweetAlert({
        title: "Error 402",
        text: "The search's limit has been reached for today, try again tomorrow. Sorry!",
      });
      return;
    }

    SweetAlert({
      title: err.name,
      text: err.message,
    });
  }
};

export default getMealsData;
