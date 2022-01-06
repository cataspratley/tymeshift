import React, { useState } from "react";

import { Edit } from "../../assets";
import LocationInfo from "../LocationInfo";
import ModalLocationDescription from "../ModalLocationDescription";

import "./CardLocation.css";

const CardLocation = ({ name, users, time, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [views, setViews] = useState(0);

  const handleOpen = () => {
    setIsOpen(true);
    setViews(views + 1);
  };
  const handleClose = () => setIsOpen(false);

  return (
    <div className="cardWrapper">
      <p className="locationHeader">{name}</p>

      <LocationInfo users={users} time={time} views={views} />

      <button className="editButton" onClick={handleOpen}>
        <img src={Edit} alt="Edit" width="14" />
      </button>

      {isOpen && (
        <ModalLocationDescription
          name={name}
          users={users}
          time={time}
          views={views}
          description={description}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default CardLocation;
