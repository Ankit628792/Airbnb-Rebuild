import Image from 'next/image'
function SmallCard({ img, location, distance }) {
    return (
        <div className="flex items-center m-2 p-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-white hover:shadow-md hover:scale-105 transition transform duration-200 ease-out">

            <div className="relative h-16 w-16 rounded-lg shadow-lg">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>

            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>

        </div>
    )
}

export default SmallCard
