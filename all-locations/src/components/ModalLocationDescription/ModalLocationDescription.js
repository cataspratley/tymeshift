import React from "react";

import { Close } from "../../assets";
import LocationInfo from "../LocationInfo";
import "./ModalLocationDescription.css";

const ModalLocationDescription = ({
  name,
  users,
  time,
  views,
  description,
  handleClose,
}) => {
  return (
    <div className="modalWrapper">
      <div className="modalContent">
        <p className="modalHeader">{name}</p>

        <LocationInfo users={users} time={time} views={views} />

        <div className="descriptionWrapper">
          <p className="descriptionHeader">Description</p>
          <p className="descriptionInfo">{description}</p>
        </div>

        <button className="closeButton" onClick={handleClose}>
          <img src={Close} alt="Close" width="16" />
        </button>
      </div>
    </div>
  );
};

export default ModalLocationDescription;
