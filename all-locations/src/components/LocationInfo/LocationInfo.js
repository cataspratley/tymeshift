import React from "react";

import { Users, Timezone, Views } from "../../assets";
import "./LocationInfo.css";

const LocationInfo = ({ users, time, views }) => {
  return (
    <div>
      <div className="infoWrapper">
        <img src={Users} alt="Close" width="14" />
        <p className="infoText">{users} users</p>
      </div>

      <div className="infoWrapper">
        <img src={Timezone} alt="Timezone" width="14" />
        <p className="infoText">{time} </p>
      </div>

      <div className="infoWrapper">
        <img src={Views} alt="Views" width="14" />
        <p className="infoText">{views} views</p>
      </div>
    </div>
  );
};

export default LocationInfo;
