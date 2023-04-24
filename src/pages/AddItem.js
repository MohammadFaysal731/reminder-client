import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {  
  const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();
const onSubmit = (data) => {
  const name =data.name;
  const date =data.date;
  const time =data.time;
  const image =data.image;
  console.log(name,date,time,image);
};
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-xl text-center uppercase">Add Items</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name  */}
          <div className="form-control w-full ">
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Item name is required",
                },
              })}
              type="text"
              placeholder="Item Name"
              className="input input-bordered w-full"
              autoComplete="off"
            />
            <label className="label">
              {errors?.name?.type === "required" && (
                <p className="text-red-500">{errors?.name?.message}</p>
              )}
            </label>
          </div>
          {/* date  */}
          <div className="form-control w-full">
            <input
              {...register("date", {
                required: {
                  value: true,
                  message: "Item date is required",
                },
              })}
              type="text"
              placeholder="Item Data"
              className="input input-bordered w-full"
              autoComplete="off"
            />
            <label className="label">
              {errors?.date?.type === "required" && (
                <p className="text-red-500">{errors?.date?.message}</p>
              )}
            </label>
          </div>
          {/* time  */}
          <div className="form-control w-full">
            <input
              {...register("time", {
                required: {
                  value: true,
                  message: "Item time is required",
                },
              })}
              type="text"
              placeholder="Item Time"
              className="input input-bordered w-full"
              autoComplete="off"
            />
            <label className="label">
              {errors?.time?.type === "required" && (
                <p className="text-red-500">{errors?.time?.message}</p>
              )}
            </label>
          </div>
          {/* image  */}
          <div className="form-control w-full">
            <label htmlFor="image"className="btn btn-primary">
              upload
            </label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Item image is required",
                },
              })}
              type="file"
              id="image"
              placeholder="Item image"
              className="input input-bordered w-full hidden"
              autoComplete="off"
            />
            <label className="label">
              {errors?.image?.type === "required" && (
                <p className="text-red-500">{errors?.image?.message}</p>
              )}
            </label>
          </div>
          <button className="btn btn-primary">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
