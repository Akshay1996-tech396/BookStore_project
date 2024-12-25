import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This should log the form data when submitted
  };

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} >
              {/* Close Modal Button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">LOGIN</h3>

              {/* FOR EMAIL */}
              <div className="mt-4 space-y-2">
                <span className="py-4">Email</span>
                <br />
                <input 
                  type="email" 
                  className="w-80 px-3 py-2 border rounded-md outline-none"
                  placeholder="Enter Your email"
                  {...register("email", { required: "Email is required" })}  
                />
                <br />
                {errors.email && <span  className="text-sm text-red-500">{errors.email.message}</span>}
              </div>

              {/* FOR PASSWORD */}
              <div className="mt-4 space-y-2">
                <span className="py-4">Password</span>
                <br />
                <input 
                  type="password" 
                  className="w-80 px-3 py-2 border rounded-md outline-none"
                  placeholder="Enter Your Password" 
                  {...register("password", { required: "Password is required" })} 
                />
                <br />
                {errors.password && <span  className="text-sm text-red-500">{errors.password.message}</span>}
              </div>

              {/* FOR BUTTONS */}
              <div className="flex justify-around mt-4">
                <button 
                  type="submit" 
                  className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-600 duration-300"
                >
                  Login
                </button>
                <p>Not Registered? <Link to="/signup" className="text-blue-500 underline cursor-pointer">SignUp</Link></p>
              </div>

            </form>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Login;
