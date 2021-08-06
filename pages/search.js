import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

// pk.eyJ1IjoiYW5raXQ2Mjg3OTIiLCJhIjoiY2tzMGl0N3dpMGRxNzJ2cGNwMjR1d3AzZSJ9.7TrOS4hspKggKFKTN6PyuA

function search({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formatedStartDate} - ${formatedEndDate}`

    return (
        <div className="min-h-screen bg-gray-100">
            <Header page="search" placeholder={`${location} | ${range} | ${noOfGuests} guest`} />

            <main className="flex">
                <section className="flex-grow pt-28 px-6 pb-10 overflow-y-scroll max-h-screen">
                    <p className="text-sm leading-8"> 300+ Stays - <span className="bg-white py-2 px-4 rounded-full">{formatedStartDate}</span> - <span className="bg-white py-2 px-4 rounded-full">{formatedEndDate}</span> - for <span className="bg-white py-2 px-4 rounded-full">{noOfGuests} guests</span> </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className=" hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>
                    <p className="pb-2">Review COVID-19 travel restrictions before you book. <a href="https://www.airbnb.co.in/help/topic/1418/government-travel-restrictions-and-advisories" className="bg-white py-2 px-4 rounded-full cursor-pointer text-red-400 hover:text-red-600">Learn more</a></p>
                    <div className="w-full border-b pb-2" />
                    <div className="flex flex-col">
                        {
                            searchResults.map((item, i) => (
                                <InfoCard key={i}
                                    img={item.img}
                                    location={item.location}
                                    title={item.title}
                                    desc={item.description}
                                    star={item.star}
                                    price={item.price}
                                    total={item.total}
                                />
                            ))
                        }
                    </div>
                </section>

                <section className="max-h-screen hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then((res) => res.json())

    return {
        props: {
            searchResults
        }
    }
}
