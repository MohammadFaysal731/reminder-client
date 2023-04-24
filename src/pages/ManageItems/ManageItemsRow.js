import React from "react";

const ManageItemsRow = ({
  items,
  index,
  refetch,
  setDeletedItem,
  setMarkingItem,
}) => {
  const {  name, date, time, image, mark } = items;
 
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
        {mark ? (
          <button className="text-secondary">Remove</button>
        ) : (
          <label
            onClick={() => setMarkingItem(items)}
            htmlFor="mark-item-modal"
            className="btn btn-primary btn-xs"
          >
            Mark
          </label>
        )}
      </td>
      <td>
        {!mark && (
          <label
            onClick={() => setDeletedItem(items)}
            htmlFor="item-delete-modal"
            className="btn btn-secondary btn-xs"
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default ManageItemsRow;
