import React from 'react';
import PropTypes from 'prop-types';
import InfoSection from './elements/InfoSection';
import Table from './elements/Table';
import Button from './elements/Button';
import SortAndFilter from './SortAndFilter';


const GroceryList = ({items, onPurchase}) => {
  const tableHead = (
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
      <th scope="col"></th>
    </tr>
  );

  const rows = items.map(item => {
    let status;
    if (item.purchased) {
      status = <span className="text-success">Purchased</span>;
    } else {
      status = (
        <Button
          size="sm"
          color="success"
          onClick={() => onPurchase(item.id)}
        >
          Purchase
        </Button>
      );
    }
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.amount}</td>
        <td>{item.category}</td>
        <td>{status}</td>
      </tr>
    );
  });

  const table = items.length ? <Table head={tableHead} rows={rows} /> : <p className="text-center">No Items</p>;

  return (
    <InfoSection title="Item List" col="8">
      <SortAndFilter />
      {table}
    </InfoSection>
  );
};

GroceryList.propTypes = {
  items: PropTypes.array.isRequired,
  onPurchase: PropTypes.func.isRequired
};

export default GroceryList;
