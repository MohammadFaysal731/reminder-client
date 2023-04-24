import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {  const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();
const onSubmit = (data) => {
  const email = data.email;
  const password = data.password;
  console.log(email,password );
};
  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="max-w-7xl mx-auto p-5">
        <h2 className="text-xl text-center uppercase">Login</h2>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
          <p>
            Are you new to Reminder App ? &nbsp;
            <span className="text-primary">
              <Link to="/registration">Please Registrar</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;