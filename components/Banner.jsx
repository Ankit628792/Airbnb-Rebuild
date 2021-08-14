import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
import InputField from './InputField'

function Banner({ scrolled, page }) {
    const router = useRouter();
    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] w-full">
            <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute w-full h-full flex items-center justify-center flex-col text-center bg-black bg-opacity-20 p-1">
                <InputField scrolled={scrolled} page={page} />
                <p className="text-3xl sm:text-5xl xl:text-6xl text-white font-bold">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 text-lg bg-white px-10 py-4 shadow-md rounded-full font-bold mt-4 xl:mt-6 hover:shadow-xl active:scale-90 transition duration-150"
                    onClick={() => router.push('https://www.airbnb.co.in/s/homes?search_mode=flex_destinations_search&date_picker_type=flexible_dates')}
                    >
                    I'm flexible
                </button>
            </div>

        </div>

    )
}

export default Banner
