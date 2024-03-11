import { FaBullhorn, FaBriefcase, FaLightbulb } from "react-icons/fa";
import statisticsImage from "./../assets/statistics.svg";

const Statistics = () => {
  return (
    <div className="container bg-tertiary text-white py-16 shadow-md">
      <div className="max-w-full flex flex-col  px-2 sm:px-6 lg:px-4 lg:flex-row justify-between gap-20">
        <img src={statisticsImage} alt="Statistics" className=" lg:w-1/2 h-96 " />
        <div className="flex flex-col items-start ml-8">
          <h2 className="text-3xl font-bold mb-4">
            The number one factor in relevance drives out resistance.
          </h2>
          <p className="mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="flex items-center mb-4">
            <FaBullhorn className="mr-2" />
            <span>Public Speaking</span>
          </div>
          <div className="flex items-center mb-4">
            <FaBriefcase className="mr-2" />
            <span>Career-Oriented</span>
          </div>
          <div className="flex items-center mb-8">
            <FaLightbulb className="mr-2" />
            <span>Creative Thinking</span>
          </div>
          <button className="bg-white text-purple-600 px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
