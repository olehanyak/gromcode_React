import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    
    const ONLINE = (e) => {
      setStatus(e.type);
    };
    window.addEventListener("online", ONLINE);

    console.dir(setStatus);

    const OFFLINE = (e) => {
      setStatus(e.type);
    };
    window.addEventListener("offline", OFFLINE);

    return () => {
      window.removeEventListener("online", ONLINE);
      window.removeEventListener("offline", OFFLINE);
    };
  }, []);

  const setClass = status === "offline" && "status_offline";

  return <div className={`status ${setClass}`}>{status}</div>;
};

export default ConnectionStatus;
