import React from "react";
import { toast } from "react-toastify";

const ManageItemsRow = ({ items, index, refetch, setDeletedItem }) => {
  const { _id, name, date, time, image, mark } = items;
  const handleMark = (id) => {
    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`You will mark this ${name}`);
        }
      });
  };
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
          <button
            onClick={() => handleMark(_id)}
            className="btn btn-primary btn-xs"
          >
            Mark
          </button>
        )}
      </td>
      <td>
        {!mark &&
          <label
            onClick={() => setDeletedItem(items)}
            htmlFor="item-delete-modal"
            className="btn btn-secondary btn-xs"
          >
            Delete
          </label>}
        
      </td>
    </tr>
  );
};

export default ManageItemsRow;
