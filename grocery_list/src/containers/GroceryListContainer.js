import { connect } from 'react-redux';
import GroceryList from '../components/GroceryList';
import { buyItem } from '../actions';

const filterPurchasedItems = (items, filter) => {
  switch (filter) {
  case 'ALL_ITEMS':
    return items;
  case 'PURCHASED':
    return items.filter(item => item.purchased);
  case 'NOT_PURCHASED':
    return items.filter(item => !item.purchased);
  default:
    return items;
  }
};

const filterCategoryItems = (items, filter) => {
  if (filter && filter !== 'ALL_ITEMS') {
    return items.filter(item => item.category === filter);
  } else {
    return items;
  }
};

const sortItems = (items, sortBy) => {
  // Return each item with key so that the sort will render
  let sorted;
  switch (sortBy) {
  case 'NONE':
    sorted = items.sort((a, b) => a.id > b.id);
    return sorted.map(item => {
      return {
        ...item, key: item.id
      };
    });
  case 'NAME':
    sorted = items.sort((a, b) => a.name > b.name);
    return sorted.map(item => {
      return {
        ...item, key: item.id
      };
    });
  case 'DESCRIPTION':
    sorted = items.sort((a, b) => a.description > b.description);
    return sorted.map(item => {
      return {
        ...item, key: item.id
      };
    });
  default:
    return items;
  }
};

const mapStateToProps = (state) => {
  let items = state.items;
  items = filterPurchasedItems(items, state.purchaseFilter);
  items = filterCategoryItems(items, state.categoryFilter);
  items = sortItems(items, state.sortBy);

  return {
    items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPurchase: (id) => {
      dispatch(buyItem(id));
    }
  };
};

const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);

export default GroceryListContainer;
