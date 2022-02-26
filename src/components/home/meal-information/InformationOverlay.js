import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "../../UI/Backdrop";
import MealInformation from "./MealInformation";

const InformationOverlay = ({ info, setInfoIsShown }) => {
  const closeMoreInfoHandler = () => {
    setInfoIsShown(false);
  };

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
