/****************************
Not a form
contains the links for filtering items to display.
All, Purchased, Not Purchased, and By Category.
State: active: boolean
			onClick for links changes needs Action and Reducer
			onChnage for selector dropdown needs Action and Reducer

Category is a drop downselector.
make sure original state is not manipulated.

holds and passes function to filter by selection and array of categories to pass onto the By Category button/selector
*****************************/
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FilterLink from "../components/filter/FilterLink";
import { filter } from "../actions";
//import Filter from "./Filter";

const mapPropsToState = (state, ownProps) => {
	status: state.listFilter === ownProps.status;
	categories: null;
};

const mapDispatchToProps = (dispatch, ownProps) => {
	//sets state filter to ownProps.filter
	onClick: () => {
		dispatch(filter(ownProps.filter));
	};
};

const FilterLinkContainer = connect(mapPropsToState, mapDispatchToProps)(
	FilterLink
);

FilterLinkContainer.propTypes = {
	status: PropTypes.bool.isRequired,
	categories: PropTypes.array
};
export default FilterLinkContainer;
