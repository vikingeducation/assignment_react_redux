import react from "React";

const TableHead = ({ props }) => {
  const data = Object.keys(props).map(key =>
    <th>
      {key}
    </th>
  );
  return (
    <thead>
      {data}
    </thead>
  );
};

export default TableHead;
