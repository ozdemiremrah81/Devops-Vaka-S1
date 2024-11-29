import React, { useEffect, useState } from "react";

export default function HealthStatus() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_SERVER)
      .then((response) => response.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div>
      <h3>API Durumu</h3>
      {JSON.stringify(status)}
    </div>
  );
}
