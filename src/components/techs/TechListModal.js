import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const TechListModal = ({ tech, getTechs }) => {
  const { loading, techs } = tech;

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((t) => <TechItem key={t.id} tech={t} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
