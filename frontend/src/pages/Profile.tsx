import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/store'; // replace with your actual path

const Profile = () => {
    const { user, deleteUser } = useAuthStore((state) => state);
    const navigate = useNavigate();
    const handleDeleteAccount = async () => {
        try {
            deleteUser(user?.role || '', user?.id || 0);
            navigate("/");
            

        } catch (error) {
            console.error(error);
            // Handle error here
        }
    };

    return (
        <div className="flex justify-center h-screen  bg-gray-200">
            <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2 h-3/4 lg:w-1/3  overflow-hidden mx-1 my-10">
                <div className="p-6 items-center  justify-center">
                    <div className="text-center">            
                        {
                            user?.role === "instructor" ? (
                                <h1 className="text-lg md:text-xl lg:text-2xl text-primary font-bold">Instructor Profile</h1>
                            ) : (
                                <h1 className="text-lg md:text-xl lg:text-2xl text-primary text-pri font-bold">Student Profile</h1>
                            )
                        }
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white"
                            src={user?.imageUrl || 'https://via.placeholder.com/128'}
                            alt={user?.name || 'Profile'}
                        />
                    </div>
                    <div className="mt-4 mx-4 flex flex-col justify-start items-start space-y-4">
                        <div className="flex justify-start items-center space-x-4">
                            <h2 className="text-sm md:text-lg font-bold text-gray-500">Name:</h2>
                            <p className="text-md md:text-xl">{user?.name || 'John Doe'}</p>
                        </div>
                        <div className="flex justify-start items-center space-x-4">
                            <h2 className="text-sm md:text-lg font-bold text-gray-500">Email:</h2>
                            <p className="text-md md:text-xl text-gray-600">{user?.email || 'hello@email.com'}</p>
                        </div>
                        <div className="flex justify-start items-center space-x-4">
                            <h2 className="text-sm md:text-lg font-bold text-gray-500">Role:</h2>
                            <p className={`text-md md:text-xl text-gray-500 rounded-full px-2 ${user?.role === "instructor" ? "bg-blue-500 text-white" : user?.role === "lead" ? "bg-green-500 text-white" : ""}`}>
                                {user?.role === "lead" ? 'Student' : user?.role || 'student'}
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <hr className="border-gray-300" />
                        {/* Add additional profile information or components here */}
                 
                    <button
                    className="w-full py-2  text-white bg-red-500 hover:bg-red-700 rounded"
                    onClick={handleDeleteAccount}
                    >
                    Delete Account
                    </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;