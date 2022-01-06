import { useState, useEffect } from "react";

function LocationsData() {
  const [error, setError] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://6033c4d8843b15001793194e.mockapi.io/api/locations")
      .then((res) => res.json())
      .then(
        (result) => {
          setLocations(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return { error, locations };
}

export default LocationsData;
