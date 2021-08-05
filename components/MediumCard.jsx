import Image from "next/image"

function MediumCard({img, title ,large, desc}) {
    return (
        <div className="cursor-pointer hover:scale-95 transform transition duration-300 ease-out">
            <div className={`relative h-80 w-80 ${large && 'sm:w-96 sm:h-96'} drop-shadow-xl`}>
                <Image
                src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                 />
            </div>
            <h3 className="text-xl mt-3">{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default MediumCard
