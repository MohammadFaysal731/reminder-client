import React from "react";

const ManageItemsRow = ({ items, index, refetch, setDeletedItem }) => {
  const { name, date, time, image } = items;

  return (
    <tr className="font-bold">
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>
        <img src={image} alt={name} className="w-10" />
      </td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <button className="btn btn-primary btn-xs">Mark</button>
      </td>
      <td>
        <label
          onClick={() => setDeletedItem(items)}
          htmlFor="item-delete-modal"
          className="btn btn-secondary btn-xs"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageItemsRow;
