import React from 'react';
import { useAuthStore } from '../store/store'; // replace with your actual path

const Profile = () => {
    // const { user } = useAuthStore((state) => state.user  );
    const user   =  {
        name: "John Doe",
        email: "hello@email",
        role: "student",
        image: "https://randomuser.me"
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col bg-white shadow-xl rounded-lg p-8">
                <img className="w-24 h-24 rounded-full mx-auto" src={user.image} alt={user.name} />
                <div className="mt-4 text-center">
                    <h1 className="text-xl font-bold">{user.name}</h1>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-500 text-sm">{user.role}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;