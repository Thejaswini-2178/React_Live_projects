import React from 'react';
import mapData from './mapSectionData.json'; // Assuming the JSON file is in the same directory

const Mapsection = () => {
    const { mapSection } = mapData;
    const { title, mapEmbedLink, width, height } = mapSection;

    return (
        <div>
            <section className="map_section">
                <div className="map_container">
                    <div className="map-responsive">
                        <iframe 
                            src={mapEmbedLink} 
                            width={width} 
                            height={height} 
                            frameBorder={0} 
                            style={{ border: 0, width: '100%', height: '100%' }} 
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mapsection;
