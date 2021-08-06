import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
import { useState } from 'react'

function InfoCard({ img, location, title, desc, star, price, total }) {
    const [liked, setLiked] = useState(false)
    return (
        <div className="flex flex-col sm:flex-row p-4 my-3 border-b cursor-pointer rounded-xl bg-white hover:opacity-90 hover:scale-[0.99] hover:shadow-lg transition transform duration-200 ease-out">
            <div className="relative h-52 w-full sm:h-52 sm:w-60 md:w-80 flex-shrink-0">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow p-5">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">{location}</p>
                    <HeartIcon fill={`${liked ? 'rgba(255, 100, 100)' : '#fff'}`} strokeWidth="1" stroke={`${liked ? 'rgba(255, 100, 100)' : '#000'}`} onClick={() => setLiked(!liked)} className="h-8 cursor-pointer" />
                </div>

                <h4 className="text-xl font-medium">{title}</h4>
                <div className="w-10 border-b pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{desc}</p>

                <div className="flex items-end justify-between pt-5">
                    <p className="flex items-center">

                        {Array(Math.floor(star)).fill().map((_, i) =>
                            <StarIcon className="h-5 text-red-500" />
                        )}
                        &nbsp;{Math.floor(star)}</p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-1">{price}</p>
                        <p className="text-right font-light">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
