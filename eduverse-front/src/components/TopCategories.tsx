
import React from 'react'
import { RiBook2Line, RiComputerLine, RiMusic2Line } from 'react-icons/ri'
import { categories } from './../data/categories'

const TopCategories = () => {
    const icons: { [key: string]: JSX.Element } = {
        RiBook2Line: <RiBook2Line />,
        RiComputerLine: <RiComputerLine />,
        RiMusic2Line: <RiMusic2Line />,
        // Add additional icons
    }

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl  font-bold mb-8 text-center">Explore Top Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-purple-100 rounded-lg p-4 flex flex-col items-center justify-center">
                            {icons[category.icon]}
                            <span className="text-purple-600 font-bold mt-2">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCategories
