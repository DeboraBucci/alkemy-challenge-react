import React from "react";

import Backdrop from "../../UI/Backdrop";
import MoreInfo from "./MoreInfo";

const InformationOverlay = ({ info, setInfoIsShown }) => {
  const closeMoreInfoHandler = () => {
    setInfoIsShown(false);
  };

  return (
    <React.Fragment>
      <Backdrop onClick={closeMoreInfoHandler} />
      <MoreInfo info={info} closeMoreInfoHandler={closeMoreInfoHandler} />
    </React.Fragment>
  );
};

export default InformationOverlay;
