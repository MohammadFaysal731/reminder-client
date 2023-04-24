import React from 'react';
import { toast } from 'react-toastify';

const MarkItemModal = ({ markingItem, refetch, setMarkingItem }) => {
  const { _id, name } = markingItem;
  const handleMark = (id) => {
    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          setMarkingItem(null)
          toast.success(`You will mark this ${name}`);
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="mark-item-modal" className="modal-toggle" />
      <div className="modal sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Do you want to Mark This : -{" "}
            <span className="text-primary">{name}</span>{" "}
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleMark(_id)}
              className="btn btn-primary btn-xs"
            >
              Mark
            </button>
            <label htmlFor="mark-item-modal" className="btn btn-primary btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkItemModal;