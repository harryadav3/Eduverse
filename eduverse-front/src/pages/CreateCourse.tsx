// CreateCourse.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    maxSeats: number;
    instructorId: string;
    duration: string;
    category: string;
    imageUrl: string;
};

const CreateCourse = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

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
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="form-input"
                                placeholder="Name"
                                {...register('name')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="maxSeats" className="sr-only">
                                Max Seats
                            </label>
                            <input
                                id="maxSeats"
                                type="number"
                                required
                                className="form-input"
                                placeholder="Max Seats"
                                {...register('maxSeats')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="instructorId" className="sr-only">
                                Instructor ID
                            </label>
                            <input
                                id="instructorId"
                                type="text"
                                required
                                className="form-input"
                                placeholder="Instructor ID"
                                {...register('instructorId')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="duration" className="sr-only">
                                Duration
                            </label>
                            <input
                                id="duration"
                                type="text"
                                required
                                className="form-input"
                                placeholder="Duration"
                                {...register('duration')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="sr-only">
                                Category
                            </label>
                            <input
                                id="category"
                                type="text"
                                required
                                className="form-input"
                                placeholder="Category"
                                {...register('category')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="imageUrl" className="sr-only">
                                Image URL
                            </label>
                            <input
                                id="imageUrl"
                                type="text"
                                required
                                className="form-input"
                                placeholder="Image URL"
                                {...register('imageUrl')}
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