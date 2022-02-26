import React from "react";

import Backdrop from "../../UI/Backdrop";
import MealInformation from "./MealInformation";

const InformationOverlay = ({ info, setInfoIsShown }) => {
  const closeMoreInfoHandler = () => {
    setInfoIsShown(false);
  };

  return (
    <React.Fragment>
      <Backdrop onClick={closeMoreInfoHandler} />
      <MealInformation
        info={info}
        closeMoreInfoHandler={closeMoreInfoHandler}
      />
    </React.Fragment>
  );
};

export default InformationOverlay;
