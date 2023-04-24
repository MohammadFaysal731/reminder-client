import React from "react";
import { toast } from "react-toastify";

const ManageItemsRow = ({
  items,
  index,
  refetch,
  setDeletedItem,
  setMarkingItem,
}) => {
  const { _id, name, date, time, image, mark } = items;
 
  const handleRemoveMark = id =>{
    fetch(`https://different-yak-shoe.cyclic.app/item/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully remove the mark on ${name}`);
        }
      });
  }
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
          <button onClick={()=>handleRemoveMark(_id)} className="text-secondary">Remove</button>
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
