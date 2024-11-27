import React, { useEffect, useState } from "react";

export default function HealthStatus() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetch("http://51.20.128.199:5050/healthcheck/")
      .then((response) => response.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div>
      <h3>API Status</h3>
      {JSON.stringify(status)}
    </div>
  );
}
