import { getCenter } from 'geolib'
import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});

    //props driling
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    //center point of coordinates
    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10
    })

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/ankit628792/cks0ivxbk1c1v17p7ar3evdja'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {
                searchResults.map((item, i) => (
                    <div key={i}>
                        <Marker longitude={item.long} latitude={item.lat} offsetLeft={-10} offsetTop={-10}>
                            <div className="w-9 h-9 cursor-pointer text-xl animate-bounce"
                                aria-label="push-pin"
                                onClick={() => setSelectedLocation(item)}
                                >
                                <img src="/images/map-pin.png" alt="" />
                            </div>
                        </Marker>

                        {
                            selectedLocation.long === item.long &&
                            <Popup
                                onClose={() => setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={item.lat}
                                longitude={item.long}
                                className="rounded-full z-40 cursor-pointer transition duration-150 ease-out"
                            >
                                {item.title}
                            </Popup>
                        }
                    </div>
                ))
            }
        </ReactMapGL>
    )
}

export default Map
