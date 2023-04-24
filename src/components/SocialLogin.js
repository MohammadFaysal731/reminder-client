import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import Loading from "./Loading";
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleUserLoading, googleUserError] = useSignInWithGoogle(auth);
  let errorElement;
  const navigate =useNavigate();
  if(googleUser){
    navigate("/items")
  }
  if(googleUserLoading){
    return <Loading/>
  }
  if(googleUserError){
    errorElement = <small className="m-2 text-center text-red-500 text-lg">{googleUserError?.message}</small>
  }
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      {errorElement}
      <button onClick={() => signInWithGoogle()} className="btn btn-primary ">
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
