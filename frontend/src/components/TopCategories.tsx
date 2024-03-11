import { RiBook2Line, RiComputerLine, RiMusic2Line, Ri24HoursFill, RiCalendarTodoFill } from 'react-icons/ri';
import { FaCode, FaAndroid, FaApple, FaWindows, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiPython, SiCplusplus, SiRuby , SiRust} from 'react-icons/si';
import { categories } from './../data/categories';

const TopCategories = () => {
    const icons: { [key: string]: JSX.Element } = {
        RiBook2Line: <RiBook2Line className="text-4xl text-gray-700" />,
        RiComputerLine: <RiComputerLine className="text-4xl text-gray-700" />,
        RiMusic2Line: <RiMusic2Line className="text-4xl text-gray-700" />,
        Ri24HoursFill: <Ri24HoursFill className="text-4xl text-gray-700" />,
        RiCalendarTodoFill: <RiCalendarTodoFill className="text-4xl text-gray-700" />,
        FaCode: <FaCode className="text-4xl text-gray-700" />,
        FaAndroid: <FaAndroid className="text-4xl text-gray-700" />,
        FaApple: <FaApple className="text-4xl text-gray-700" />,
        FaWindows: <FaWindows className="text-4xl text-gray-700" />,
        FaDatabase: <FaDatabase className="text-4xl text-gray-700" />,
        SiJavascript: <SiJavascript className="text-4xl text-gray-700" />,
        SiPython: <SiPython className="text-4xl text-gray-700" />,
        SiCplusplus: <SiCplusplus className="text-4xl text-gray-700" />,
        SiRuby: <SiRuby className="text-4xl text-gray-700" />,
        SiRust: <SiRust className="text-4xl text-gray-700" />,
    };

    return (
        <div className="container bg-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="heading-main mb-8 text-center">Explore Top Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                            style={{
                                backdropFilter: 'blur(20px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            }}
                        >
                            {icons[category.icon]}
                            <span className="text-purple-600 font-bold mt-2">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCategories;