import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {getLocations, getPlaces} from '../../Core/Places/Actions';

const mapStateToProps = ({ui, questions}) => {
  const {loading} = ui;

  return {
    loading,
    questions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getLocations: (lat, long) => dispatch(getLocations(lat, long)),
    getPlaces: query => dispatch(getPlaces(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
