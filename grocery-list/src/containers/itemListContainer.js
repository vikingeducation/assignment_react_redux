import { connect } from "react-redux";
import ItemList from "../components/ItemList";
import { purchaseItem, removeItem } from "../actions";
import serialize from "form-serialize";

// Set filters for purchased/not purchased/all, categories/all.
const filterGroceries = (groceries, filters) => {
  const { purchasedFilter, categoryFilter } = filters;
  let selected = groceries;
  // do the purchased filter
  if (purchasedFilter === "SHOW_ALL") {
    //do nothing
  } else {
    const map = {
      SHOW_PURCHADED: true,
      SHOW_NOT_PURCHASED: false
    };
    const purchaseFilter = map[purchasedFilter];
    selected = selected.filter(item => item.purchased === purchaseFilter);
  }
  //do the category filter
  if (categoryFilter === "SHOW_ALL") {
    //do nothing
  } else {
    selected.filter(item => item.category !== categoryFilter);
  }
  return selected;
};

//implement sorting later
const sortGroceries = (groceries, sorts) => {
  return groceries;
  // if (sorts === "SHOW_ALL") return groceries;
  // return groceries.filter(item => item.category === sorts);
};
const selectGroceries = (groceries, filters, sorts) => {
  let selected = filterGroceries(groceries, filters);
  return sortGroceries(selected, sorts);
};

const mapStateToProps = state => {
  let filters = {
    purchasedFilter: state.purchasedFilter,
    categoryFilter: state.categoryFilter
  };
  let sorts = {
    sortBy: state.sortBy
  };
  return {
    groceries: selectGroceries(state.groceries, filters, sorts)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(removeItem(data.id));
    },
    onPurchase: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(purchaseItem(data.id));
    }
  };
};

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ItemList
);

export default ItemListContainer;
