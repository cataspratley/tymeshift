import { useState, useEffect } from "react";

function LocationsData() {
  const [error, setError] = useState(null);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://6033c4d8843b15001793194e.mockapi.io/api/locations")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setLocations(data);
      })
      .catch((error) => {
        setLoading(true);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { error, locations, loading };
}

export default LocationsData;
