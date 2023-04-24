import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../components/Loading";
import DeleteItemModal from "../../components/Modals/DeleteItemModal";
import MarkItemModal from "../../components/Modals/MarkItemModal";
import ManageItemsRow from "./ManageItemsRow";

const ManageItems = () => {
 const [deletedItem, setDeletedItem] = useState(null);
 const [markingItem, setMarkingItem] = useState(null);
 const {
   data: allItems,
   isLoading,
   refetch,
 } = useQuery({
   queryKey: ["allItems"],
   queryFn: () =>
     fetch("https://different-yak-shoe.cyclic.app/items").then((res) =>
       res.json()
     ),
 });

 if (isLoading){
  return <Loading/>
 }


  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-center text-primary font-bold text-sm md:text-2xl uppercase mb-3">
        All Items
      </h2>
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
            {allItems?.map((items, index) => (
              <ManageItemsRow
                items={items}
                key={items._id}
                index={index}
                refetch={refetch}
                setDeletedItem={setDeletedItem}
                setMarkingItem={setMarkingItem}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* item deleting modal */}
      {deletedItem && (
        <DeleteItemModal
          deletedItem={deletedItem}
          setDeletedItem={setDeletedItem}
          refetch={refetch}
        />
      )}
      {/* item mark modal */}
      {markingItem && (
        <MarkItemModal
          markingItem={markingItem}
          setMarkingItem={setMarkingItem}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageItems;
