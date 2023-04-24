import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../components/Loading";
import ManageItemsRow from "./ManageItemsRow";

const ManageItems = () => {

 const { data: allItems, isLoading, refetch } = useQuery({
   queryKey: ["allItems"],
   queryFn: () =>
     fetch("http://localhost:5000/items").then((res) => res.json()),
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
