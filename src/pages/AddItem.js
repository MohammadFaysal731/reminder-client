import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast } from "react-toastify";
const AddItem = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imgBbStorageKey = `45c46a1b32a1d6a38d670e42fa5d2349`;
  const onSubmit = (data) => {
    const name = data.name;
    const date = data.date;
    const time = data.time;
    //hos image to imgbb
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgBbStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const image = data.data.url;
          // send the data to mongodb
          const itemData = {
            name,
            date,
            time,
            image,
          };
          fetch(`https://different-yak-shoe.cyclic.app/items`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(itemData),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                reset();
                toast.success(`you will add ${name} item`);
              } else {
                toast.error(`you item ${name} was not added`);
              }
            });
        }
      });
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
            <label htmlFor="image" className="btn btn-primary">
            <AiOutlineCloudUpload className="text-3xl mx-2"/>  upload
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
