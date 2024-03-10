import  { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
type FormData = {
    role: string;
    name: string;
    email: string;
    password: string;
    bio?: string;
    imageUrl: string;
};

const Signup = () => { 
    const { register, handleSubmit, watch } = useForm<FormData>();
    const role = watch('role', 'student');
    const { signup, isLoggedIn } = useAuthStore((state) => ({
        signup: state.signup,
        isLoggedIn: state.isLoggedIn,
    }));
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        signup({ ...data, id: 0 }); // Pass a second argument to the signup function
        console.log("inside tthe sinpu form teh ", data);
    };

    useEffect(() => {
        if(isLoggedIn) {
            navigate('/');
        }
    }
    ,[isLoggedIn]);

    return (
        <div className="min-h-screen flex  justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-700">
                        Create your account
                    </h2>
                </div>
                <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="role" className="sr-only">
                                Role
                            </label>
                            <select
                                id="role"
                                required
                                className="form-input"
                                {...register('role')}
                            >
                                <option value="choose">Choose Your Role </option>
                                <option value="student">Student</option>
                                <option value="instructor">Instructor</option>
                            </select>
                        </div>
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
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="form-input"
                                placeholder="Email address"
                                {...register('email')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="form-input"
                                placeholder="Password"
                                {...register('password')}
                            />
                        </div>
                        {role === 'instructor' && (
                            <div className="mb-4">
                                <label htmlFor="bio" className="sr-only">
                                    Bio
                                </label>
                                <input
                                    id="bio"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Bio"
                                    {...register('bio')}
                                />
                            </div>
                        )}
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
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Already have an account? Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;