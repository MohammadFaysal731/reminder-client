import React from 'react';
import { toast } from 'react-toastify';

const ManageItemsRow = ({ items, index, refetch }) => {
  const { _id, name, date, time, image } = items;

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:5000/item/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`Successfully delete this ${name}`);
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
        <button className="btn btn-primary btn-xs">Mark</button>
      </td>
      <td>
        <button
          onClick={() => handleDeleteItem(_id)}
          className="btn btn-secondary btn-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageItemsRow;