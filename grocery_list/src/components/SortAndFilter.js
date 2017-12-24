import React from 'react';
import PurchaseFilterSelectContainer from '../containers/PurchaseFilterSelectContainer';
import CategoryFilterSelectContainer from '../containers/CategoryFilterSelectContainer';
import SortBySelectContainer from '../containers/SortBySelectContainer';


const SortAndFilter = () => {
  return (
    <div className="SortAndFilter container">
      <div className="row justify-content-center">

        <div className="col-md-4">
          <b>Purchase Filter:</b>
          <PurchaseFilterSelectContainer />
        </div>

        <div className="col-md-4">
          <b>Category Filter:</b>
          <CategoryFilterSelectContainer />
        </div>

        <div className="col-md-4">
          <b>Sort By:</b>
          <SortBySelectContainer />
        </div>

      </div>
    </div>
  );
};

export default SortAndFilter;
