import React from "react";
import useItems from "../../hooks/useItems";
import ItemsRow from "./ItemsRow";

const ManageItems = () => {
  const {items, setItems}=useItems([]);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-center text-primary font-bold text-sm md:text-2xl uppercase mb-3">All Items</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>1</th>
              <th>Name</th>
              <th>Image</th>
              <th>Date</th>
              <th>Time</th>
              <th>Mark</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
         {items?.map((item,index)=>(
          <ItemsRow item={item} key={item._id} index={index}/>
         ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
