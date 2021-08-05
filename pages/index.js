import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import ExtraLargeCard from '../components/ExtraLargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, liveAnywhere, discover }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 sm:gap-x-10">
            {
              exploreData?.map((item, i) => (
                <SmallCard key={i} img={item.img} distance={item.distance} location={item.location} />
              ))
            }
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold pb-5 pt-10">Live Anywhere</h2>
          <div className="flex items-center space-x-4 overflow-scroll p-3 -ml-3">
            {
              liveAnywhere?.map((item, i) => (
                <MediumCard key={i} img={item.img} title={item.title} />
              ))
            }
          </div>
        </section>

        <ExtraLargeCard
          img='/images/getInspired.webp'
          title='The Greatest Outdoors'
          desc='Wishlists curated by airbnb'
          buttonText='Get inspired'
          textColor='invert-0'
        />

        <section>
          <h2 className="text-4xl font-bold py-5">Discover things to do</h2>
          <div className="flex items-center space-x-4 overflow-scroll p-3 -ml-3">
            {
              discover?.map((item, i) => (
                <MediumCard key={i} img={item.img} title={item.title} desc={item.desc} large={true} />
              ))
            }
          </div>
        </section>

        <ExtraLargeCard
          img='/images/learnMore.webp'
          title='Try hosting'
          desc='Earn extra income and unlock new opportunities by sharing your space.'
          buttonText='Learn more'
          textColor='invert'
        />

      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://sample-api-data.vercel.app/api/exploreData').then((res) => res.json());
  const liveAnywhere = await fetch('https://sample-api-data.vercel.app/api/liveAnywhere').then((res) => res.json());
  const discover = await fetch('https://sample-api-data.vercel.app/api/discover').then((res) => res.json());

  return {
    props: {
      exploreData,
      liveAnywhere,
      discover
    }
  }
}