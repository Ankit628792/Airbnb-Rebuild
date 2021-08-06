import Image from "next/image"

function ExtraLargeCard({ img, title, desc, buttonText, textColor }) {
    return (
        <section className="relative py-16 cursor-pointer overflow-hidden">

            <div className="relative h-96 min-w-[300px] drop-shadow-xl">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            <div className={`absolute top-16 rounded-2xl h-96 p-10 sm:px-16 bg-opacity-50 bg-gradient-to-r from-white to-transparent font-medium flex flex-col justify-center items-start max-w-sm md:max-w-lg filter ${textColor}`}>
                <h3 className="text-4xl md:text-5xl font-bold tracking-wide">{title}</h3>
                <p className="py-2 text-lg">{desc}</p>
                <button className="text-base text-white bg-gray-900 px-4 py-3 rounded-lg mt-2 active:scale-95 transition duration-150">{buttonText}</button>
            </div>

        </section>
    )
}

export default ExtraLargeCard
