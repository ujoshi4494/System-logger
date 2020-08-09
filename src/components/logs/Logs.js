import React, { useEffect, useState } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const data = await fetch("/logs");
    const logs = await data.json();
    setLogs(logs);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System logs</h4>
      </li>

      <div className='container'>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </div>
    </ul>
  );
};

export default Logs;
