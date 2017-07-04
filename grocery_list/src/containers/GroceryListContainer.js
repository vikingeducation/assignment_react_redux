import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";
import { purchaseProduct } from "../actions";

const sortProducts = (products, sortFilter) => {
  // spread used in order to get react to re-render
  let results = [...products];
  switch (sortFilter) {
    case "SORT_BY_NAME_ASC":
      results.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return results;
    case "SORT_BY_NAME_DESC":
      results.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return results.reverse();
    case "SORT_BY_DESCRIPTION_ASC":
      results.sort((a, b) => {
        if (a.description.toLowerCase() < b.description.toLowerCase()) {
          return -1;
        } else if (a.description.toLowerCase() > b.description.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return results;
    case "SORT_BY_DESCRIPTION_DESC":
      results.sort((a, b) => {
        if (a.description.toLowerCase() < b.description.toLowerCase()) {
          return -1;
        } else if (a.description.toLowerCase() > b.description.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return results.reverse();
    default:
      return results;
  }
};

const filterByCategory = (products, category) => {
  if (category === "SHOW_ALL") {
    return products;
  }

  return products.filter(product => product.category === category);
};

const filterByPurchased = (products, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return products;
    case "SHOW_PURCHASED":
      return products.filter(product => product.purchased);
    case "SHOW_NOT_PURCHASED":
      return products.filter(product => !product.purchased);
    default:
      return products;
  }
};

const getVisibleProducts = (products, filters) => {
  let results = filterByPurchased(products, filters.purchased);
  results = filterByCategory(results, filters.category);
  results = sortProducts(results, filters.sort);
  return results;
};

const mapStateToProps = state => {
  return {
    groceryList: getVisibleProducts(state.groceryList, state.productFilters)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    purchaseProduct: id => {
      dispatch(purchaseProduct(id));
    }
  };
};

const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
  GroceryList
);

export default GroceryListContainer;
