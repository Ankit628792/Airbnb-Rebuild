import { SearchIcon, UsersIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


function InputField({ scrolled, page, placeholder }) {

    const router = useRouter();

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const searchPlace = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        })
        setSearchInput('')
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (
        <>
            <div className={`left-1/2 z-50 -translate-x-1/2 ${(scrolled || page !== 'home') ? 'fixed top-2 z-50 scale-100' : 'fixed top-2 lg:absolute lg:top-36 lg:scale-110 xl:top-[9.5rem] xl:scale-125'} flex items-center border-2 rounded-full bg-white p-2 shadow-sm hover:shadow transition duration-150 ease`}>
                <input type="text"
                    className={`flex-grow pl-3 pr-1 bg-transparent outline-none text-sm font-normal tracking-wide placeholder-gray-400 text-gray-700 md:w-64 lg:w-80 xl:w-96 capitalize`}
                    placeholder={`${placeholder || 'Start your search'}`}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <SearchIcon className="h-8 text-white rounded-full p-2 bg-red-400 cursor-pointer" />

                {
                    searchInput &&
                    <div className={`rounded-xl absolute left-1/2 -translate-x-1/2 flex top-16 sm:top-10 sm:scale-90 flex-col bg-white shadow-lg lg:scale-95 ${(scrolled || page !== 'home') ? 'lg:top-12 xl:top-[4.5rem]' : 'lg:top-12 xl:top-14'}`}>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                            onChange={handleSelect}
                        />
                        <div className="flex items-center border-b pb-4 px-4">
                            <h2 className="text-2xl flex-grow text-left font-normal text-gray-900">Number of Guests</h2>
                            <UsersIcon className="h-5" />
                            <input type="number" min='1'
                                value={noOfGuests}
                                onChange={(e) => setNoOfGuests(e.target.value)}
                                className="w-12 pl-2 text-lg outline-none text-red-500 mx-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <button className="flex-grow py-4 border-r-2 text-gray-600 hover:bg-gray-900 hover:text-gray-50 transition duration-150 ease-in-out rounded-bl-xl" onClick={() => setSearchInput('')}>Cancel</button>
                            <button className="flex-grow py-4 text-red-500 hover:bg-red-500 hover:text-gray-50 transition duration-150 ease-in-out rounded-br-xl" onClick={searchPlace}>Search</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default InputField
