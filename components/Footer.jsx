function Footer() {
    return (
        <>
        <div className=" bg-white text-gray-600">

            <div className="footer max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 py-10 px-10 sm:px-16">
                <div className="space-y-3 text-gray-800">
                    <h5 className="font-bold">ABOUT</h5>
                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Airbnb 2021</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                </div>
                <div className="space-y-3 text-gray-800">
                    <h5 className="font-bold">COMMUNITY</h5>
                    <p>Diversity & Belonging</p>
                    <p>Accessibility</p>
                    <p>Airbnb Associates</p>
                    <p>Frontline Stays</p>
                    <p>Guest Referrals</p>
                </div>
                <div className="space-y-3 text-gray-800">
                    <h5 className="font-bold">HOST</h5>
                    <p>Host your home</p>
                    <p>Host an Online Experience</p>
                    <p>Responsible hosting</p>
                    <p>Resource Centre</p>
                    <p>Community Centre</p>
                </div>
                <div className="space-y-3 text-gray-800">
                    <h5 className="font-bold">SUPPORT</h5>
                    <p>Our COVID-19 Response</p>
                    <p>Help Centre</p>
                    <p>Cancellation options</p>
                    <p>Neighbourhood Support</p>
                    <p>Trust & Safety</p>
                </div>

            </div>
            <hr />
            <p className="text-center text-xl p-5 font-medium">
                Design & Developed by <a href="https://http://ak-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="text-red-400">Ankit</a> <br className="sm:hidden" /> &copy; 2021 All right reserved
            </p>

            </div>
        </>
    )
}

export default Footer
