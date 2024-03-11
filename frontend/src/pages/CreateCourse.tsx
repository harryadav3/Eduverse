// CreateCourse.tsx
// import React from "react";
import { useForm } from "react-hook-form";
import api from "../store/api";
// import { reset } from "react-hook-form";
import { useAuthStore } from "../store/store";
import toast from "react-hot-toast";


type FormData = {
  name: string;
  maxSeats: number;
  startDate: string;
  instructorId: string;
  duration: string;
  category: string;
  imageUrl: string;
};

const CreateCourse = () => {

const { register, handleSubmit, reset } = useForm<FormData>();
const userId = useAuthStore( (state) => state.user?.id);


const onSubmit = async (data: FormData) => {
    try {
        const formattedData = {
            ...data,
            instructorId: userId
        };
        console.log("the data for the user ", data);
        const response = await api.post('/courses/create', formattedData);
        console.log(response.data);
        // Clear form inputs
        toast.success('Course created successfully', { style : { backgroundColor : "#629c49" , color : "white"} });
    reset();
} catch (err) {
    toast.error('Invalid credentials' , { style : { backgroundColor : "#e34530" , color : "white"} });
    console.error(err);
}}
return (
    <div className="min-h-screen flex justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">
                    Create Course
                </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="mb-4">
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
                        <input
                            id="maxSeats"
                            type="number"
                            required
                            className="form-input"
                            placeholder="Max Seats"
                            {...register("maxSeats")}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            id="startDate"
                            type="date"
                            required
                            className="form-input"
                            placeholder="Start Date"
                            defaultValue={new Date().toISOString().split("T")[0]}
                            {...register("startDate")}
                        />
                    </div>
                    {/* <div className="mb-4">
                        <input
                            id="instructorId"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Instructor ID"
                            {...register("instructorId")}
                        />
                    </div> */}
                    <div className="mb-4">
                        <input
                            id="duration"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Duration"
                            {...register("duration")}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            id="category"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Category"
                            {...register("category")}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            id="imageUrl"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Image URL"
                            {...register("imageUrl")}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create Course
                    </button>
                </div>
            </form>
        </div>
    </div>
);
};

export default CreateCourse;
