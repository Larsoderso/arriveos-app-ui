import React, { useState } from "react";

import MapGL from "@urbica/react-map-gl";
import Draw from "@urbica/react-map-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

function RegionMap(props) {
  function drawDone(features) {
    setFeatures({ features });
    props.drawingDone();
  }
  const [features, setFeatures] = useState();
  return (
    <div>
      <MapGL
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken="pk.eyJ1IjoibGFyc2RpIiwiYSI6ImNrMXY1NzllOTAwZGYza3RrbWVpeDl1NTMifQ.iFu8GW4UGAtz9wtC3ILchA"
        latitude={50.935173}
        longitude={6.953101}
        zoom={11}
      >
        <Draw
          modeOptions={["polygon"]}
          onDrawCreate={({ features }) => drawDone(features)}
          onDrawUpdate={({ features }) => setFeatures({ features })}
        />
      </MapGL>
      <div>{JSON.stringify(features)}</div>
    </div>
  );
}

export default RegionMap;
