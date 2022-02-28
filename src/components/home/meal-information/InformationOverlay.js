import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import Backdrop from "../../UI/Backdrop";
import MealInformation from "./MealInformation";

const InformationOverlay = ({ info, setInfoIsShown }) => {
  const closeMoreInfoHandler = () => {
    setInfoIsShown(false);
  };

  const handleKeyDown = (e) => {
    e.code === "Escape" && closeMoreInfoHandler();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const portal = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeMoreInfoHandler} />,
        portal
      )}

      {ReactDOM.createPortal(
        <MealInformation
          info={info}
          closeMoreInfoHandler={closeMoreInfoHandler}
        />,
        portal
      )}
    </React.Fragment>
  );
};

export default InformationOverlay;
