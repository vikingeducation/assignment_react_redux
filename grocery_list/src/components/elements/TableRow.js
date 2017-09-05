import react from "React";

const TableRow = ({ props }) => {
  // const { name, description, amount, category, purchased } = props;

  const data = Object.keys(props).map(key => {
    return (
      <td>
        {props[key]}
      </td>
    );
  });

  return (
    <tr>
      {data}
    </tr>
  );
};

export default TableRow;
