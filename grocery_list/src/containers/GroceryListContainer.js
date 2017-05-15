import {connect} from 'react-redux';
import GroceryList from '../components/GroceryList';
import {purchaseItem} from '../actions';

const mapStateToProps = state => {
  return {items: state.items};
};

const GroceryListContainer = connect(
  mapStateToProps
)(GroceryList);

export default GroceryListContainer;
