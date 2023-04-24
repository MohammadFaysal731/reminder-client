import React from 'react';
import { toast } from 'react-toastify';

const DeleteItemModal = ({ deletedItem, setDeletedItem, refetch }) => {
  const { _id, name } = deletedItem;
  const handleDeleteItem = (id) => {
    fetch(`http://localhost:5000/item/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          setDeletedItem(null)
          toast.success(`Successfully delete this ${name}`);
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="item-delete-modal" className="modal-toggle" />
      <div className="modal sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Do you want to Delete This : - 
            <span className="text-primary">{name}</span>
          </h3>
          <p></p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteItem(_id)}
              className="btn btn-secondary btn-xs"
            >
              Delete
            </button>
            <label
              htmlFor="item-delete-modal"
              className="btn btn-secondary btn-xs"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;