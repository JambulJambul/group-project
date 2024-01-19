import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';

const containerStyle = {
    width: '400px',
    height: '400px'
};


function GoogleMaps({data}) {
    const location = data
    console.log(data)
    const params = new URLSearchParams(location?.search);
    console.log(params)
    const latParam = parseFloat(params.get('lat')) || -6.224874;
    const lngParam = parseFloat(params.get('lng')) || 106.842876;
    console.log(latParam, "<< lat param")
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCH3JbgjP0VnIiuK1pC0wY2v_"
    })

    const center = {
        lat: latParam,
        lng: lngParam
    };
    

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMaps)