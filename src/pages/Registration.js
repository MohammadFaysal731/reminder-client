import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import SocialLogin from "../components/SocialLogin";
import { auth } from "../firebase.init";

const Registration = () => {
  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailUserLoading,
    emailUserError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
 let errorElement;
 const navigate = useNavigate();

 useEffect(() => {
   if (emailUser) {
     navigate("/");
   }
 }, [emailUser, navigate]);
  if (emailUserLoading || updating) {
    return <Loading />;
  }
  if (emailUserError || updatingError) {
    errorElement = (
      <small className="m-2 text-center text-red-500 text-lg">
        {emailUserError?.message}
      </small>
    );
  }
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    const success = await updateProfile({ displayName: name });
    if (success) {
      alert("Updated profile");
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="max-w-7xl mx-auto p-5">
        <h2 className="text-xl text-center uppercase">Registration</h2>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="form-control w-full">
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                type="text"
                placeholder="Enter Name"
                className="input input-bordered w-full"
                autoComplete="off"
              />
              <label className="label">
                {errors?.name?.type === "required" && (
                  <p className="text-red-500">{errors?.name?.message}</p>
                )}
              </label>
            </div>
            {/* email */}
            <div className="form-control w-full">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full"
                autoComplete="off"
              />
              <label className="label">
                {errors?.email?.type === "required" && (
                  <p className="text-red-500">{errors?.email?.message}</p>
                )}
              </label>
            </div>
            {/* time  */}
            <div className="form-control w-full">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full"
                autoComplete="off"
              />
              <label className="label">
                {errors?.password?.type === "required" && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
              </label> 
              {errorElement}
            </div>
           
            <button className="btn btn-primary">Registration</button>
          </form>
          <p>
            Do you have an account on Reminder App ? &nbsp;
            <span className="text-primary">
              <Link to="/login">Please Login</Link>
            </span>
          </p>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Registration;
