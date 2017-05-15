import { connect } from "react-redux";
import Sort from "../components/Sort";

import {setSort} from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onChange: event => {
      dispatch(setSort(event.target.value));
    }
  };
};

const SortContainer = connect(
  null,
  mapDispatchToProps
)(Sort);

export default SortContainer;
