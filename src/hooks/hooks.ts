import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';
import { OfferPreviewType } from '../types/offer-preview';

function useMap(mapRef:React.MutableRefObject<HTMLDivElement | null>, city: OfferPreviewType['city']) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
