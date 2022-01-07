import React from "react";

import CardLocation from "./CardLocation";
import LocationsData from "../../data/locations";

import { getLocalTime, getTimeZone } from "../../utils/dateConverter";

import "./AllLocations.css";

function AllLocations() {
  const { locations, error, loading } = LocationsData();

  return (
    <div>
      <header className="header">
        <p className="small-header">All Locations</p>
        <p className="big-header">Acme Locations</p>
      </header>

      <div className="cardLocation">
        {!loading
          ? !error &&
            locations.map((location) => (
              <CardLocation
                key={location.id}
                name={location.name}
                users={location.userCount}
                time={`${getLocalTime(location.createdAt)} (${getTimeZone(
                  location.createdAt
                )})`}
                description={location.description}
              />
            ))
          : "Loading all locations"}
      </div>
    </div>
  );
}

export default AllLocations;
