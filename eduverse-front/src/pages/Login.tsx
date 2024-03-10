import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  role: string;
};

const Login = () => {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const role = watch("role", "student");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

return (
    <div className="min-h-screen flex  justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-6">
        <div className="max-w-md w-full space-y-8 ">
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">
                    Sign in to your account
                </h2>
            </div>
            <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="mb-4">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Name"
                            {...register("name")}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="form-input"
                            placeholder="Email address"
                            {...register("email")}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-around mb-4 ">
                    <div className="flex items-center ">
                        <input
                            id="student"
                            type="radio"
                            className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            value="student"
                            checked={role === "student"}
                            {...register("role")}
                        />
                        <label
                            htmlFor="student"
                            className="ml-2 block text-sm leading-5 text-gray-900"
                        >
                            Student
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="instructor"
                            type="radio"
                            className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            value="instructor"
                            checked={role === "instructor"}
                            {...register("role")}
                        />
                        <label
                            htmlFor="instructor"
                            className="ml-2 block text-sm leading-5 text-gray-900"
                        >
                            Instructor
                        </label>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2  px-4 border border-transparent  font-medium rounded-md text-white bg-indigo-600 hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  text-xl"
                    >
                        Sign in
                    </button>
                </div>
            </form>
            <div className="text-center">
                <Link
                    to="/signup"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Don't have an account? Sign Up
                </Link>
            </div>
        </div>
    </div>
);
};

export default Login;
