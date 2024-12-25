import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'; // Import axios


function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
        await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if (res.data) {
                alert("Signup Successfully")
            }
            
        }).catch((err)=> {
            console.log(err)
            alert("Error: " +err)
        })
      };

  return (
    <>
    <div className="flex h-screen items-center justify-center">
     <div id="" className="w-[600px]">
             <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} >
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">SignUp</h3>

                    {/* FOR NAME */}
                <div className="mt-4 space-y-2">
                <span className="py-4">Name</span>
                <br />
                <input type="text" 
                name="" 
                className="w-80 px-3 py-2 border rounded-md outline-none"
                id="" 
                placeholder="Enter Your Full Name"  
                {...register("fullname", { required: "Name is required" })} 
                />
                 <br />
                 {errors.fullname && <span  className="text-sm text-red-500">{errors.name.message}</span>}
                </div>

                    {/* FOR EMAIL */}
                <div className="mt-4 space-y-2">
                <span className="py-4">Email</span>
                <br />
                <input type="email" 
                name="" 
                className="w-80 px-3 py-2 border rounded-md outline-none"
                id="" 
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
                <input type="password" 
                name="" 
                className="w-80 px-3 py-2 border rounded-md outline-none"
                id="" 
                placeholder="Enter Your Password" 
                {...register("password", { required: "Password is required" })}
                />
                <br />
                {errors.password && <span  className="text-sm text-red-500">{errors.password.message}</span>}
                </div>

                    {/* FOR BUTTONS */}
                <div className="flex justify-around mt-4">
                    <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-600 duration-300">Signup</button>
                    <p className="text-xl">Have Account?{" "} 
                        <button to="/" className="text-blue-500 underline cursor-pointer"
                    onClick={()=>
                        document.getElementById('my_modal_3').showModal()
                    }
                    >
                        Login
                        </button>{" "}
                        <Login/>
                        </p>
                </div>
                </form>
            </div>
            </div>
    </div>
    </>
    
  )
}

export default Signup
