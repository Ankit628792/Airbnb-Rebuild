import { SearchIcon } from '@heroicons/react/solid'


function InputField() {
    return (
        <div className="flex items-center md:border-2 rounded-full bg-white py-2 md:shadow-sm md:hover:shadow">
            <input className={`flex-grow pl-5 bg-transparent outline-none text-sm font-normal tracking-wide placeholder-gray-400 text-gray-700`} type="text" placeholder="Start your search" />
            <SearchIcon className="h-8 hidden md:inline-flex text-white rounded-full p-2 bg-red-400 cursor-pointer md:mx-2" />
        </div>
    )
}

export default InputField
