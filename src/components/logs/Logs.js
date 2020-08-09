import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { loading, logs }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System logs</h4>
      </li>

      <div className='container'>
        {!loading && logs !== null && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </div>
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.object,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
