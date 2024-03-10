import companiesImage from "./../assets/companies.svg"; // replace with actual path
const Hero = () => {
return (
    <>
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex-col items-center justify-center lg:px-40">
                <h1 className="text-6xl font-bold text-center mb-8">
                    Teaching in the Internet age means we must teach{" "}
                    <span className="text-purple-600">tomorrow's</span> skills today
                </h1>
                <p className="text-gray-600 text-center mb-12">
                    Provides you with the latest online learning system and material
                    that help your
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
                        Join as Instructor
                    </button>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
                        Join as Student
                    </button>
                </div>
                <div className="flex justify-center space-x-8 mt-12">
                    <img src={companiesImage} alt="" />
                </div>
            </div>
        </div>
    </>
);};
export default Hero;
