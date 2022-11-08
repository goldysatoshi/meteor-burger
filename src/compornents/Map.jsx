import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const Map = () => {

  const center = useMemo(() => ({ lat: 35.667158, lng: 139.711613 }), []);

  return (
    <div className='map'>
      <div className="content">
        <div className='sub'>
         <h4>-SHOP-</h4>
        </div>
        <div className="googlemap">
        <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
         <MarkerF position={center} />
        </GoogleMap>
        </div>

        <div className="list">
            <div className="list-item">
                <p className="list-name">address</p>
                <p className="listdet">〒150-0001<br />東京都渋谷区<br />神宮前４丁目２-２２<br />アビターレ原宿</p>
            </div>
            <div className="list-item">
                <p className="list-name">access</p>
                <p className="listdet">表参道駅A2出口より<br />徒歩６分</p>
            </div>
            <div className="list-item">
                <p className="list-name">hour</p>
                <p className="listdet">11:30 - 15:00<br /> (L.O.14:30) / 年中無休<br /><br />
                                        18:00 - 21:30<br /> (L.O.21:00) / 年中無休
                </p>
            </div>
            <div className="list-item">
                <p className="list-name">tel</p>
                <p className="listdet">03-3401-xxxx</p>
            </div>
        </div>
      
      </div>
    </div>
  )
}

